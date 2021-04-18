<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      elevated
      :class="darkStyle"
    >
      <q-toolbar style="padding: 0.75rem 0.35rem">
        <q-btn
          flat
          dense
          round
          :icon="icons.menu"
          aria-label="Menu"
          @click="handleMenu"
        />

        <q-toolbar-title>
          Quasar Vite
        </q-toolbar-title>

        <q-btn
          dense
          round
          flat
          :icon="icons.more"
          aria-label="Alternative Menu"
        >
          <q-menu
            ref="rmenu"
            :offset="[-16, 0]"
          >
            <q-list>
              <template
                v-for="menu of menus"
                :key="menu.label"
              >
                <q-item
                  clickable
                  :to="menu.to"
                  @click="menu.handler"
                >
                  <q-item-section v-text="menu.label" />

                  <q-item-section
                    v-if="menu.icon"
                    avatar
                  >
                    <q-icon :name="menu.icon" />
                  </q-item-section>
                </q-item>

                <q-separator
                  v-if="menu.separator"
                  :key="`sep-${menu.label}`"
                />
              </template>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawer"
      :mini="miniDrawer"
      show-if-above
      side="left"
      :bordered="!dark"
    >
      <!-- drawer content -->
      <q-list>
        <template
          v-for="(nav, i) of navs"
          :key="i"
        >
          <q-separator
            v-if="nav.separator"
          />
          <q-item
            :to="nav.to"
            :exact="nav.exact"
          >
            <q-item-section
              v-if="nav.icon"
              avatar
            >
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-text="nav.label" />
              <q-item-label
                v-if="nav.caption"
                caption
                v-text="nav.caption"
              />
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <router-view v-slot="{ Component }">
      <Suspense>
        <template #fallback>
          <q-inner-loading showing>
            <q-spinner-puff
              size="120px"
              color="primary"
            />
          </q-inner-loading>
        </template>
        <template #default>
          <q-page-container>
            <component :is="Component" />
          </q-page-container>
        </template>
      </Suspense>
    </router-view>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapMutations } from 'vuex'
import {
  outlinedMenu,
  outlinedDarkMode,
  outlinedLightMode,
  outlinedMoreVert,
  outlinedDashboard,
  outlinedInfo,
} from '@quasar/extras/material-icons-outlined';

const navs = [
  { label: 'Dashboard', icon: outlinedDashboard, to: '/', exact: true },
  { label: 'About', icon: outlinedInfo, to: '/about' },
];

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const icons = Object.freeze({
      menu: outlinedMenu,
      more: outlinedMoreVert,
    });

    return {
      icons,
      navs
    }
  },
  computed: {
    dark: {
      get() {
        return this.$store.state.layout.dark
      },
      set(v) {
        this.setDark(v)
      }
    },
    leftDrawer: {
      get() {
        return this.$store.state.layout.leftDrawer
      },
      set(v) {
        this.setLeftDrawer(v)
      }
    },
    miniDrawer: {
      get() {
        return this.$store.state.layout.miniDrawer
      },
      set(v) {
        this.setMiniDrawer(v)
      }
    },
    darkStyle() {
      return this.dark
        ? 'bg-dark text-white'
        : 'bg-white text-dark';
    },
    menus() {
      return [
        {
          label: `${this.dark ? 'Light' : 'Dark'}`,
          icon: this.dark ? outlinedLightMode : outlinedDarkMode,
          handler: (e) => {
            this.setDarkMode(!this.dark);
            this.$refs.rmenu.hide()
          },
        },
      ];
    },
  },
  methods: {
    ...mapActions('layout', ['setDarkMode']),
    ...mapMutations('layout', ['setMiniDrawer', 'setLeftDrawer']),
    handleMenu() {
      if (this.leftDrawer) {
        this.leftDrawer = !this.miniDrawer;
        this.miniDrawer = !this.miniDrawer;
      } else {
        this.leftDrawer = !this.leftDrawer;
      }
    },
  }
});
</script>

<style lang="sass">
@import '../quasar/core.sass'
</style>
