<script setup lang="ts">
  const email = $ref('');
  const name = $ref('');
  const message = $ref('');
</script>

<template>
  <nuxt-layout>
    <div class="grid grid-cols-2 mt-28 gap-y-9xl">
      <form action="" id="contact-form" class="flex flex-col gap-y-6xl">
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
      <div class="text-left relative text-base">
        <span
          class="text-transparent absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"
          >Get In Touch</span
        >
        <h2 class="font-medium text-6xl">Get In Touch</h2>
        <p class="text-canvas mt-5 text-lg max-w-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam
          morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi
          malesuada elementum sagittis, posuere nam.
        </p>
      </div>
      <button
        type="submit"
        class="col-span-2 mx-a text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne"
        form="contact-form">
        send <icons-send-icon />
      </button>
    </div>
  </nuxt-layout>
</template>
