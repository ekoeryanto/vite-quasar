<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="icons.menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
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
import { outlinedChat, outlinedCode, outlinedFavoriteBorder, outlinedMenu, outlinedPublic, outlinedRecordVoiceOver, outlinedRssFeed, outlinedSchool } from '@quasar/extras/material-icons-outlined';
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: outlinedSchool,
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: outlinedCode,
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: outlinedChat,
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: outlinedRecordVoiceOver,
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: outlinedRssFeed,
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: outlinedPublic,
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: outlinedFavoriteBorder,
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const icons = {
      menu: outlinedMenu
    }
    return {
      icons,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass">
@import '../quasar/core.sass'
</style>
