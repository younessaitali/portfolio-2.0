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
    class="absolute z-40 container mx-auto inset-x-0 items-end flex justify-between sm:px-6 lg:px-8 py-9 md:space-x-10">
    <router-link cursor="pointer" :to="{ path: '/' }">
      <span class="sr-only">Logo</span>
      <logo width="100" hight="100" />
    </router-link>
    <nav
      class="flex justify-end space-x-8 text-champagne font-semibold text-2xl">
      <router-link
        cursor="pointer"
        v-for="item in navItems"
        :key="item.name"
        :to="{ path: item.path }"
        >{{ item.name }}</router-link
      >
    </nav>
  </header>
</template>
