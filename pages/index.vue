<template>
  <main>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/news?limit=4`, {
      headers: { 'X-API-KEY': $config.apiKey }
    })
    return {
      contents: data.contents
    }
  },
  head () {
    return {
      title: 'HOME'
    }
  },
  data () {
    return {
      twitter: {
        url: 'https://twitter.com/intent/follow?screen_name=OVER_FLOW_info',
        src: require('~/assets/images/sns/twitter-bird.png'),
        alt: 'Twitterのロゴ'
      },
      instagram: {
        url: 'https://www.instagram.com/',
        src: require('~/assets/images/sns/instagram.png'),
        alt: 'Twitterのロゴ'
      },
      breadcrumbs: [
      ]
    }
  }
}
</script>

<style lang="scss">
main.home {
  padding: 0;
  margin-top: 0;
}

// snsここから
.sns {
  margin-top: 4rem;
}

.twitter,
.instagram {
  margin-top: 2rem;
}

.twitter__inner {
  border: 1px solid #ccc;
  box-sizing: border-box;
}
// snsここまで

// セクション共通部分
.top-section {
  padding-top: 4rem;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 45rem;
    width: 19rem;
    background-image: url(~@/assets/images/bg/bg-2.png);
    background-size: cover;
    position: absolute;
    right: 0;
    top: -20rem;
    z-index: -1;
  }

  &:first-of-type {
    &::before {
      content: '';
      display: block;
      height: 35rem;
      width: 24rem;
      background-image: url(~@/assets/images/bg/bg-1.png);
      background-size: cover;
      position: absolute;
      left: -1.5rem;
      top: -20rem;
      z-index: -1;
    }
  }
}

.top-section__header__title {
  padding: 0 1.5rem 0.8rem;
  font-size: 2.4rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;
}

.top-section__body {
  margin: 2rem 1.5rem 0;
}

.top-section__footer {
  .btn-area-extarnal {
    margin-top: 2rem;
  }
}
// セクション共通部分ここまで

// scheduleここから
.top-section.schedule {
  margin: 4rem auto 0;
}

.top-section__body .schedule {
  margin: 0;
}

.sns__content__item {
  &:first-of-type {
    position: relative;

    &::after {
      content: '';
      display: block;
      height: 35rem;
      width: 24rem;
      background-image: url(~@/assets/images/bg/bg-1.png);
      background-size: cover;
      position: absolute;
      left: -1.5rem;
      bottom: 10rem;
      z-index: -1;
    }
  }
}
// scheduleここまで

// 共通（ボタン外部リンク）ここから
.btn-area-extarnal__btn-default {
  text-transform: uppercase;
}
// 共通（ボタン外部リンク）ここまで

@media screen and (min-width: 768px) {
  .main-inner {
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 45rem;
      width: 19rem;
      background-image: url(~@/assets/images/bg/bg-2.png);
      background-size: cover;
      position: absolute;
      right: 0;
      top: -20rem;
      z-index: -1;
    }

    &::after {
      content: '';
      display: block;
      height: 35rem;
      width: 24rem;
      background-image: url(~@/assets/images/bg/bg-1.png);
      background-size: cover;
      position: absolute;
      left: -1.5rem;
      top: 40rem;
      z-index: -1;
    }
  }
  .top-section {
    max-width: 100rem;
    margin: 4rem auto 0;

    &:first-of-type::before {
      display: none;
    }

    &::before {
      display: none;
    }

    &:nth-of-type(2)::after {
      display: none;
    }
  }

  .sns__content {
    display: flex;
    // justify-content: space-between;
    justify-content: center;
  }

  .sns__content__item {
    width: 44rem;

    &:first-of-type::after {
      display: none;
    }
  }

  .home .l-breadcrumb {
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 45rem;
      width: 19rem;
      background-image: url(~@/assets/images/bg/bg-2.png);
      background-size: cover;
      position: absolute;
      right: 0;
      top: -40rem;
      z-index: -1;
    }
  }
}
</style>
