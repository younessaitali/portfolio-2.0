<template>
  <div font="sans" class="relative overflow-hidden">
    <slot name="header">
      <App-header class="absolute z-40 inset-x-0" />
    </slot>
    <main class="snap-y overflow-y-auto snap-mandatory h-screen">
      <slot />
    </main>
  </div>
</template>
