<script setup lang="ts">
    const wheel = ref<HTMLDivElement | null>(null);

    const projects = $ref([
        {
            name: 'Vue Vite Boilerplate',
            description: `opinionated Vue/Vite starter template allows you to make apps quickly. It supports file-based routing, Layout System, components auto-importing, State management via Pina, I18n, SSG, and PWAs, Format, and Lint, Unit Testing with Vitest, E2E Testing with Cypress, and Standards checking with pre-commit hooks. Test validation on pre-push with Husky, UnoCSS for UI, and TypeScript of course`,
            isActive: false,
            image: {
                src: '/projects/vue-vite.png',
                alt: 'Vue and Vite logo'
            },
            links: [
                {
                    title: 'Try it out 🚀',
                    url: 'https://github.com/younessaitali/vue_3-vite-typescript-boilerplate'
                }
            ],
            technologies: [
                'vue 3',
                'vite',
                'vue-i18n',
                'husky',
                'pre-commit',
                'UnoCSS',
                'Typescript'
            ]
        },
        {
            name: 'Auto Filler',
            description: `desktop application that assists users with repetitive tasks and auto-fills forms from a
  spreadsheet. As a result, my client spent less time doing the repetitive tasks.`,
            isActive: false,
            image: {
                src: '/projects/auto-k.svg',
                alt: 'Auto A Logo'
            },
            links: [],
            technologies: [
                'vue 3',
                'vite',
                'vue-i18n',
                'UnoCSS',
                'Node',
                'TypeORM',
                'SQLite',
                'EsBuild',
                'Electron',
                'Ajv',
                'Typescript'
            ]
        },
        {
            name: 'Marrakech Invest',
            description: `Informational website for entrepreneurs and businesses looking for
            information about potential investment opportunities in the Marrakech
            region. More than 100 pages are available on the website on a variety
            of investment opportunities and business guides. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
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
            technologies: [
                'Nuxt',
                'Vue',
                'Drupal',
                'GraphQL',
                'Gsap',
                'TailwindCSS'
            ]
        },
        {
            name: 'Business Plan Interactive',
            description: `An interactive web app allows entrepreneurs to generate a business plan step-by-step
      and guide them through it. has already benefited thousands of small business owners. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
            technologies: ['Vue', 'TailwindCSS', 'Firebase', 'Vuex'],
            image: {
                src: '/projects/bpi.png',
                alt: 'BPI LOGO'
            },
            isActive: false,
            links: [
                {
                    title: 'Visit website',
                    url: 'https://cri-bpi.web.app/'
                }
            ]
        },
        {
            name: 'Intaj',
            technologies: [
                'React',
                'Redux',
                'Laravel',
                'styled-Components',
                'Mysql',
                'Rest API'
            ],
            description:
                'A platform for business-to-business transactions. I worked on this piece at the Digital-butterfly agency. I handled the back end of this project.',
            image: {
                src: '/projects/intaj.svg',
                alt: 'Intaj logo'
            },
            isActive: false,
            links: [
                {
                    title: 'Visit website',
                    url: 'https://intajoriental.com/'
                }
            ]
        },
        {
            name: 'Tasks',
            technologies: [
                'Vue',
                'Vuex',
                'Vue Router',
                'TailwindCSS',
                'Laravel',
                'JWT',
                'Pusher'
            ],
            description: `This project management app provides a visual representation of what is being worked on by splitting projects into boards that contain tasks with a description and multiple to-do lists, and the user has the ability to add other members to a project ... I used Laravel as a backend to serve my Rest-API, VueJS as a frontend, Vuex as state management, and Pusher for Real-time communication, as well as JWT for authorization.
      this was a side project Inspired by Jira from Atlassian`,
            image: {
                src: '/projects/tasks.svg',
                alt: 'Tasks logo'
            },
            isActive: false,
            links: [
                {
                    title: '<code />',
                    url: 'https://github.com/younessaitali/Jira-Clone'
                },
                {
                    title: 'Video Demo',
                    url: 'https://www.youtube.com/watch?v=liIVa-zMERE'
                }
            ]
        },
        {
            name: 'MediaTheque',
            image: {
                src: '/projects/media.svg',
                alt: 'Marrakech invest logo'
            },
            description: `As part of my graduation project, I developed a library app. There are two parts to the app: a client-side dashboard and an admin dashboard.
      The client has the option to rent or buy books. In addition, you can subscribe to the membership for a monthly fee. Owners and Admins can also manage the inventory, client information, and employee roles `,
            technologies: ['laravel', 'MySql', 'Stripe API', 'Axios', 'Sass'],
            isActive: false,
            links: [
                {
                    title: '<code />',
                    url: 'https://github.com/younessaitali/mediatheeque'
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

    const prevProject = () => {
        let { index } = activeProject;
        index = (index - 1 + projects.length) % projects.length;
        projectSelected(projects[index].name);
    };

    const nextProject = () => {
        let { index } = activeProject;
        index = (index + 1) % projects.length;
        projectSelected(projects[index].name);
    };

    useNavigation({ element: wheel, next: nextProject, prev: prevProject });

    function projectSelected(name: string) {
        projects.forEach((item) => {
            item.isActive = item.name === name;
        });
    }
</script>

<template>
    <!-- this element just to let us detect wheel event on all page  -->
    <nuxt-layout>
        <template #root>
            <div
                lg="-right-(8rem)  inset-y-0 my-auto w-72 h-8 rotate-270"
                md="bottom-20 ml-28 w-[calc(100%-7rem)] "
                class="fixed bottom-0 w-screen text-white text-2xl rotate-0 px-0.5 py-1.5 dark:bg-champagne/50 bg-darkBlue/50 z-36 flex items-center justify-between">
                <button type="button" @click="nextProject">
                    <span class="inline-block i-carbon:chevron-down"></span>
                    <span class="sr-only">next project</span>
                </button>
                <span text="lg md:xl ">
                    {{ activeProject.project.name }}
                </span>
                <button type="button" @click="prevProject">
                    <span class="inline-block i-carbon:chevron-up"></span>
                    <span class="sr-only">previous project</span>
                </button>
            </div>
        </template>
        <div ref="wheel" class="absolute z-12 inset-0"></div>
        <section
            md="px-0 "
            class="flex flex-1 h-full lg:items-center items-start justify-center px-2 gap-x-3">
            <nav
                aria-labelledby="project-navigation"
                id="project-navigation"
                class="hidden lg:block">
                <ul class="flex flex-col gap-y-2">
                    <li
                        v-for="(project, index) in projects"
                        :key="project.name"
                        v-underline-animation="{ isActive: project.isActive }"
                        @click="projectSelected(project.name)"
                        font="bold"
                        text="4xl center "
                        :class="[
                            'py-5 px-9 z-20 inline-block  relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85',
                            {
                                'outline-champagne-0.8': !project.isActive,
                                '!text-champagne': project.isActive
                            }
                        ]">
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

                        project
                    </li>
                </ul>
            </nav>
            <project v-bind="{ ...activeProject.project }" />
        </section>
    </nuxt-layout>
</template>
