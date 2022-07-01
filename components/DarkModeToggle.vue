<script setup lang="ts">
  const color = useColorMode();

  const isDark = computed(() => {
    return color.value === 'dark';
  });

  function toggleDark() {
    console.log('toggleDark');

    color.preference = color.value === 'dark' ? 'light' : 'dark';
  }
</script>

<template>
  <button
    @click="toggleDark"
    :class="[
      'relative inline-flex  flex-shrink-0 h-6 w-11 border-2 border-champagne rounded-full cursor-pointer transition-colors ease-in-out duration-200',
      {
        'bg-dark-blue': isDark,
        'bg-gray-200': !isDark
      }
    ]"
    role="switch"
    aria-checked="false">
    <span class="sr-only">Dark Mode Switch</span>

    <span
      :class="[
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-champagne shadow transform ring-0 transition ease-in-out duration-200',
        {
          'translate-x-5': isDark,
          'translate-x-0': !isDark
        }
      ]">
      <span
        :class="[
          'absolute inset-0 h-full w-full flex  text-white items-center justify-center transition-opacity',
          {
            'opacity-0 ease-out duration-100': isDark,
            'opacity-100 ease-in duration-200': !isDark
          }
        ]"
        aria-hidden="true">
        <div i-carbon-sun text-sm />
      </span>

      <span
        :class="[
          'absolute inset-0 text-white h-full w-full flex items-center  justify-center transition-opacity',
          {
            'opacity-100 ease-in duration-200': isDark,
            'opacity-0 ease-out duration-100': !isDark
          }
        ]"
        aria-hidden="true">
        <div i-carbon-moon text-sm />
      </span>
    </span>
    <span
      class="text-lg inline md:hidden lg:inline font-medium text-base absolute -top-1 -right-28"
      >{{ isDark ? 'Dark Mode' : 'Light Mode' }}</span
    >
  </button>
</template>
