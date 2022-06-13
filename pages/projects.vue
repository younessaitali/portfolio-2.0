<script setup lang="ts">
  definePageMeta({
    layout: 'projects'
  });

  const projects = $ref([
    {
      name: 'Marrakech Invest',
      description: `Informational website for entrepreneurs and businesses looking for
      information about potential investment opportunities in the Marrakech
      region. More than 100 pages are available on the website on a variety
      of investment opportunities and business guides. Visit the site to
      learn more.`,
      isActive: false,
      image: {
        src: '/projects/mi_logo.png',
        alt: 'Marrakech invest logo'
      },
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        },
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    },
    {
      name: 'Blog',
      description: '/blog',
      image: {
        src: '/projects/mi_logo.png',
        alt: 'Marrakech invest logo'
      },
      isActive: false,
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    },
    {
      name: 'About',
      description: '/about',
      image: {
        src: '/projects/mi_logo.png',
        alt: 'Marrakech invest logo'
      },
      isActive: false,
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    },
    {
      name: 'Contact',
      description: '/contact',
      image: {
        src: '/projects/mi_logo.png',
        alt: 'Marrakech invest logo'
      },
      isActive: false,
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    },
    {
      name: 'Resume',
      image: {
        src: '/projects/mi_logo.png',
        alt: 'Marrakech invest logo'
      },
      description: '/resume',
      isActive: false,
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    }
  ]);

  const activeProject = computed(() => {
    let project = projects.find((project) => project.isActive);
    if (!project) {
      projects[0].isActive = true;
      project = projects[0];
    }
    return project;
  });

  function projectSelected(name: string) {
    projects.forEach((item) => {
      item.isActive = item.name === name;
    });
  }
</script>

<template>
  <section class="flex gap-x-3 mx-10">
    <nav class="">
      <ul class="flex items-center justify-center flex-col gap-y-2">
        <li
          v-for="(project, index) in projects"
          :key="project.name"
          v-underline-animation="{ isActive: project.isActive }"
          @click="projectSelected(project.name)"
          font="bold"
          text=" 5xl center stroke-sm stroke-champagne transparent "
          class="py-5 px-16 inline-block relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85">
          <span
            :class="[
              'absolute left-0 group-hover:translate-y-0 duration-300',
              {
                'translate-y-0': project.isActive,
                'translate-y-[140%]': !project.isActive
              }
            ]"
            >{{ index + 1 }}</span
          >

          <h3>project</h3>
        </li>
      </ul>
    </nav>
    <project v-bind="{ ...activeProject }" />
    <!-- <div class="relative flex-1 max-w-2xl max-h-lg">
        <img
          src="/m.jpg"
          alt="Angled front view with bag zipped and handles upright."
          class="mx-auto py-6 w-full max-h-lg aspect-square object-center object-cover sm:rounded-lg" />

        <hr class="w-full h-30 bg-dark-100/60 absolute bottom-0 inset-x-0" /> -->
    <!-- More images... -->
    <!--
        <image-selector />
      </div> -->

    <!-- Image selector -->
  </section>
</template>
