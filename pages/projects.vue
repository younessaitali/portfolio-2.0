<script setup lang="ts"></script>

<template>
  <section class="grid grid-cols-6">
    <div class="col-span-4">
      <div class="flex flex-col">
        <div class="p-6">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
            alt="Angled front view with bag zipped and handles upright."
            class="mx-auto w-3/4 aspect-square object-center object-cover sm:rounded-lg" />

          <!-- More images... -->
        </div>

        <!-- Image selector -->
        <div class="hidden my-6 w-4/5 max-w-2xl mx-auto sm:block lg:max-w-none">
          <div
            class="grid grid-cols-4 gap-6"
            aria-orientation="horizontal"
            role="tablist">
            <button
              v-for="item in 4"
              :key="item"
              class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
              aria-controls="tabs-2-panel-1"
              role="tab"
              type="button">
              <span class="sr-only"> Angled view </span>
              <span class="absolute inset-0 rounded-md overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                  alt=""
                  class="w-full h-full object-center object-cover" />
              </span>
              <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
              <span
                class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                aria-hidden="true"></span>
            </button>

            <!-- More images... -->
          </div>
        </div>
      </div>
    </div>
    <nav class="col-span-2">
      <ul class="flex flex-col gap-y-2">
        <li
          v-for="item in 7"
          :key="item"
          font="bold"
          text="blue-gray 5xl center"
          class="p5 capitalize cursor-pointer hover:bg-blue"
          border="b-2 champagne">
          project
        </li>
      </ul>
    </nav>
  </section>
</template>
