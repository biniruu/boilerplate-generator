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
        // Disable a plugin by passing false as value
        autoprefixer: {},
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        tailwindcss: {},
      },
    },
    typescript: {
      typeCheck: true, // typescript와 vue-tsc를 설치하면 dev server 빌드 과정에서 타입 체크 실행
    },
  };

  const result = `export default defineNuxtConfig(${convertToString(config)})`;

  return result;
};

export default generateNuxtConfig;
