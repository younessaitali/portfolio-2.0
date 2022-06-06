<script lang="ts" setup>
  const navItems = reactive([
    {
      name: 'Blog',
      path: '/blog',
      isActive: false
    },
    {
      name: 'Projects',
      path: '/Projects',
      isActive: false
    }
  ]);
</script>

<template>
  <header
    class="items-end flex justify-between px-4 sm:px-6 lg:px-8 py-9 md:space-x-10">
    <NuxtLink cursor="pointer" :to="{ path: '/' }">
      <span class="sr-only">Logo</span>
      <logo w="18 lg:max-28" h="18 lg:28" />
    </NuxtLink>
    <nav
      class="flex justify-end gap-x-6 text-champagne font-semibold md:text-2xl text-lg">
      <NuxtLink
        cursor="pointer"
        v-for="item in navItems"
        :key="item.name"
        :to="{ path: item.path }"
        >{{ item.name }}</NuxtLink
      >
    </nav>
  </header>
</template>
