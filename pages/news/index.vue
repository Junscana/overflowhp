<template>
  <main class="news">
    <section class="page-contents">
      <page-title title="news" />
      <div class="page-body">
        <ul class="article">
          <li v-for="content in getContents" :key="content.id" class="artile__item">
            <nuxt-link :to="'/news/posts/' + content.id + '/'" class="artile__item__inner">
            <div class="artile__item__inner__header">
              <sapn v-text="$dayjs(content.published).locale('ja').format('YYYY/MM/DD')"  class="artile__item__inner__header__date" />
              <span v-if="content.category == 'event'" class="artile__item__inner__header__category event fontUppercase">event</span>
              <span v-if="content.category == 'news'" class="artile__item__inner__header__category news fontUppercase">news</span>
              <span v-if="content.category == 'media'" class="artile__item__inner__header__category media fontUppercase">media</span>
            </div>
            <div class="artile__item__inner__body">
              <p class="artile__item__inner__body__title">{{ content.title }}</p>
            </div>
            </nuxt-link>
          </li>
        </ul>
        <client-only placeholder="Loading...">
          <paginate
            v-if="(getPageCount > 1)"
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'前へ'"
            :next-text="'次へ'"
            :container-class="'pagination flex justify-center mb-6'"
            :page-class="'pagination-item'"
            :page-link-class="'pagination-item__link'"
            :prev-class="'pagination-btn pagination-prev'"
            :prev-link-class="'pagination-btn__link'"
            :next-class="'pagination-btn pagination-next'"
            :next-link-class="'pagination-btn__link'"
            :hide-prev-next="true"
            >
          </paginate>
        </client-only>
      </div>
    </section>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/news?limit=1000`, {
      headers: { 'X-API-KEY': $config.apiKey }
    })
    const parPage = 1000
    const currentPage = 1
    return { contents: data.contents, parPage, currentPage }
  },
  head () {
    return {
      title: 'NEWS',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, ニュース, お知らせ, イベント, ライブ, メディア' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはOVERFLOWのニュース一覧ページです。OVERFLOWに関するニュースをお届けしています。イベントやライブ、メディアに関してなどの投稿を掲載しています。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com' },
        { hid: 'og:title', property: 'og:title', content: 'NEWS｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはOVERFLOWのニュース一覧ページです。OVERFLOWに関するニュースをお届けしています。イベントやライブ、メディアに関してなどの投稿を掲載しています。' }
      ]
    }
  },
  data () {
    return {
      parPage: '',
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'news',
          path: ''
        }
      ]
    }
  },
  mounted () {
    this.parPage = 7
  },
  methods: {
    clickCallback (pageNum) {
      this.currentPage = Number(pageNum)
    }
  },
  computed: {
    getContents () {
      const current = this.currentPage * this.parPage
      const start = current - this.parPage
      return this.contents.slice(start, current)
    },
    getPageCount () {
      return Math.ceil(this.contents.length / this.parPage)
    }
  }
}
</script>

<style lang="scss">

.artile__item {
  border-bottom: 1px solid #333;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 4rem;
    width: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-image: url('~@/assets/images/icon/icon_arrow-right.png');
    background-size: 160%;
    background-repeat: no-repeat;
    background-position: 50% 40%;
  }

  &:first-of-type {
    border-top: 1px solid #333;
  }
}

.artile__item__inner {
  display: block;
  padding: 2rem 2rem 2rem 0rem;
}

.artile__item__inner__header {
  &__date {
    color: #fa89b9;
  }

  &__category {
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
}

.artile__item__inner__body {
  margin-top: 0.6rem;

  &__title {
    font-size: 1.8rem;
    line-height: 1.4;
  }
}

.article-content__header {
  padding: 0 0 1rem;
  margin: 0 1.5rem;

  &__date {
    color: #fa89b9;
  }
}

// ページネーションここから
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.pagination-btn__link,
.pagination-item__link {
  border: solid 1px #fa89b9;
  border-radius: 4px;
  text-align: center;
  padding: .5rem 1rem;
  margin: 0 .25rem;
  display: block;
}
.pagination-btn__link:hover,
.pagination-item__link:hover {
  background-color: #fa89b9;
  color: #fff;
}
.active .pagination-item__link {
  background-color: #fa89b9;
  color: #fff;
  pointer-events: none;
}
// ページネーションここから

@media screen and (min-width: 768px) {
  .page-body {
    max-width: 100rem;
    margin: 2rem auto 0;
  }

  .article-content__header > dt {
    width: 100%;
  }
}
</style>
