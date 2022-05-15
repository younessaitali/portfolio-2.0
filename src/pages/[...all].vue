<script setup lang="ts">
  const { t } = useI18n();
  const router = useRouter();
</script>

<template>
  <div>
    {{ t('not-found') }}
    <br />
    <button class="btn text-lg font-normal" @click="router.back()">
      {{ t('button.back') }}
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
