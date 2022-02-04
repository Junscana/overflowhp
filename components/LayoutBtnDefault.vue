<template>
  <div class="btn-area">
    <NuxtLink :to="url" :target="target" class="btn-area__btn-default fontCapitalize">{{ text }}</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'LayoutBtnDefault',
  props: {
    url: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.btn-area {
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
    background-color: #fff;
  }
}
</style>
