<script lang="ts" setup>
  const navItems = ref([
    // {
    //   name: 'Blog',
    //   path: '/blog',
    //   isActive: false
    // },
    {
      name: 'Work',
      path: '/work',
      isActive: false
    },
    {
      name: 'Contact',
      path: '/contact',
      isActive: false
    }
  ]);

  const route = useRoute();

  watch(
    route,
    () => {
      navItems.value.forEach((item) => {
        item.isActive = item.path === route.path;
      });
    },
    { immediate: true, deep: true }
  );
</script>

<template>
  <header class="items-end h-24 flex justify-between items-center">
    <NuxtLink cursor="pointer" class="w-28" :to="{ path: '/' }">
      <span class="sr-only">Logo</span>
      <logo w="14 " mx-a />
    </NuxtLink>
    <nav
      class="border-b border-l text-base flex-1 flex items-center justify-end h-full border-champagne">
      <div class="mr-28 flex gap-x-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          class="text-xl relative pl-4 pr-7 group overflow-hidden font-medium"
          :to="{ path: item.path }">
          <span
            :class="[
              'absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300',
              {
                'translate-y-0': item.isActive,
                'translate-y-[140%]': !item.isActive
              }
            ]"
            >&lt;</span
          >

          {{ item.name }}
          <span
            :class="[
              'absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300',
              {
                'translate-y-0': item.isActive,
                'translate-y-[140%]': !item.isActive
              }
            ]"
            >/&gt;</span
          >
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
