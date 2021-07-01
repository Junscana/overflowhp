<template>
  <div class="btn-info">
    <NuxtLink to="/information/" class="btn-info__inner">
    <img class="btn-info__logo pc" src="@/assets/images/logo/logo-black.png" alt="OVERFLOWロゴ">
      イベント参加に関するご案内
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BtnInformation',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.btn-info {
  margin: 4rem 1.5rem 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 2rem 1rem;
    font-size: 2rem;
    border: 0.2rem solid #fa8cba;
    box-sizing: border-box;
    box-shadow: 0 0.2rem 0.4rem rgb(0 0 0 / 40%);

    &::after {
      content: "";
      display: block;
      height: 2rem;
      width: 1.1rem;
      margin-left: 1.4rem;
      background-image: url('~@/assets/images/icon/icon_arrow-right-pink.png');
      background-size: contain;
    }
  }
}

@media screen and (min-width: 769px) {
  .btn-info {
    margin: 8rem 1.5rem 0;

    &__inner {
      max-width: calc(100rem - 3rem);
      margin: auto;
      font-size: 3rem;
      border: 0.3rem solid #fa8cba;

      &::after {
        height: 3rem;
        width: 1.7rem;
        margin-left: 6rem;
      }
    }

    &__logo {
      height: 3.6rem;
      width: auto;
      margin-right: 2rem;
    }
  }
}
</style>
