<template>
  <main class="miyato">
    <page-title title="profile" />
    <div class="page-body">
      <div class="page-member">
        <div class="page-member__img">
          <img :src="src" :alt="alt">
        </div>
        <section class="page-member__content">
          <div class="page-member__content__name">
            <h2 class="page-member__content__name--ja">{{ nameJa }}</h2>
            <p class="page-member__content__name--en">{{ nameEn }}</p>
          </div>
          <ul class="page-member__content__info">
            <li class="page-member__content__info__item">
              <ul class="page-member__content__info__item__sns-list">
                <li v-for="(snsItem, index) in snsList" :key="index" class="page-member__content__info__item__sns-list__item">
                  <a :href="snsItem.url" class="page-member__content__info__item__sns-list__inner" target="_blank">
                    <img :src="snsItem.src" :alt="snsItem.alt">
                  </a>
                </li>
              </ul>
            </li>
            <li v-for="(infoItem, index) in infoList" :key="index" class="page-member__content__info__item">
              <dl class="page-member__content__info__item__inner">
                <dt class="page-member__content__info__item__inner__title">{{ infoItem.title }}</dt>
                <dd class="page-member__content__info__item__inner__content">{{ infoItem.content }}</dd>
              </dl>
            </li>
          </ul>
        </section>
      </div>
      <layout-member miyato="hide" />
    </div>
    <layout-btn-default url="/profile/" text="メンバー一覧に戻る" />
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'MEMBER',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, 宮渡ひなこ' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらは宮渡ひなこの紹介ページです。宮渡ひなこに関する情報をお届けしてます。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/member/miyato' },
        { hid: 'og:title', property: 'og:title', content: 'MEMBER｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらは宮渡ひなこの紹介ページです。宮渡ひなこに関する情報をお届けしてます。' }
      ]
    }
  },
  data () {
    return {
      el: '#app',
      id: 'miyato',
      src: require('~/assets/images/member/miyato_square.jpg'),
      alt: '宮渡ひなこのアー写',
      nameJa: '宮渡 ひなこ',
      nameEn: 'honako miyato',
      infoList: [
        {
          title: '誕生日',
          content: '2001/9/27'
        },
        {
          title: '星座',
          content: 'てんびん座'
        },
        {
          title: '出身',
          content: '岐阜県'
        },
        {
          title: '趣味',
          content: '映画鑑賞・料理'
        },
        {
          title: '特技',
          content: 'テニス'
        }
      ],
      snsList: [
        {
          url: 'https://twitter.com/OVERFLOW_hinako',
          src: require('~/assets/images/sns/twitter.png'),
          alt: 'twitterのロゴ'
        },
        {
          url: 'https://www.instagram.com/miyato_hinako/',
          src: require('~/assets/images/sns/instagram.png'),
          alt: 'Instagramのロゴ'
        },
        {
          url: 'https://www.showroom-live.com/hinako_of',
          src: require('~/assets/images/sns/showroom.png'),
          alt: 'TikTokのロゴ'
        }
      ],
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'profile',
          path: '/profile/'
        },
        {
          name: '宮渡ひなこ',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-body {
  margin-top: 4rem;
}

.page-member__img {
  padding: 0 1.5rem;
}

.page-member__content {
  margin-top: 4rem;
  padding: 01.5rem;

  &__name {
    &--ja {
      font-size: 2.4rem;
      font-weight: bold;
    }

    &--en {
      margin-top: 0.6rem;
      text-transform: capitalize;
    }
  }
}

.page-member__content__info {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  &__item {
    width: 100%;
    margin-top: 1rem;

    &:nth-of-type(2) {
      margin-top: 2rem;
    }

    &:first-of-type {
      margin-top: 0rem;
    }
  }

  &__item__inner {
    display: flex;

    &__title {
      width: 8rem;
    }

    &__title::after {
      content: '：';
    }

    &__content {
      width: calc(100% - 8rem);
    }
  }
}

.page-member__content__info__item__sns-list {
  display: flex;
  align-items: center;

  &__item {
    width: 4rem;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .page-member {
    display: flex;

    &__img {
      width: 43%;
      padding: 0;
    }

    &__content {
      width: 55%;
      margin-top: 0;
      margin-left: 2%;
      padding: 0;
    }
  }

  .page-member__content__info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;

    &__item {
      width: 100%;
      margin-top: 1rem;

      &:nth-of-type(2) {
        margin-top: 2rem;
      }
    }
  }

  .member__list {
    justify-content: flex-start;
  }
}
</style>
