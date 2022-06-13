<script lang="ts" setup>
  interface navItem {
    name: string;
    path: string;
    isHover: boolean;
  }

  const navItems = ref<navItem[]>([
    // {
    //   name: 'Blog',
    //   path: '/blog',
    //   isHover: false
    // },
    {
      name: 'Projects',
      path: '/Projects',
      isHover: false
    }
  ]);

  const MouseLeave = (item: navItem) => {
    item.isHover = true;
    setTimeout(() => {
      item.isHover = false;
    }, 300);
  };
</script>

<template>
  <header
    class="items-end flex justify-between px-4 sm:px-6 lg:px-8 py-6 md:space-x-10">
    <NuxtLink cursor="pointer" :to="{ path: '/' }">
      <span class="sr-only">Logo</span>
      <logo w="18 lg:max-28" h="18 lg:28" />
    </NuxtLink>
    <nav class="flex justify-end gap-x-6 font-semibold">
      <NuxtLink
        hover="text-champagne"
        cursor="pointer"
        v-underline-animation
        v-for="item in navItems"
        :key="item.name"
        class="md:text-3xl text-2xl capitalize relative text-center text-stroke-sm text-stroke-champagne text-transparent"
        @mouseleave="MouseLeave(item)"
        :to="{ path: item.path }"
        >{{ item.name }}</NuxtLink
      >
    </nav>
  </header>
</template>
