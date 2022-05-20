<template>
  <li
    class="about__categories-item"
    @click.prevent="selectTab"
    :class="classItem"
  >
    <img
      class="about__categories-item-icon about__categories-item-icon--arrow"
      :class="classIcon"
      src="@/static/svg/category-arrow.svg"
      alt="icon"
    >
    <img class="about__categories-item-icon about__categories-item-icon--folder" :src="require('@/static/svg/' + icon)" alt="icon">
    {{ name }}
  </li>

  <!--Для мобилки-->
  <div class="about__text-wrapper desktop">

    <TabItem>
      <!--1ый таб-->
      <div v-if="selectedIndex === 0 && index === 0" class="about__main-text-container animate__animated animate__slideInDown">
        <p class="about__main-text-header">&lt;/About me&gt;</p>
        <p class="about__main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius excepturi natus necessitatibus omnis praesentium repellat suscipit. Assumenda deleniti hic iste itaque nesciunt non officiis quod ratione recusandae reiciendis! Ducimus earum excepturi, magni nisi quam quas. Atque dicta ipsam magnam minima molestias nemo nulla quibusdam suscipit temporibus ut. Impedit, odit!</p>
        <p class="about__main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum illum perferendis similique voluptatibus. Aliquid aut blanditiis deserunt sapiente totam.</p>
      </div>
      <!--2ой таб-->
      <div v-if="selectedIndex === 1 && index === 1" class="about__main-text-container animate__animated animate__slideInDown">
        <p class="about__main-text-header about__main-text-header-job">&lt;/Work experience&gt;</p>

        <p class="about__main-text-job">Frontend-разрабочик в ООО “Грей-Шоп”</p>
        <p class="about__main-text">Июнь 2021 - по настоящее время (1 год)</p>
        <p class="about__main-text-job">Веб-разработчик (фриланс, пет-проекты)</p>
        <p class="about__main-text">Апрель 2020 - Май 2021 (1 год 2 месяца)</p>
      </div>
      <!--4ый таб-->
      <div v-if="selectedIndex === 3 && index === 3" class="about__main-text-container animate__animated animate__slideInDown">
        <p class="about__main-text-header about__main-text-header-education">&lt;/Education&gt;</p>

        <p class="about__main-text-job">Московский государственный строительный университет (2018 год)</p>
        <p class="about__main-text">Экономика, Экономика и управление на предприятии (Бакалавр)</p>

        <p class="about__main-text-header about__main-text-header-education">&lt;/Courses&gt;</p>

        <p class="about__main-text-job">Курс Vue.js 3 + Nuxt.js 3 (2022 год)</p>
        <p class="about__main-text">Youtube</p>
        <p class="about__main-text-job">Курс Vue.js (2021 год)</p>
        <p class="about__main-text">Владилен Минин</p>
        <p class="about__main-text-job">Яндекс.Практикум (веб-разработчик) (2020 год)</p>
        <p class="about__main-text">Яндекс</p>
        <p class="about__main-text-job">Интенсив по верстке (2 уровня) (2019 год)</p>
        <p class="about__main-text">HTML Academy</p>
      </div>
      <!--5ый таб-->
      <div v-if="selectedIndex === 4 && index === 4" class="about__main-text-container animate__animated animate__slideInDown">
        <p class="about__main-text-header about__main-text-header-job">&lt;/Interests></p>

        <p class="about__main-text">Июнь 2021 - по настоящее время (1 год)</p>
      </div>
    </TabItem>

    <!--3ий таб-->
    <TabItem v-if="selectedIndex === 2 && index === 2" :skills-block="true">
      <ul class="about__skills-list about__text-container--skills">
        <li
            v-for="skill in skillsList"
            :key="skill.id"
            class="about__skills-item"
        >
          <div class="about__skills-name-block">
            <img class="about__skills-image" :src="require('@/static/svg/' + skill.icon)" alt="icon">
            <p class="about__skills-name">{{ skill.name }}</p>
          </div>
          <div class="about__progress">
            <div class="progress-value" :class="skill.class" />
          </div>
        </li>
      </ul>
    </TabItem>
  </div>
</template>

<script>
import TabItem from '@/components/tabs/TabItem'
import { skills } from '@/_config'

export default {
  components: { TabItem },
  emits: ['selectTab'],
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    classItem: {
      type: Object
    },
    classIcon: {
      type: Object
    },
    index: {
      type: Number
    },
    selectedIndex: {
      type: Number
    }
  },
  setup (_, { emit }) {
    let skillsList = skills

    const selectTab = () => {
      emit('selectTab')
    }

    return {
      selectTab,
      skillsList
    }
  }
}
</script>
