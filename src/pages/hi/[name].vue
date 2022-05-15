<script setup lang="ts">
  import { useUserStore } from '~/stores/user';

  const props = defineProps<{ name: string }>();
  const router = useRouter();
  const user = useUserStore();
  const { t } = useI18n();

  watchEffect(() => {
    user.setNewName(props.name);
  });
</script>

<template>
  <div text-4xl>
    <div i-carbon-pedestrian inline-block />
  </div>

  <p>
    {{ t('hi', { name: props.name }) }}
  </p>

  <template v-if="user.otherNames.length">
    <div class="text-sm mt-4">
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>

  <button btn m="3 t6" text-sm @click="router.back()">
    {{ t('button.back') }}
  </button>
</template>
