<script setup lang="ts"></script>

<template>
  <nuxt-layout>
    <div class="grid grid-cols-2">
      <form action="" id="contact" class="flex flex-col gap-y-3">
        <!-- <input type="text" name="" id="" />
        <input type="email" name="" id="" />
        <input type="text" name="" id="" /> -->

        <div class="w-full sm:mt-0 sm:col-span-2 text-left">
          <div class="relative rounded-md shadow-sm">
            <input
              class="block w-full bg-buno h-8 placeholder-gray-800 transition duration-150 ease-in-out border-b-2 outline-none sm:text-base sm:leading-5"
              i
              placeholder="Your Email" />
            <!-- :class="[hasError ? errorClass : activeClass, Addclass]" -->
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              v-if="false">
              <svg
                class="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <p v-if="false" ref="errorx" class="mt-2 text-sm text-red-600">
            <!-- {{ errorMessage }} -->
          </p>
        </div>
      </form>
      <div class="text-left">
        <h2>Get In Touch</h2>
        <p>lorem</p>
      </div>
      <button>send</button>
    </div>
  </nuxt-layout>
</template>
