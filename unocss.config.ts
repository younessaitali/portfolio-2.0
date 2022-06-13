import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts
} from 'unocss';

export default defineConfig({
  shortcuts: [
    {
      'underline-enter':
        'overflow-hidden relative after:(block content-[""] h-0.5 bg-champagne absolute bottom-0 w-full -translate-x-[130%]) hover:after:(duration-300 ease-in-out translate-x-0) ',

      'underline-out': 'after:(duration-300 ease-in-out translate-x-full)'
    }
  ],
  theme: {
    colors: {
      darkBlue: '#151D2B',
      blue: '#1C2C3F',
      blueGray: '#C8C9CA',
      blueGrayDark: '#989BA1',
      champagne: '#A6956E'
    }
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Poppins',
          weights: [300, 400, 500, 600, 700, 800, 900]
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
    'prose prose-sm m-auto text-left underline-enter underline-out after:translate-x-0'.split(
      ' '
    )
});
