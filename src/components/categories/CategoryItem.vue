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
  <!--Для таба-->
  <slot />
</template>

<script>
export default {
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
    }
  },
  setup (_, { emit }) {
    const selectTab = () => {
      emit('selectTab')
    }

    return {
      selectTab
    }
  }
}
</script>
