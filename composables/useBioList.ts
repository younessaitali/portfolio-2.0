export const useBioList = () => {
  const bioList = [
    {
      label: 'introduction',
      key: 'intro',
      path: '/',
      title: 'Full Stack Developer'
    },
    {
      label: 'build',
      key: 'build',
      path: '/build',
      title: 'Like Building things'
    },
    {
      label: 'fun',
      key: 'fun',
      path: '/fun',
      title: 'love having fun'
    },
    {
      label: 'balance',
      key: 'balance',
      path: '/balance',
      title: 'balance between work and play'
    },
    {
      label: 'support',
      key: 'support',
      path: '/support',
      title: 'supporting my family'
    }
  ];

  const route = useRoute();

  const activeTitle = computed(() => {
    return bioList.find(
      (bio) => bio.path.toLowerCase() === route.path.toLowerCase()
    )?.title;
  });

  return { bioList, activeTitle };
};
