<script setup lang="ts">
  const section = ref<HTMLElement | null>(null);

  // const { isScrolling, directions, arrivedState } = useScroll(section);

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
          url: 'https://marrakechinvest.ma/'
        }
      ],
      technologies: ['Vue', 'Vuex', 'Vue Router']
    },
    {
      name: 'BPI',
      description: `An interactive web app allows entrepreneurs to generate a business plan step-by-step
and guide them through it. has already benefited thousands of small business owners.`,
      technologies: ['Vue', 'Vuex', 'Vue Router'],
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
      technologies: ['Vue', 'Vuex', 'Vue Router'],
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
      technologies: ['Vue', 'Vuex', 'Vue Router'],
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
      technologies: ['Vue', 'Vuex', 'Vue Router'],
      isActive: false,
      links: [
        {
          title: 'Visit website',
          url: 'https://marrakech-invest.com'
        }
      ]
    }
  ]);

  const activeProject = $computed(() => {
    const projectIndex = projects.findIndex((project) => project.isActive);
    if (projectIndex === -1) {
      projects[0].isActive = true;
      return { project: projects[0], index: 0 };
    }
    return { project: projects[projectIndex], index: projectIndex };
  });

  const { directions, isScrolling } = useWheel(section, {
    onScroll: () => {
      let { index } = activeProject;
      if (isScrolling && directions.bottom) {
        index = (index + 1) % projects.length;
      }
      if (isScrolling && directions.top) {
        index = (index - 1 + projects.length) % projects.length;
      }
      projectSelected(projects[index].name);
    }
  });

  function projectSelected(name: string) {
    projects.forEach((item) => {
      item.isActive = item.name === name;
    });
  }
</script>

<template>
  <section ref="section" class="flex justify-center sm:px-8 lg:px-12 gap-x-3">
    <nav class="">
      <ul class="flex flex-col gap-y-2">
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
    <project v-bind="{ ...activeProject.project }" />
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
