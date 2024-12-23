export type App = {
  title: string
}

export type LinkItem = {
  title: string,
  alias: string
}

export type CategoryItem = {
  name: string,
  icon: string,
  id: number
}

export type SkillItem = {
  name: string,
  icon: string,
  class: string,
  id: number
}

export type TechnologyItem = {
  id: number,
  icon: string,
  class: string
}

export type PopupFunctionalItem = {
  id: number,
  name: string
}

export type PopupInfoItem = {
  name: string,
  link?: string,
  details: string,
  stack: string,
  functional: PopupFunctionalItem[],
  additional?: any
}

export type ProjectItem = {
  name: string,
  type: string,
  description: string,
  image: string,
  link: string,
  id: number,
  technologies: TechnologyItem[],
  popupInfo: PopupInfoItem
}

export type State = {
  app: App,
  links: LinkItem[],
  categories: CategoryItem[],
  skills: SkillItem[],
  commerceProjects: ProjectItem[],
  petProjects: ProjectItem[],
  personalProjects: ProjectItem[]
}

export const state: State = {
  app: {
    title: 'Front-End Website Developer | Vladimir Garbuzov'
  },
  links: [
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
  ],
  categories: [
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
    ],
  skills: [
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
      name: 'Pinia',
      icon: 'pinia-icon.svg',
      class: 'pinia',
      id: 4
    },
    {
      name: 'Vuetify',
      icon: 'vuetify-icon.svg',
      class: 'vuetify',
      id: 5
    },
    {
      name: 'JavaScript',
      icon: 'js-icon.svg',
      class: 'js',
      id: 6
    },
    {
      name: 'TypeScript',
      icon: 'ts-icon.svg',
      class: 'ts',
      id: 7
    },
    {
      name: 'SCSS/SASS',
      icon: 'scss-icon.svg',
      class: 'scss',
      id: 8
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwindcss-icon.svg',
      class: 'tailwindcss',
      id: 9
    },
    {
      name: 'CSS',
      icon: 'css-icon.svg',
      class: 'css',
      id: 10
    },
    {
      name: 'HTML',
      icon: 'html-icon.svg',
      class: 'html',
      id: 11
    },
    {
      name: 'Webpack',
      icon: 'webpack-icon.svg',
      class: 'webpack',
      id: 12
    },
    {
      name: 'Node-js',
      icon: 'node-js-icon.svg',
      class: 'node-js',
      id: 13
    },
    {
      name: 'English',
      icon: 'english-icon.svg',
      class: 'english',
      id: 14
    },
  ],
  commerceProjects: [
    {
      name: 'Академия снаряжения',
      type: '_e-commerce',
      description: 'Мультибрендовый магазин, специализирующийся на тактическом снаряжении.',
      image: 'academy-project-image.png',
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Мультибрендовый магазин, специализирующийся на тактическом снаряжении, одежде, обвесе, оптике и электронике высокого качества.',
        link: 'https://academygear.ru/',
        details: '',
        stack: 'Vue.js v.2 (Vuex, Vue-Router, компонентный подход), Nuxt.js (v.2), Typescript/Javascript, Axios, HTML5/CSS3, SCSS, Webpack.',
        functional: [
          {
            id: 1,
            name: 'Участие в разработке фронтовой части с нуля.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Официальный магазин игры Escape From Tarkov',
        link: 'https://tarkovmerchstore.com/',
        details: '',
        stack: 'Vue.js v.2 (Vuex, Vue-Router, компонентный подход), Nuxt.js (v.2), Vuex, Typescript/Javascript, Axios, HTML5/CSS3, SCSS, Webpack.',
        functional: [
          {
            id: 1,
            name: 'Полностью переписал сайт на современном стеке Nuxt.js + Vue.js. До этого использовался Angular.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Grey Shop',
      type: '_e-commerce',
      description: 'Grey-Shop - Интернет-магазин российского оборудования и одежды для косплея.',
      image: 'grey-shop-image.png',
      link: '',
      id: 3,
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Grey-Shop - Интернет-магазин российского оборудования и одежды для косплея.',
        link: 'https://grey-shop.ru/',
        details: '',
        stack: 'Vue.js v.2 (Vuex, Vue-Router, компонентный подход), Nuxt.js (v.2), Vuex, Typescript/Javascript, Axios, HTML5/CSS3, SCSS, Webpack.',
        functional: [
          {
            id: 1,
            name: 'Полностью переписал сайт на современном стеке Nuxt.js + Vue.js.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Orion Spec',
      type: '_e-commerce',
      description: 'ОРИОН СПЕЦ - интернет-магазин российского снаряжения и одежды для косплея.',
      image: 'orion-spec-image.png',
      link: '',
      id: 4,
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'ОРИОН СПЕЦ - интернет-магазин российского снаряжения и одежды для косплея',
        link: 'https://orion-spec.ru/',
        details: 'Практически точная копия сайта Grey Shop (с некоторыми своими особенностями, к примеру наличие Saferoute). Направлен для работы с российскими потребителями.',
        stack: 'Vue.js v.2 (Vuex, Vue-Router, компонентный подход), Nuxt.js (v.2), Vuex, Typescript/Javascript, Axios, HTML5/CSS3, SCSS, Webpack.',
        functional: [
          {
            id: 1,
            name: 'Полностью переписал сайт на современном стеке Nuxt.js + Vue.js.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Mordor Tac.',
      type: '_e-commerce',
      description: 'Mordor Tac. - производитель милитари одежды и экипировки.',
      image: 'mordor-tac-image.png',
      link: '',
      id: 5,
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Mordor Tac. - производитель милитари одежды и экипировки для спецподразделений и активного отдыха!',
        link: 'https://mordor-tac.com',
        details: '',
        stack: 'Vue.js v.2 (Vuex, Vue-Router, компонентный подход), Nuxt.js (v.2), Vuex, Typescript/Javascript, Axios, HTML5/CSS3, SCSS, Webpack.',
        functional: [
          {
            id: 1,
            name: 'Полностью переписал сайт на современном стеке Nuxt.js + Vue.js.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Стяг',
      type: '_e-commerce',
      description: 'Интернет-магазин "Стяг".',
      image: 'styag-project-image.png',
      link: '',
      id: 6,
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Стяг - производство снаряжения и средств индивидуальной бронезащиты в Москве.',
        link: 'https://styagbronya.ru/',
        details: '',
        stack: 'Vue.js v.3 (Pinia, Vue-Router, компонентный подход, Composition API), Nuxt.js (v.3), Pinia, Typescript/Javascript, HTML5/CSS3, SCSS, Vite.',
        functional: [
          {
            id: 1,
            name: 'Сайт спроектирован и создан с 0.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + TypeScript + Pinia.'
          },
          {
            id: 3,
            name: 'Респонсивная верстка (по уникальному дизайну), логика различных компонентов.'
          },
          {
            id: 4,
            name: 'Исправление багов.'
          },
          {
            id: 5,
            name: 'Поддержка и развитие текущей архитектуры на основе компонентов.'
          },
          {
            id: 6,
            name: 'SEO оптимизация.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Mate Line',
      type: '_landing-page',
      description: 'Mate Line - многофункциональная платформа для e-commerce',
      image: 'mateline-project-image.png',
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
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Mate Line - многофункциональная платформа для e-commerce',
        link: 'https://mateline.ru/',
        stack: 'Vue.js v.3 (Pinia, Vue-Router, компонентный подход, Composition API), Nuxt.js (v.3), Pinia, Typescript/Javascript, HTML5/CSS3, SCSS, Vite.',
        details: 'Сайт был разработан с 0 по уникальном дизайну с использованием Vue 3/Nuxt 3 и Composition API.',
        functional: [
          {
            id: 1,
            name: 'Адаптивная и кросс-браузерная верстка c использованием препроцессоров'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + TypeScript'
          },
          {
            id: 3,
            name: 'Интеграция и "оживление" формы для отправления заявок в ЛК системы amoCRM'
          }
        ],
      }
    },
  ],
  petProjects: [
    {
      name: 'Vue Pizza',
      type: '_landing-page',
      description: 'Личный проект на курсе по Vue.js 3 от HTML Academy.',
      image: 'vue-pizza-project-image.png',
      link: 'https://github.com/Vladimir2011/vue-third-pizza-start-source',
      id: 1,
      technologies: [
        {
          id: 1,
          icon: 'vue.svg',
          class: 'vue'
        },
      ],
      popupInfo: {
        name: 'Виртуальная пиццерия «VuePizza»',
        stack: 'Vue.js 3 (Composition API, Vue CLI, компонентный подход, Pinia), HTML5/CSS3',
        details: 'Учебный проект, который разрабатывался во время обучения на курсе. Это виртуальная пиццерия, в которой посетители могут сами составлять пиццу из ингредиентов, формировать и отправлять заказ.',
        functional: [
          {
            id: 1,
            name: 'Разработка компонентов и написание логики на Vue.js + Pinia'
          },
          {
            id: 2,
            name: 'Написание логики для авторизации и взаимодествия с сервером'
          }
        ]
      }
    },
  ],
  personalProjects: [
    {
      name: 'Garbuzovv',
      type: '_landing-page',
      description: 'Сайт визитка прекрасного человека и разработчика.',
      image: 'garbuzov-project-image.png',
      link: 'https://github.com/Vladimir2011/business-card-website',
      id: 1,
      technologies: [
        {
          id: 1,
          icon: 'vue.svg',
          class: 'vue'
        },
        {
          id: 2,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Сайт визитка garbuzovv',
        link: 'https://garbuzovv.ru/',
        stack: 'Vue.js (Composition API, Vue CLI, компонентный подход, Vuex), TypeScript, HTML5/CSS3, SCSS, Webpack.',
        details: 'Сайт был разработан с 0 по уникальном дизайну с использованием Vue 3 и Composition API. Позже приложение было переписано с использованием TypeScript и добавлением Vuex.',
        functional: [
          {
            id: 1,
            name: 'Адаптивная и кросс-браузерная верстка c использованием препроцессоров'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + TypeScript + Vuex'
          }
        ],
      }
    },
    {
      name: 'ZZZwiki',
      type: '_website',
      description: 'Сайт-вики по игре Zenless Zone Zero.',
      image: 'zzz-project-image.png',
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
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Полная база данных по игре Zenless Zone Zero. (САЙТ ЕЩЕ НАХОДИТСЯ В РАЗРАБОТКЕ)',
        link: 'https://zenless-zone-zero-wiki.vercel.app/',
        stack: 'Vue.js 3 + Nuxt.js 3, Pinia, HTML5/CSS3, SCSS, Vite.',
        details: 'Это википедию по игре Zenless Zone Zero! Здесь собраны все важные аспекты, связанные с игрой. Моя цель — создать пространство, где поклонники могут легко находить информацию, делиться своими знаниями и обсуждать любимые моменты игры.\n',
        functional: [
          {
            id: 1,
            name: 'Адаптивная и кросс-браузерная верстка c использованием препроцессоров.'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js + Nuxt.js + Pinia.'
          },
          {
            id: 3,
            name: 'Разработка дизайна.'
          }
        ],
        additional: {
          name: 'Планы на будущее',
          info: 'Закончить сайт. Реализовать бекенд.'
        }
      }
    }
  ]
}
