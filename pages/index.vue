<template>
  <main class="home">
    <h1 class="key-visual">
      <img src="~/assets/images/kv/kv210913--sp.jpg" alt="OVERFLOWアーティスト写真" class="sp">
      <img src="~/assets/images/kv/kv210913--pc.jpg" alt="OVERFLOWアーティスト写真" class="pc">
    </h1>
    <div class="main-inner">
      <btn-information />
      <!-- news -->
      <section class="top-section news">
        <div class="top-section__header">
          <h2 class="top-section__header__title">news<span class="title-ul"></span></h2>
        </div>
        <div class="top-section__body">
        <ul class="article">
          <li v-for="content in contents" :key="content.id" class="artile__item">
            <nuxt-link :to="'/news/posts/' + content.id + '/'" class="artile__item__inner">
            <div class="artile__item__inner__header">
              <sapn v-text="$dayjs(content.published).locale('ja').format('YYYY/MM/DD')"  class="artile__item__inner__header__date" />
              <span v-if="content.category == 'event'" class="artile__item__inner__header__category event fontUppercase">event</span>
              <span v-if="content.category == 'news'" class="artile__item__inner__header__category news fontUppercase">news</span>
              <span v-if="content.category == 'information'" class="artile__item__inner__header__category info fontUppercase">information</span>
              <span v-if="content.category == 'media'" class="artile__item__inner__header__category media fontUppercase">media</span>
            </div>
            <div class="artile__item__inner__body">
              <p class="artile__item__inner__body__title">{{ content.title }}</p>
            </div>
            </nuxt-link>
          </li>
        </ul>
        </div>
        <div class="top-section__footer">
          <layout-btn-default url="/news/" text="view more" />
        </div>
      </section>
      <!-- /news -->
      <!-- schedule -->
      <section class="top-section schedule">
        <div class="top-section__header">
          <h2 class="top-section__header__title">schedule<span class="title-ul"></span></h2>
        </div>
        <div class="top-section__body">
          <layout-schedule />
          <section class="sns">
            <div class="top-section__header">
              <h3 class="top-section__header__title">sns<span class="title-ul"></span></h3>
            </div>
            <div class="sns__content">
              <!-- Twitter -->
              <section class="sns__content__item twitter">
                <div class="twitter__inner">
                  <a class="twitter-timeline" data-height="500" data-theme="light"  href="https://twitter.com/OVER_FLOW_info?ref_src=twsrc%5Etfw">Tweets by OVER_FLOW_info</a>
                  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
                <sns-follow-btn media="twitter" :url="twitter.url" :src="twitter.src" :alt="twitter.alt" />
              </section>
              <!-- /Twitter -->
              <!-- Instagram -->
              <section class="sns__content__item" v-if="false">
                <div class="instagram__item instagram">
                  <div class="instagram__inner">
                    <img src="http://placehold.jp/300x500.png?text=Instagram" alt="Instagram埋め込み" class="sp">
                    <img src="http://placehold.jp/00x500.png?text=Instagram" alt="Instagram埋め込み" class="pc" style="height: 502px;">
                  </div>
                  <sns-follow-btn media="instagram" :url="instagram.url" :src="instagram.src" :alt="instagram.alt" />
                </div>
              </section>
              <!-- /Instagram -->
            </div>
          </section>
        </div>
      </section>
      <!-- /schedule -->
      <!-- online shop -->
      <section v-if="false" class="top-section online-shop">
        <div class="top-section__header">
          <h2 class="top-section__header__title">online&nbsp;shopへ</h2>
        </div>
        <div class="top-section__body">
          <layout-online-shop />
        </div>
        <div class="top-section__footer">
          <layout-btn-extarnal url="https://www.instagram.com/" text="online shopへ" />
        </div>
      </section>
      <!-- /online shop -->
      <breadcrumb :breadcrumbs="breadcrumbs" />
    </div>
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
