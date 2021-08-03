<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.png" />
    <q-btn class="bg-primary" label="Btn" />
  </q-page>
</template>

<script setup>
import { useQuasar } from '@/quasar'
import { onMounted } from 'vue'

onMounted(() => {
  const $q = useQuasar()

  $q.notify({
    position: 'top-left',
    type: 'negative',
    message: 'This is a "positive" type notification.'
  })
  console.log($q)
})
</script>
