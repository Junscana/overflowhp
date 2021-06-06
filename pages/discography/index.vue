<template>
  <main class="discograpy">
    <page-title title="discograpy" />
    <div class="page-body">
      <ul class="tune-list">
        <li v-for="(tuneItem, index) in tuneList" :key="index" class="tune-list__item">
          <h2 class="tune-list__item__title">{{ tuneItem.title }}</h2>
          <ul class="tune-list__item__info">
            <li class="tune-list__item__info__item">
              <dl class="tune-list__item__info__item__inner">
                <dt class="tune-list__item__info__item__inner__title">作曲</dt>
                <dd class="tune-list__item__info__item__inner__content">{{ tuneItem.composer }}</dd>
              </dl>
            </li>
            <li class="tune-list__item__info__item">
              <dl class="tune-list__item__info__item__inner">
                <dt class="tune-list__item__info__item__inner__title">作詞</dt>
                <dd class="tune-list__item__info__item__inner__content">{{ tuneItem.lyricist }}</dd>
              </dl>
            </li>
          </ul>
          <button class="tune-list__item__modal-btn help_link__button" @click="changeLyric(tuneItem.lyrics), openModal()">
            歌詞を見る
          </button>
        </li>
      </ul>
    </div>
    <Modal v-if="modalFlag" @close-modal="closeModal" >
      <div style="white-space:pre-wrap;">{{ lyrics }}</div>
    </Modal>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'DISCOGRAPHY',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, ディスコグラフィー' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはディスコグラフィーページです。OVERFLOWの楽曲に関する情報をお届けしています。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/discography/' },
        { hid: 'og:title', property: 'og:title', content: 'DISCOGRAPHY｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはディスコグラフィーページです。のOVERFLOWの楽曲に関する情報をお届けしています。' }
      ]
    }
  },
  data () {
    return {
      modalFlag: false,
      lyrics: '',
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'discograpy',
          path: ''
        }
      ],
      tuneList: [
        {
          title: '楽曲タイトル',
          composer: '作曲家',
          lyricist: '作詞家',
          lyrics: ''
        },
        {
          title: '楽曲タイトル',
          composer: '作曲家',
          lyricist: '作詞家',
          lyrics: ''
        },
        {
          title: '楽曲タイトル',
          composer: '作曲家',
          lyricist: '作詞家',
          lyrics: ''
        }
      ]
    }
  },
  methods: {
    openModal () {
      this.modalFlag = true
    },
    closeModal () {
      this.modalFlag = false
    },
    changeLyric (lyrics) {
      this.lyrics = lyrics
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body {
  margin-top: 4rem;
}

.tune-list {
  padding: 0 1.5rem;
}

.tune-list__item {
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 0;
  }
}

.tune-list__item__title {
  font-size: 1.8rem;

  &::before {
    content: '○';
    margin-right: 0.6rem;
  }
}

.tune-list__item__info {
  display: flex;
  margin-top: 1rem;

  &__item {
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

.tune-list__item__info__item__inner {
  display: flex;

  &__title {
    font-size: 1.4rem;
  }

  &__title::after {
    content: '：';
    margin-right: 0.4rem;
  }

  &__content {
    font-size: 1.4rem;
  }
}

.tune-list__item__modal-btn {
  display: block;
  margin: 2rem auto auto auto;
}
</style>
