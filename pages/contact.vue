<script setup lang="ts">
    import { useField, useForm } from 'vee-validate';
    import { toFormValidator } from '@vee-validate/zod';
    import { string, object } from 'zod';

    type Status = 'pending' | 'success' | 'error' | 'idle';
    let status = $ref<Status>('idle');

    const validationSchema = toFormValidator(
        object({
            email: string()
                .min(1, { message: 'This filed is required' })
                .email({ message: 'Must be a valid email' }),
            name: string().min(1, { message: 'This filed is required' }),
            message: string().min(8, { message: 'Too short' })
        })
    );
    const { handleSubmit, errors, meta } = useForm({
        validationSchema,
        initialValues: {
            email: '',
            name: '',
            message: ''
        }
    });

    const { value: email } = useField<string>('email');
    const { value: name } = useField<string>('name');
    const { value: message } = useField<string>('message');

    const onSubmit = handleSubmit(async (values) => {
        status = 'pending';
        const { data } = await useFetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(values)
        });

        const { success } = data.value;

        if (success) {
            status = 'success';
            setTimeout(() => {
                status = 'idle';
            }, 3000);
        } else {
            status = 'error';
        }
    });

    const buttonMessage = $computed(() => {
        switch (status) {
            case 'pending':
                return 'Sending...';
            case 'success':
                return 'Message sent';
            case 'error':
                return 'Error sending message';
            default:
                return 'Send';
        }
    });
</script>

<template>
    <nuxt-layout>
        <div class="md:h-full flex justify-center items-center flex-col">
            <div
                class="flex lg:flex-row w-full flex-col-reverse lg:items-center lg:justify-center px-4 mt-8 md:mt-0 gap-y-14">
                <form
                    action=""
                    id="contact-form"
                    class="flex md:flex-1 flex-col gap-y-6xl">
                    <forms-text-input
                        type="text"
                        v-model="name"
                        label="Name"
                        placeholder="Your Name"
                        :is-dirty="meta.touched"
                        :errors="errors.name" />
                    <forms-text-input
                        v-model="email"
                        label="email"
                        type="text"
                        placeholder="Your Email"
                        :errors="errors.email"
                        :is-dirty="meta.touched" />
                    <forms-text-input
                        v-model="message"
                        label="description"
                        placeholder="Share your thought"
                        :errors="errors.message"
                        :is-dirty="meta.touched"
                        :is-textarea="true" />
                </form>
                <div
                    class="md:flex-1 text-left mx-a isolate relative text-base px-2">
                    <span
                        lg="inline text-9rem"
                        class="hidden absolute -top-16 z left-12 -z-10 leading-46 outline-champagne-1 opacity-50 dark:opacity-30 text-13rem"
                        >Get In Touch</span
                    >
                    <h1 class="font-medium text-6xl">Get In Touch</h1>
                    <p class="text-canvas mt-5 text-lg max-w-sm font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ut quam morbi etiam justo. Consequat, suspendisse
                        tellus et at blandit. Mi malesuada elementum sagittis,
                        posuere nam.
                    </p>
                </div>
            </div>
            <button
                type="submit"
                @click.prevent="onSubmit"
                class="md:mt-24 mt-16 mx-a mb-10 text-2xl flex items-center dark:hover:bg-blue/20 hover:bg-champagne/20 justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne"
                form="contact-form">
                {{ buttonMessage }}
                <icons-send-icon v-if="status === 'idle'" />
                <div
                    v-else
                    :class="{
                        'animate-spin': status === 'pending',
                        'i-carbon:checkmark': status === 'success',
                        'i-carbon:close': status === 'error'
                    }"
                    class="ml-1 w-10 h-10"></div>
            </button>
        </div>
    </nuxt-layout>
</template>
