<template>
  <div class="page-title">
    <h1 class="fontUppercase">{{ title }}</h1>
    <span class="title-ul"></span>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.page-title {
  padding: 2rem 1.5rem 1rem;
  font-size: 2.4rem;
  text-align: center;
  position: relative;
}

@media screen and (min-width: 768px) {
  .page-title {
    padding-top: 2rem;
  }
}
</style>
