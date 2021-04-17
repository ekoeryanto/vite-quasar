<template>
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
        <component :is="Component" />
      </template>
    </Suspense>
  </router-view>
</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
