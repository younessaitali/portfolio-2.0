import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
    presetWebFonts,
    toEscapedSelector as e
} from 'unocss';

export default defineConfig({
    shortcuts: [
        {
            'underline-enter':
                'overflow-hidden relative after:(block content-[""] h-0.5 bg-champagne absolute bottom-0 w-full -translate-x-[130%]) hover:after:(duration-300 ease-in-out translate-x-0) ',

            'underline-out':
                'after:(duration-300 ease-in-out translate-x-full)',
            'bg-base': 'bg-white dark:bg-darkBlue',
            'bg-canvas': 'bg-gray:15 dark:bg-[#111]',
            'text-base': 'text-darkBlue dark:text-champagne',
            'text-canvas': 'text-darkBlue dark:text-blueGray'
        }
    ],
    theme: {
        colors: {
            darkBlue: '#151d2b',
            blue: '#015270',
            blueGray: '#C8C9CA',

            champagne: '#A6956E',
            darkChampagne: '#87805E'
        }
    },
    rules: [
        [
            /^outline-(.*)-(.*)$/,
            ([, color, size], { rawSelector, theme }) => {
                const selector = e(rawSelector);

                if (theme.colors[color])
                    return `
${selector} {
  text-shadow: ${size}px ${size}px 0 ${theme.colors[color]},
     	-${size}px -${size}px 0 ${theme.colors[color]},
      ${size}px -${size}px 0 ${theme.colors[color]},
      -${size}px ${size}px 0 ${theme.colors[color]},
       ${size}px ${size}px 0 ${theme.colors[color]};
}


.dark ${selector} {
  color: ${theme.colors['darkBlue']};
}

${selector} {
  color: ${theme.colors['white']};
}
`;
            }
        ]
    ],

    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                sans: {
                    name: 'Poppins',
                    weights: [300, 400, 500, 600, 700]
                }
            }
        }),
        presetAttributify({}),
        presetIcons({
            scale: 1.2,
            warn: true
        }),
        presetTypography()
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist:
        'prose prose-sm m-auto text-left underline-enter underline-out after:translate-x-0 overflow-y-hidden  overflow-x-hidden overflow-hidden'.split(
            ' '
        )
});
