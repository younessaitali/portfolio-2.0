<template>
    <transition
        enter-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
        enter-active-class="transition duration-200 ease-out">
        <slot></slot>
    </transition>
</template>
