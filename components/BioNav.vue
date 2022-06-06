<script setup lang="ts">
  const { bioList } = useBioList();
  const route = useRoute();
</script>

<template>
  <nav aria-label="Tabs" class="px-10 w-80 max-w-[90vw]">
    <ul class="items-center grid gap-x-6 grid-cols-5">
      <li
        class="h-5 w-5 border-2 flex items-center justify-center border-champagne rounded-md"
        v-for="bio in bioList"
        :key="bio.key">
        <a
          :href="bio.path"
          :class="[
            'h-3 w-3 rounded-sm',
            {
              'bg-champagne':
                route.path.toLowerCase() === bio.path.toLowerCase()
            }
          ]"
          ><span class="sr-only">{{ bio.label }}</span></a
        >
      </li>
    </ul>
  </nav>
</template>
