<!--Позже полностью переписать этот компонент-->
<template>
  <section class="about" id="about">
    <div class="about__container">
      <!--Десктоп-->
      <div class="about__categories-wrapper adaptive">
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
            :class-item="{'about__categories-item-active' : (index === selectedIndex)}"
            :class-icon="{'about__categories-item-icon-active' : (index === selectedIndex)}"
          />
        </ul>
      </div>
      <div class="about__text-wrapper adaptive">
        <div class="about__text-header"/>
        <TabItem v-if="selectedIndex !== 2">
          <div v-show="selectedIndex === 0" class="about__main-text-container">
            <p class="about__main-text-header animate__animated animate__fadeInLeft">&lt;/About me&gt;</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-1s">
              Давайте знакомиться! Меня зовут Владимир. Во Frontend разработке более 2-х лет.
              Умею и люблю разрабатывать интерфейсы различного уровня сложности. Постоянно практикуюсь и прокачиваю свои навыки.
            </p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-2s">Заинтересован в создании проектов, которыми мог бы гордиться.
              Поэтому мне хочется делать качественный и удобный продукт, разработанный в первую очередь для людей.
              Кроме того, считаю, что продукт должен быть хорош не только снаружи, но и изнутри – ведь только тогда он будет по-настоящему отличным.
              Чтобы всего этого достичь, я стараюсь быть инициативным, внимательным к деталям, помогать в работе другим членам команды и поддерживать дружественные отношения.
            </p>
          </div>

          <div v-show="selectedIndex === 1" class="about__main-text-container">
            <p class="about__main-text-header about__main-text-header-job animate__animated animate__fadeInLeft">&lt;/Work experience&gt;</p>

            <div class="animate__animated animate__fadeInDown animate__delay-1s">
              <p class="about__main-text-job">Frontend-разрабочик в ООО “Грей-Шоп”</p>
              <p class="about__main-text">Июнь 2021 - по настоящее время (более 1.5 лет)</p>
            </div>

            <div class="animate__animated animate__fadeInDown animate__delay-2s">
              <p class="about__main-text-job">Веб-разработчик (фриланс, пет-проекты)</p>
              <p class="about__main-text">Апрель 2020 - Май 2021 (1 год 2 месяца)</p>
            </div>
          </div>

          <div v-show="selectedIndex === 3" class="about__main-text-container">

            <p class="about__main-text-header about__main-text-header-education animate__animated animate__fadeInLeft">&lt;/Education&gt;</p>
            <div class="animate__animated animate__fadeInDown animate__delay-1s">
              <p class="about__main-text-job">Московский государственный строительный университет (2018 год)</p>
              <p class="about__main-text">Экономика, Экономика и управление на предприятии (Бакалавр)</p>
            </div>


            <p class="about__main-text-header about__main-text-header-education animate__animated animate__fadeInLeft animate__delay-2s">&lt;/Courses&gt;</p>
            <div class="animate__animated animate__fadeInDown animate__delay-3s">
              <p class="about__main-text-job">Треки по Frontend-разработке на Хекслет (2022 год)</p>
              <p class="about__main-text">Хекслет</p>
              <p class="about__main-text-job">Курс Vue.js (2021 год)</p>
              <p class="about__main-text">Владилен Минин</p>
              <p class="about__main-text-job">Яндекс.Практикум (веб-разработчик) (2020 год)</p>
              <p class="about__main-text">Яндекс</p>
              <p class="about__main-text-job">Интенсив по верстке (2 уровня) (2019 год)</p>
              <p class="about__main-text">HTML Academy</p>
            </div>
          </div>

          <div v-show="selectedIndex === 4" class="about__main-text-container">
            <p class="about__main-text-header about__main-text-header-job animate__animated animate__fadeInLeft">&lt;/Interests></p>

            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-1s">Люблю спорт. В основном это плаванье, бег и тренажерный зал.</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-2s">Активно изучаю английский язык. Стараюсь постоянно практиковать свою разговорную речь путем просмотра сериалов/прохождения игр на английском и занятий с репетитором.</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-3s">Увлекаюсь компьютерными играми и в общем сферой геймдева. Изначально хотел создавать игры, но жизненная дорожка привела меня в веб-разработку, о чем я не жалею.</p>
            <p class="about__main-text animate__animated animate__fadeInDown animate__delay-4s">Люблю программировать. В свободное время стараюсь изучать что-то новое. Сейчас к примеру изучаю Node.js и написание бекенда на нем.</p>
          </div>
        </TabItem>
        <TabItem :skills-block="true">
          <ul v-show="selectedIndex === 2" class="about__skills-list about__text-container--skills">
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
      <!--Конец десктопа-->

      <!--Планшет и мобилка-->
      <div class="about__categories-wrapper desktop">
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
              :class-item="{'about__categories-item-active' : (Object.values(isOpenTabs)[index])}"
              :class-icon="{'about__categories-item-icon-active' : (Object.values(isOpenTabs)[index])}"
          >
            <div class="about__text-wrapper desktop">
              <TabItem>
                <div v-if="isOpenTabs.firstTabOpen && index === 0" class="about__main-text-container animate__animated animate__slideInDown">
                  <p class="about__main-text-header">&lt;/About me&gt;</p>
                  <p class="about__main-text">
                    Давайте знакомиться! Меня зовут Владимир. Во Frontend разработке более 2-х лет.
                    Умею и люблю разрабатывать интерфейсы различного уровня сложности. Постоянно практикуюсь и прокачиваю свои навыки.
                  </p>
                  <p class="about__main-text">Заинтересован в создании проектов, которыми мог бы гордиться.
                    Поэтому мне хочется делать качественный и удобный продукт, разработанный в первую очередь для людей.
                    Кроме того, считаю, что продукт должен быть хорош не только снаружи, но и изнутри – ведь только тогда он будет по-настоящему отличным.
                    Чтобы всего этого достичь, я стараюсь быть инициативным, внимательным к деталям, помогать в работе другим членам команды и поддерживать дружественные отношения.
                  </p>
                </div>

                <div v-if="isOpenTabs.secondTabOpen && index === 1" class="about__main-text-container animate__animated animate__slideInDown">
                  <p class="about__main-text-header about__main-text-header-job">&lt;/Work experience&gt;</p>
                    <p class="about__main-text-job">Frontend-разрабочик в ООО “Грей-Шоп”</p>
                    <p class="about__main-text">Июнь 2021 - по настоящее время (более 1.5 лет)</p>

                    <p class="about__main-text-job">Веб-разработчик (фриланс, пет-проекты)</p>
                    <p class="about__main-text">Апрель 2020 - Май 2021 (1 год 2 месяца)</p>
                </div>

                <div v-if="isOpenTabs.fourthTabOpen && index === 3" class="about__main-text-container animate__animated animate__slideInDown">
                    <p class="about__main-text-header about__main-text-header-education">&lt;/Education&gt;</p>

                    <p class="about__main-text-job">Московский государственный строительный университет (2018 год)</p>
                    <p class="about__main-text">Экономика, Экономика и управление на предприятии (Бакалавр)</p>

                    <p class="about__main-text-header about__main-text-header-education">&lt;/Courses&gt;</p>

                    <p class="about__main-text-job">Треки по Frontend-разработке на Хекслет (2022 год)</p>
                    <p class="about__main-text">Хекслет</p>
                    <p class="about__main-text-job">Курс Vue.js (2021 год)</p>
                    <p class="about__main-text">Владилен Минин</p>
                    <p class="about__main-text-job">Яндекс.Практикум (веб-разработчик) (2020 год)</p>
                    <p class="about__main-text">Яндекс</p>
                    <p class="about__main-text-job">Интенсив по верстке (2 уровня) (2019 год)</p>
                    <p class="about__main-text">HTML Academy</p>
                </div>

                <div v-if="isOpenTabs.fifthTabOpen && index === 4" class="about__main-text-container animate__animated animate__slideInDown">
                  <p class="about__main-text-header about__main-text-header-job">&lt;/Interests></p>

                  <p class="about__main-text">Люблю спорт. В основном это плаванье, бег и тренажерный зал.</p>
                  <p class="about__main-text">Активно изучаю английский язык. Стараюсь постоянно практиковать свою разговорную речь путем просмотра сериалов/прохождения игр на английском и занятий с репетитором.</p>
                  <p class="about__main-text">Увлекаюсь компьютерными играми и в общем сферой геймдева. Изначально хотел создавать игры, но жизненная дорожка привела меня в веб-разработку, о чем я не жалею.</p>
                  <p class="about__main-text">Люблю программировать. В свободное время стараюсь изучать что-то новое. Сейчас к примеру изучаю Node.js и написание бекенда на нем.</p>
                </div>
              </TabItem>

              <TabItem :skills-block="true" v-if="isOpenTabs.thirdTabOpen && index === 2">
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
          </CategoryItem>
        </ul>
      </div>
      <!--Конец планшета и мобилки-->
    </div>
  </section>
</template>

<script lang="ts">
import TabItem from '@/components/tabs/TabItem.vue'
import CategoryItem from '@/components/categories/CategoryItem.vue'
import { ref, computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    TabItem,
    CategoryItem
  },
  setup () {
    const store = useStore()
    let tabs = computed(() => store.getters['getCategories'])
    let skillsList = computed(() => store.getters['getSkills'])
    let selectedIndex = ref(0)

    let isOpenTabs = ref({
      firstTabOpen: false,
      secondTabOpen: false,
      thirdTabOpen: false,
      fourthTabOpen: false,
      fifthTabOpen: false
    })

    const selectTab = (i:number) => {
      selectedIndex.value = i

      switch (i) {
        case 0: isOpenTabs.value.firstTabOpen = !isOpenTabs.value.firstTabOpen
          break;
        case 1: isOpenTabs.value.secondTabOpen = !isOpenTabs.value.secondTabOpen
          break;
        case 2: isOpenTabs.value.thirdTabOpen = !isOpenTabs.value.thirdTabOpen
          break;
        case 3: isOpenTabs.value.fourthTabOpen = !isOpenTabs.value.fourthTabOpen
          break;
        case 4: isOpenTabs.value.fifthTabOpen = !isOpenTabs.value.fifthTabOpen
          break;
      }

      return selectedIndex.value
    }

    return {
      tabs,
      selectedIndex,
      selectTab,
      skillsList,
      isOpenTabs
    }
  }
})
</script>
