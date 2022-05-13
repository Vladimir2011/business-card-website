<template>
  <button class="btn" @click="handleDownloadCV">{{ name }}</button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    setup () {
      const handleDownloadCV = () => {
        console.log('Скачал резюме')
      }

      return {
        handleDownloadCV
      }
    }
  }
</script>