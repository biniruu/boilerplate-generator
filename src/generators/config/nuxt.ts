import convertToString from '@utils/convertToString';

const generateNuxtConfig = () => {
  /**
   * Nuxt Config
   * {@link https://nuxt.com/docs/api/configuration/nuxt-config}
   *
   * Modules
   * {@link https://nuxt.com/modules}
   *
   * postcss : postcss 설정
   * devtools : nuxi로 Nuxt.js를 설치했을 때 기본 설정
   * modules : 확장 기능 추가
   * typescript : 타입스크립트 관련 설정
   */
  const config = {
    css: ['~/assets/css/main.css'],
    devtools: { enabled: true },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        /**
         * Default options by nuxi
         *
         * autoprefixer: {},
         * 'postcss-nested': {},
         * 'postcss-responsive-type': {},
         * 'postcss-hexrgba': {},
         * tailwindcss: {},
         */
        // Disable a plugin by passing false as value
        '@tailwindcss/nesting': {},
        'postcss-preset-env': {
          autoprefixer: {},
          features: {
            'nesting-rules': false,
          },
        },
        tailwindcss: {},
        cssnano: {
          preset: 'default',
        },
      },
    },
    typescript: {
      typeCheck: true, // invoke type checking during the build process if TypeScript and vue-tsc are installed. (TypeScript and vue-tsc are installed by default when setting up the dev env using nuxi.)
    },
  };

  const result = `export default defineNuxtConfig(${convertToString(config)})`;

  return result;
};

export default generateNuxtConfig;
