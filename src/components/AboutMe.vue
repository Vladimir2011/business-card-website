<template>
  <section class="about" id="about">
    <div class="about__container">
      <div class="about__categories-wrapper">
        <div class="about__categories-header-wrapper">
          <img class="about__categories-icon" src="@/static/svg/about-arrow.svg" alt="icon">
          <p class="about__categories-header">
            personal-info
          </p>
        </div>
        <ul class="about__categories-list">
          <CategoryItem
            v-for="(category, index) in tabs"
            :key="category.id"
            @select-tab="selectTab(index)"
            :name="category.name"
            :icon="category.icon"
            :index="index"
            :selected-index="selectedIndex"
            :class-item="{'about__categories-item-active' : (index === selectedIndex)}"
            :class-icon="{'about__categories-item-icon-active' : (index === selectedIndex)}"
          />
        </ul>
      </div>

      <div class="about__text-wrapper adaptive">
        <div class="about__text-header"/>

        <TabItem v-show="selectedIndex === 0">
          <div class="about__main-text-container">
            <p class="about__main-text-header animate__animated animate__fadeInLeft">&lt;/About me&gt;</p>


            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-1s">
              Давайте знакомиться! Меня зовут Владимир. Во Frontend разработке более 2ух лет.
              Умею и люблю разрабатывать интерфейсы различного уровня сложности. Постоянно практикуюсь и прокачиваю свои навыки.
            </p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-2s">Заинтересован в создании проектов, которыми мог бы гордиться.
              Поэтому мне хочется делать качественный и удобный продукт, разработанный в первую очередь для людей.
              Кроме того, считаю, что продукт должен быть хорош не только снаружи, но и изнутри – ведь только тогда он будет по-настоящему отличным.
              Чтобы всего этого достичь, я стараюсь быть инициативным, внимательным к деталям, помогать в работе другим членам команды и поддерживать дружественные отношения.
            </p>
          </div>
        </TabItem>

        <TabItem v-show="selectedIndex === 1">
          <div class="about__main-text-container">
            <p class="about__main-text-header about__main-text-header-job animate__animated animate__fadeInLeft">&lt;/Work experience&gt;</p>

            <div class="animate__animated animate__fadeInDown animate__delay-1s">
              <p class="about__main-text-job">Frontend-разрабочик в ООО “Грей-Шоп”</p>
              <p class="about__main-text">Июнь 2021 - по настоящее время (1 год)</p>
            </div>

            <div class="animate__animated animate__fadeInDown animate__delay-2s">
              <p class="about__main-text-job">Веб-разработчик (фриланс, пет-проекты)</p>
              <p class="about__main-text">Апрель 2020 - Май 2021 (1 год 2 месяца)</p>
            </div>
          </div>
        </TabItem>

        <TabItem :skills-block="true" v-show="selectedIndex === 2">
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

        <TabItem v-show="selectedIndex === 3">
          <div class="about__main-text-container">
            <div class="animate__animated animate__fadeInLeft">
              <p class="about__main-text-header about__main-text-header-education">&lt;/Education&gt;</p>

              <p class="about__main-text-job">Московский государственный строительный университет (2018 год)</p>
              <p class="about__main-text">Экономика, Экономика и управление на предприятии (Бакалавр)</p>
            </div>

            <div class="animate__animated animate__fadeInLeft animate__delay-1s">
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
          </div>
        </TabItem>

        <TabItem v-show="selectedIndex === 4">
          <div class="about__main-text-container">
            <p class="about__main-text-header about__main-text-header-job animate__animated animate__fadeInLeft">&lt;/Interests></p>

            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-1s">Люблю спорт. В основном это плаванье, бег и тренажерный зал.</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-2s">Активно изучаю английский язык. Стараюсь практиковать свою разговорну</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-3s">Июнь 2021 - по настоящее время (1 год)</p>
          </div>
        </TabItem>
      </div>
    </div>
  </section>
</template>

<script>
import TabItem from '@/components/tabs/TabItem'
import CategoryItem from '@/components/categories/CategoryItem'
import { categories, skills } from '@/_config'
import { ref } from 'vue'

export default {
  components: {
    TabItem,
    CategoryItem
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
