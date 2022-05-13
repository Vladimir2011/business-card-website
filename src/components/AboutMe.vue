<template>
  <section class="about">
    <div class="about__container">
      <div class="about__categories-wrapper">
        <div class="about__categories-header-wrapper">
          <img class="about__categories-icon" src="@/static/svg/about-arrow.svg" alt="icon">
          <p class="about__categories-header">
            personal-info
          </p>
        </div>
        <ul class="about__categories-list">
          <li
              v-for="(category, index) in tabs"
              :key="category.id"
              class="about__categories-item"
              @click="selectTab(index)"
              :class="{'about__categories-item-active' : (index === selectedIndex)}"
          >
            <img class="about__categories-item-icon about__categories-item-icon--arrow" src="@/static/svg/category-arrow.svg" alt="icon">
            <img class="about__categories-item-icon" :src="require('@/static/svg/' + category.icon)" alt="icon">
            {{ category.name }}
          </li>
        </ul>
      </div>

      <div class="about__text-wrapper">
        <div class="about__text-header"/>

        <TabItem v-show="selectedIndex === 0">
          <div class="about__main-text-container">
            <p class="about__main-text-header">&lt;/About me&gt;</p>
            <p class="about__main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius excepturi natus necessitatibus omnis praesentium repellat suscipit. Assumenda deleniti hic iste itaque nesciunt non officiis quod ratione recusandae reiciendis! Ducimus earum excepturi, magni nisi quam quas. Atque dicta ipsam magnam minima molestias nemo nulla quibusdam suscipit temporibus ut. Impedit, odit!</p>
            <p class="about__main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam debitis, dolore et officia reprehenderit saepe. Ad amet asperiores assumenda eaque error libero nihil officiis, quia quisquam similique tempore tenetur.</p>
            <p class="about__main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum illum perferendis similique voluptatibus. Aliquid aut blanditiis deserunt sapiente totam.</p>
          </div>
        </TabItem>

        <TabItem v-show="selectedIndex === 1">
          <div class="about__main-text-container">
            <p class="about__main-text-header about__main-text-header--job">&lt;/Work experience&gt;</p>

            <p class="about__main-text--job">Frontend-разрабочик в ООО “Грей-Шоп”</p>
            <p class="about__main-text">Июнь 2021 - по настоящее время (1 год)</p>
            <p class="about__main-text--job">Веб-разработчик (фриланс, пет-проекты)</p>
            <p class="about__main-text">Апрель 2020 - Май 2021 (1 год 2 месяца)</p>
          </div>
        </TabItem>

        <!--3ий таб-->
        <div v-show="selectedIndex === 2" class="about__text-container about__text-container--skills">
          <ul class="about__skills-list">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabItem from '@/components/tabs/TabItem'
import { categories, skills } from '@/_config'
import { ref } from 'vue'

export default {
  components: {
    TabItem
  },
  setup () {
    let tabs = categories
    let skillsList = skills
    let selectedIndex = ref(0)

    const selectTab = (i) => {
      selectedIndex.value = i

      return selectedIndex.value
    }

    return {
      tabs,
      selectedIndex,
      selectTab,
      skillsList
    }
  }
}
</script>
