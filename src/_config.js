export const app = {
  title: 'Title майтл'
}

export const links = [
  {
    title: '_обо мне',
    alias: 'about',
  },
  {
    title: '_проекты',
    alias: 'projects',
  },
  {
    title: '_контакты',
    alias: 'contacts',
  }
]

export const categories = [
  {
    name: 'Обо мне',
    icon: 'about-folder-icon.svg',
    id: 1
  },
  {
    name: 'Опыт',
    icon: 'exp-folder-icon.svg',
    id: 2
  },
  {
    name: 'Скиллы',
    icon: 'skills-folder-icon.svg',
    id: 3
  },
  {
    name: 'Образование',
    icon: 'education-folder-icon.svg',
    id: 4
  },
  {
    name: 'Интересы',
    icon: 'hobby-folder-icon.svg',
    id: 5
  }
]

export const skills = [
  {
    name: 'Vue.js',
    icon: 'vue-icon.svg',
    class: 'vue',
    id: 1
  },
  {
    name: 'Nuxt.js',
    icon: 'nuxt-icon.svg',
    class: 'nuxt',
    id: 2
  },
  {
    name: 'Vuex',
    icon: 'vuex-icon.svg',
    class: 'vuex',
    id: 3
  },
  {
    name: 'Vuetify',
    icon: 'vuetify-icon.svg',
    class: 'vuetify',
    id: 4
  },
  {
    name: 'JavaScript',
    icon: 'js-icon.svg',
    class: 'js',
    id: 5
  },
  {
    name: 'TypeScript',
    icon: 'ts-icon.svg',
    class: 'ts',
    id: 6
  },
  {
    name: 'SCSS/SASS',
    icon: 'scss-icon.svg',
    class: 'scss',
    id: 7
  },
  {
    name: 'CSS',
    icon: 'css-icon.svg',
    class: 'css',
    id: 8
  },
  {
    name: 'HTML',
    icon: 'html-icon.svg',
    class: 'html',
    id: 9
  },
  {
    name: 'Webpack',
    icon: 'webpack-icon.svg',
    class: 'webpack',
    id: 10
  },
]

export const projects = [
  {
    name: 'Gaijin Entertainment',
    type: '_e-commerce',
    description: 'Сайт магазина официального мерча Gaijin Entertainment.',
    image: 'gaijin-project-image.png',
    link: '',
    id: 1,
    technologies: [
      {
        id: 1,
        icon: 'vue.svg',
        class: 'vue'
      },
      {
        id: 2,
        icon: 'nuxt.svg',
        class: 'nuxt'
      }
    ],
    popupInfo: {
      name: 'Сайт магазина официального мерча Gaijin Entertainment \n' +
        'для игр Enlsited и Warthunder',
      link: 'https://gaijin.grey-shop.com',
      stack: 'Vue.js (v.2), Nuxt.js (v.2), Vuex, Typescript/Javascript, HTML5/CSS3, SCSS, Webpack.',
      functional: [
        {
          id: 1,
          name: 'Адаптивная и кросс-браузерная верстка'
        },
        {
          id: 2,
          name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript'
        },
        {
          id: 3,
          name: 'Исправление багов'
        },
        {
          id: 4,
          name: 'Поддержка и развитие текущей архитектуры на основе компонентов'
        },
        {
          id: 5,
          name: 'Доработка существующих проектов, повышение их удобства'
        },
        {
          id: 6,
          name: 'SEO оптимизация'
        }
      ],
      additional: ''
    }
  },
  {
    name: 'Escape From Tarkov',
    type: '_e-commerce',
    description: 'Официальный магазин игры Escape From Tarkov.',
    image: 'tarkov-project-image.png',
    link: '',
    id: 2,
    technologies: [
      {
        id: 1,
        icon: 'vue.svg',
        class: 'vue'
      },
      {
        id: 2,
        icon: 'nuxt.svg',
        class: 'nuxt'
      }
    ],
    popupInfo: {
      name: 'Официальный магазин игры Escape From Tarkov',
      link: 'https://gaijin.grey-shop.com',
      stack: 'Vue.js (v.2), Nuxt.js (v.2), Vuex, Typescript/Javascript, HTML5/CSS3, SCSS, Webpack.',
      functional: [
        {
          id: 1,
          name: 'Адаптивная и кросс-браузерная верстка'
        },
        {
          id: 2,
          name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript'
        },
        {
          id: 3,
          name: 'Исправление багов'
        },
        {
          id: 4,
          name: 'Поддержка и развитие текущей архитектуры на основе компонентов'
        },
        {
          id: 5,
          name: 'Доработка существующих проектов, повышение их удобства'
        },
        {
          id: 6,
          name: 'SEO оптимизация'
        }
      ],
      additional: ''
    }
  },
  {
    name: 'CleverBaby',
    type: '_landing-page',
    description: 'Школа английского языка для детей.',
    image: 'cleverBaby-project-image.png',
    link: 'https://github.com/Vladimir2011/CleverBaby',
    id: 3,
    technologies: [
      {
        id: 1,
        icon: 'js.svg',
        class: 'js'
      }
    ],
    popupInfo: {
      name: 'Сайт школы английского языка для детей CleverBaby',
      link: 'https://gaijin.grey-shop.com',
      stack: 'Vue.js (v.2), Nuxt.js (v.2), Vuex, Typescript/Javascript, HTML5/CSS3, SCSS, Webpack.',
      functional: [
        {
          id: 1,
          name: 'Адаптивная и кросс-браузерная верстка'
        },
        {
          id: 2,
          name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript'
        },
        {
          id: 3,
          name: 'Исправление багов'
        },
        {
          id: 4,
          name: 'Поддержка и развитие текущей архитектуры на основе компонентов'
        },
        {
          id: 5,
          name: 'Доработка существующих проектов, повышение их удобства'
        },
        {
          id: 6,
          name: 'SEO оптимизация'
        }
      ],
      additional: ''
    }
  },
  {
    name: 'Garbuzzov',
    type: '_landing-page',
    description: 'Сайт визитка прекрасного человека и разработчика.',
    image: 'garbuzov-project-image.png',
    link: 'https://github.com/Vladimir2011/business-card-website',
    id: 4,
    technologies: [
      {
        id: 1,
        icon: 'vue.svg',
        class: 'vue'
      },
    ],
    popupInfo: {
      name: 'Сайт визитка garbuzov',
      link: 'https://gaijin.grey-shop.com',
      stack: 'Vue.js (v.2), Nuxt.js (v.2), Vuex, Typescript/Javascript, HTML5/CSS3, SCSS, Webpack.',
      functional: [
        {
          id: 1,
          name: 'Адаптивная и кросс-браузерная верстка'
        },
        {
          id: 2,
          name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript'
        },
        {
          id: 3,
          name: 'Исправление багов'
        },
        {
          id: 4,
          name: 'Поддержка и развитие текущей архитектуры на основе компонентов'
        },
        {
          id: 5,
          name: 'Доработка существующих проектов, повышение их удобства'
        },
        {
          id: 6,
          name: 'SEO оптимизация'
        }
      ],
      additional: {
        name: 'Планы на будущее',
        info: 'Написать бекенд на Node.js + MongoDB. Произвести миграцию на Nuxt.js + Vuex. Переписать все на TypeScript. Создать админку на Vuetify для более удобного изменения и добавления контента на сайт.'
      }
    }
  },
]
