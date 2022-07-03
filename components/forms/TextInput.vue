<script setup lang="ts">
    interface Props {
        label?: string;
        modelValue: string;
        errors?: string;
        isDirty?: boolean;
        isTextarea?: boolean;
    }

    const {
        label = '',
        errors,
        isTextarea = false,
        modelValue,
        isDirty = false
    } = defineProps<Props>();

    const emit = defineEmits<{
        (e: 'update:modelValue', value: string): void;
    }>();

    const updateModelValue = (event: Event) => {
        const target = event.target as HTMLInputElement;
        emit('update:modelValue', target.value);
    };
</script>

<template>
    <div class="w-full mx-a sm:mt-0 sm:col-span-2 max-w-sm text-left">
        <label v-if="label" :for="label" class="sr-only">{{ label }}</label>

        <div class="relative rounded-md shadow-sm">
            <component
                :is="isTextarea ? 'textarea' : 'input'"
                v-bind="$attrs"
                @input="updateModelValue"
                class="block w-full py-6 text-base dark:bg-dark-blue placeholder-white/50 h-10 transition duration-150 ease-in-out border-b-3 border-champagne outline-none sm:text-lg sm:leading-5" />
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-3"
                v-if="errors && isDirty">
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
        <template v-if="errors && isDirty">
            <p class="mt-2 text-sm text-red-600">
                {{ errors }}
            </p>
        </template>
    </div>
</template>
