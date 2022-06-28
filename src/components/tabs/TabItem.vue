<template>
  <div class="about__text-container">
    <ul class="about__numbers-list adaptive" v-if="!skillsBlock">
      <li
        v-for="i in 24"
        :key="i"
        class="about__numbers-item"
      >
        {{ i }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
 export default {
   props: {
     skillsBlock: {
       type: Boolean,
       default: false
     },
   }
 }
</script>
