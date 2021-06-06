<template>
  <div class="follow-btn-area">
    <a :href="url" class="follow-btn-area__follow-btn" :class="media">
      <div class="follow-btn-area__follow-btn__inner">
        <span class="fontCapitalize">follow</span>&nbsp;us
        <span class="follow-btn-area__follow-btn__inner__img">
          <img :src="src" :alt="alt">
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SnsFollowBtn',
  props: {
    media: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
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
.follow-btn-area {
  height: 4rem;
  width: 20rem;
  margin: 2rem auto auto;
  background-color: #fff;

  &__follow-btn {
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid #333;
    box-sizing: border-box;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.4);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      transform: translateX(1rem);
    }
  }

  &__follow-btn__inner__img {
    margin-left: 2rem;
  }
}

// ツイッターここから
.follow-btn-area__follow-btn.twitter {
  border-color: #1DA1F2;

  .follow-btn-area__follow-btn__inner__img {
    width: 4rem;
  }
}
// ツイッターここまで

// インスタグラムここから
.follow-btn-area__follow-btn.instagram {
  border-color: #CF2E92;

  .follow-btn-area__follow-btn__inner__img {
    width: 2.4rem;
  }
}
// インスタグラムここまで
</style>
