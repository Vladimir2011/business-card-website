<template>
  <li
      class="about__categories-item"
      @click="selectTab"
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
</template>

<script>
export default {
  emits: ['selectTab'],
  props: {
    name: {
      type: String,
      required: true
    },
    index: {
      type: Number
    },
    selectedIndex: {
      type: Number
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
