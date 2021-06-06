<template>
  <div class="btn-area-extarnal">
    <a :hfer="url" target="_blank" class="btn-area-extarnal__btn-default fontCapitalize">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'LayoutBtnExtarnal',
  props: {
    url: {
      type: String,
      required: true
    },
    text: {
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
.btn-area-extarnal {
  margin-top: 4rem;
  text-align: center;

  &__btn-default {
    display: block;
    height: 4rem;
    width: 20rem;
    margin: auto;
    padding: 1rem 2rem;
    border: 1px solid #333;
    box-sizing: border-box;
  }
}
</style>
