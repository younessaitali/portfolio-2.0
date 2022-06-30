<script setup lang="ts">
  const email = $ref('');
  const name = $ref('');
  const message = $ref('');
</script>

<template>
  <nuxt-layout>
    <div
      class="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center px-4 md:mt-28 mt-16 gap-y-10">
      <form action="" id="contact-form" class="flex flex-1 flex-col gap-y-6xl">
        <forms-text-input
          type="text"
          v-model="name"
          label="Name"
          placeholder="Your Name" />
        <forms-text-input
          v-model="email"
          label="email"
          type="text"
          placeholder="Your Email" />
        <forms-text-input
          v-model="message"
          label="description"
          placeholder="Share your thought"
          :is-textarea="true" />
      </form>
      <div class="flex-1 text-left mx-a relative text-base px-2">
        <span
          lg="inline text-9rem"
          class="text-transparent hidden absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"
          >Get In Touch</span
        >
        <h2 class="font-medium text-6xl">Get In Touch</h2>
        <p class="text-canvas mt-5 text-lg max-w-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam
          morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi
          malesuada elementum sagittis, posuere nam.
        </p>
      </div>
    </div>
    <button
      type="submit"
      class="mt-24 mx-a mb-10 md:mb-0 text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne"
      form="contact-form">
      send <icons-send-icon />
    </button>
  </nuxt-layout>
</template>
