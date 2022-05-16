<script lang="ts" setup>
  const socialMedia = reactive([
    {
      path: 'https://github.com/younessaitali',
      icon: 'i-carbon:logo-github',
      title: 'Github'
    },
    {
      path: 'https://twitter.com/younesaitali',
      icon: 'i-carbon:logo-twitter',
      title: 'Twitter'
    },
    {
      path: 'https://www.linkedin.com/in/youness-ait-ali/',
      icon: 'i-carbon:logo-linkedin',
      title: 'linkedIn'
    },
    {
      path: 'mailto:contact@younessatiali.com',
      icon: 'i-carbon:email',
      title: 'Contact me by Email'
    }
  ]);
</script>

<template>
  <div class="flex relative flex-col h-full items-center justify-center gap-10">
    <h2 font="bold" text="blue-gray 6xl">
      Hi Am <span text="champagne">Youness</span>
    </h2>

    <h3 font="bold" text="blue-gray-dark 3xl">
      Full stack-Developer / Vue enthusiasts
    </h3>

    <p font="medium" text="champagne xl center" max-w-5xl>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
      consequat enim. In sed elementum metus, malesuada gravida velit. cursus
      porta, enim ipsum convallis lorem.
    </p>
    <a
      href="https://drive.google.com/file/d/1QpSEPHbBcn1yuqzsVsxxzeiz9fpRgNiY/view?usp=sharing"
      target="_blank"
      class="cursor-pointer inline-block bg-transparent border border-champagne rounded-full py-3 px-10 text-lg font-medium text-champagne hover:bg-blue"
      >View resume</a
    >
    <ul class="flex gap-x-14">
      <li v-for="item in socialMedia" :key="item.title">
        <social-card v-bind="{ ...item }" />
      </li>
      <li>
        <a
          title="animation trigger"
          cursor="pointer"
          class="h-16 px-4 py-2 group hover:-translate-y-1 hover:scale-115 ease-in-out delay-100 duration-300 inline-flex justify-center items-center text-champagne text-8xl w-16 bg-dark-blue rounded-lg shadow-dark-900 drop-shadow-2xl shadow-lg">
          <div
            class="group-hover:scale-115 delay-100 duration-300"
            i-carbon:rotate-clockwise-alt />
        </a>
      </li>
    </ul>
  </div>
</template>
