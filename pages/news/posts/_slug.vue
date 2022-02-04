<template>
  <main class="article">
    <!-- <section class="page-contents">
      <page-title title="news" />
      <div class="page-body">
        <div class="article-content">
          <dl class="article-content__header">
            <dd class="article-content__header__date">
              <span v-text="$dayjs(item.published).locale('ja').format('YYYY/MM/DD')" />
              </dd>
            <dd>
              <span v-if="item.category == 'event'" class="article-content__category event fontUppercase">event</span>
              <span v-if="item.category == 'news'" class="article-content__category news fontUppercase">news</span>
              <span v-if="item.category == 'information'" class="article-content__category info fontUppercase">information</span>
              <span v-if="item.category == 'media'" class="article-content__category media fontUppercase">media</span>
            </dd>
            <dt><h2 class="article-content__header__title">{{ item.title }}</h2></dt>
          </dl>
          <div class="article-content__body">
            <div class="article-content__body__inner" v-html="item.body" />
          </div>
        </div>
        <layout-btn-default url="/news/" text="記事一覧に戻る" />
      </div>
    </section>
    <div class="l-breadcrumb">
      <div class="l-breadcrumb__inner">
        <ul class="l-breadcrumb__inner__items">
          <li class="l-breadcrumb__inner__items__item">
            <nuxt-link to="/" class="l-breadcrumb__inner__items__item__text--link fontUppercase">
              <span>home</span>
            </nuxt-link>
          </li>
          <li class="l-breadcrumb__inner__items__item">
            <nuxt-link to="/news/" class="l-breadcrumb__inner__items__item__text--link fontUppercase">
              <span>news</span>
            </nuxt-link>
          </li>
          <li class="l-breadcrumb__inner__items__item">
            <span class="l-breadcrumb__inner__items__item__text--nolink fontUppercase">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div> -->
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ $config, params }) {
    const { data } = await axios.get(`${$config.apiUrl}/news/${params.slug}`, {
      headers: { 'X-API-KEY': $config.apiKey }
    })
    return {
      item: data
    }
  },
  head () {
    return {
      title: this.item.title,
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, ニュース, お知らせ, イベント, ライブ, メディア, 投稿' },
        { hid: 'description', name: 'description', content: this.item.title },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/news/posts/' + this.item.id },
        { hid: 'og:title', property: 'og:title', content: 'OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: this.item.title }
      ]
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.article-content__header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;

  &__title {
    margin-top: 1rem;
    font-size: 2.0rem;
  }

  dt {
    width: 100%;
  }
}

.article-content__category {
  margin-left: 1rem;
  padding: 0.4rem 1rem;
  font-size: 1.4rem;
  box-sizing: border-box;
  border: 1px solid #707070;
  box-sizing: border-box;

  &.event {
    border-color: #ffc241;
  }

  &.news {
    border-color: #ffb1fa
  }

  &.media {
    border-color: #62a8ff;
  }
}

.article-content__body {
  margin-top: 2rem;

  a {
    color: #1a0dab;
    text-decoration: underline;
  }

  &__inner {
    line-height: initial;
  }
}

// パンくずここから
.l-breadcrumb{
  margin-top: 6rem;
  background: no-repeat left/60% url("~@/assets/images/bg/bg-1.png");

  &__inner {
    display: flex;
    align-items: center;
    height: 4rem;
    margin: 0 1.5rem;

    &__items {
      display: flex;
      // flex-wrap: wrap;
    }

    &__items__item::before {
      content: '＞';
      margin: 0 1rem;
    }

    &__items__item:first-of-type::before {
      display: none;
    }

    &__items__item__text--link {
      color: #fa89b9;
    }
  }
}

.article {
  .article-content__header {
    margin: 0;
  }

  .l-breadcrumb__inner {
    overflow-x: scroll;
    word-break: keep-all;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .l-breadcrumb__inner::-webkit-scrollbar {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .l-breadcrumb{
    &__inner {
      max-width: 100rem;
      margin: 6rem auto 0;
    }
  }
}
// パンくずここまで
</style>
