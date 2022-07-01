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
  <header
    class="items-end border-b border-champagne md:border-b-0 h-24 flex justify-between items-center">
    <NuxtLink class="w-28" to="/">
      <span class="sr-only">Logo</span>
      <logo class="md:w-14 w-12 my-2 mx-auto" />
    </NuxtLink>
    <nav
      md="border-b border-l"
      class="text-base flex-1 flex items-center justify-end h-full border-champagne">
      <div
        class="mr-8 xl:mr-28 md:flex items-center justify-center gap-x-1 hidden">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          class="text-xl relative pl-4 uppercase pr-7 group overflow-hidden font-medium"
          :to="item.path">
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
        <DarkModeToggle class="hidden lg:hidden md:inline-flex" />
      </div>
      <button class="md:hidden mr-4">
        <icons-menu-icon class="h-6 w-6" />
      </button>
    </nav>
  </header>
</template>
