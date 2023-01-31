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
  link: string,
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
  petProjects: ProjectItem[]
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
    {
      name: 'Node-js',
      icon: 'node-js-icon.svg',
      class: 'node-js',
      id: 11
    },
    {
      name: 'English',
      icon: 'english-icon.svg',
      class: 'english',
      id: 12
    },
  ],
  commerceProjects: [
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
        },
        {
          id: 3,
          icon: 'ts.svg',
          class: 'ts'
        }
      ],
      popupInfo: {
        name: 'Сайт магазина официального мерча Gaijin Entertainment \n' +
          'для игр Enlsited и Warthunder',
        link: 'https://gaijin.grey-shop.com',
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
            name: 'Респонзивная верстка (по уникальному дизайну), логика различных компонентов.'
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
            name: 'Респонзивная верстка (по уникальному дизайну), логика различных компонентов.'
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
            name: 'Респонзивная верстка (по уникальному дизайну), логика различных компонентов.'
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
      description: 'ОРИОН СПЕЦ - интернет-магазин российского снаряжения и одежды для косплея',
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
            name: 'Респонзивная верстка (по уникальному дизайну), логика различных компонентов.'
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
    }
  ],
  petProjects: [
    {
      name: 'CleverBaby',
      type: '_landing-page',
      description: 'Школа английского языка для детей.',
      image: 'cleverBaby-project-image.png',
      link: 'https://github.com/Vladimir2011/CleverBaby/tree/develop',
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
        link: 'https://vladimir2011.github.io/CleverBaby/',
        stack: 'Javascript, HTML5/CSS3, Webpack.',
        details: 'Пет-проект, который был написан мной 1,5 года назад для прокачки скиллов в верстке и нативном JavaScript.',
        functional: [
          {
            id: 1,
            name: 'Адаптивная и кросс-браузерная верстка.'
          },
          {
            id: 2,
            name: 'Написание логики на чистом JavaScript.'
          }
        ],
        additional: ''
      }
    },
    {
      name: 'Garbuzovv',
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
        details: 'Сайт был разработан с 0 по уникальном дизайну с использованием Vue 3 и Composition API. Позже приложение было переписано на TypeScript с добавлением Vuex.',
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
        additional: {
          name: 'Планы на будущее',
          info: 'Добавить локализацию на сайт. Добавить страницу собственного блога ( с добавлением Vue-Router ). Написать бекенд на Node.js + MongoDB.Создать админку на Vuetify для более удобного изменения и добавления контента на сайт.'
        }
      }
    },
    {
      name: 'Online Bank',
      type: '_pet-project',
      description: 'Мини-версия банка с некоторыми возможностями.',
      image: 'bank-project-image.png',
      link: 'https://github.com/Vladimir2011/Vue-JS-PET-Projects/tree/master/Mini-bank-app',
      id: 5,
      technologies: [
        {
          id: 1,
          icon: 'vue.svg',
          class: 'vue'
        },
      ],
      popupInfo: {
        name: 'Приложение мини-банка',
        link: 'https://vue-mini-bank.web.app/auth',
        stack: 'HTML5, CSS3, Vue.js (Composition API, Vuex, Vue CLI, Vue-Router, компонентный подход), REST API (axios), Firebase.',
        details: 'Приложение было написано на учебном курсе у Владилена Минина. Приложение на Vue.js с авторизацией и возможностью создавать, редактировать, удалять заявки. Есть фильтрация по статусу заявок. Настроены роуты, есть возможность посмотреть данные о каждой заявке, поменять статус.\n' +
          'Для входа в приложение - почта: v@mail.ru. Пароль: 123456.',
        functional: [
          {
            id: 1,
            name: 'Адаптивная и кросс-браузерная верстка'
          },
          {
            id: 2,
            name: 'Разработка компонентов и написание логики на Vue.js'
          }
        ]
      }
    }
  ]
}
