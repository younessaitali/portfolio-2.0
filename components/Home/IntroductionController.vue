<script setup lang="ts">
  const intro = ref<number>(0);
</script>

<template>
  <form class="px-10 w-80 max-w-[90vw]">
    <fieldset>
      <div class="items-center grid gap-x-6 grid-cols-5">
        <label
          v-for="index in 5"
          :key="index"
          class="-m-0.5 relative rounded-full flex items-center justify-center cursor-pointer">
          <input
            type="radio"
            name="color-choice"
            v-model="intro"
            :value="index"
            class="sr-only"
            aria-labelledby="color-choice-0-label" />
          <p id="color-choice-0-label" class="sr-only">Pink</p>
          <span
            aria-hidden="true"
            class="h-5 w-5 border-2 flex items-center justify-center border-champagne rounded-md">
            <span
              :class="[
                'h-3 w-3 inline-block  rounded-sm',
                {
                  'bg-champagne': index === intro
                }
              ]"></span>
          </span>
        </label>
      </div>
    </fieldset>
  </form>
</template>
