<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__wrapper__logo">
        <nuxt-link :to="logo.url" class="footer__wrapper__logo__inner">
          <img :src="logo.src" :alt="logo.alt">
        </nuxt-link>
      </div>
      <ul class="footer__wrapper__sns u-mtS">
        <li v-for="(snsItem, index) in snsItemList" :key="index" class="footer__wrapper__sns__item">
          <a :href="snsItem.url" class="footer__wrapper__sns__item__inner" target="_blank">
            <img :src="snsItem.src" :alt="snsItem.alt" class="footer__wrapper__sns__item__inner__img">
          </a>
        </li>
      </ul>
      <ul v-if="false" class="footer__wrapper__banner u-mtS">
        <li v-for="(bnrItem, index) in bnrItemList" :key="index" class="footer__wrapper__banner__item">
          <a :href="bnrItem.url" class="footer___wrapper_banner__item" target="_blank">
            <img :src="bnrItem.src" :alt="bnrItem.alt" class="footer__wrapper__banner__item__img">
          </a>
        </li>
      </ul>
      <ul class="footer__wrapper__links u-mtM">
        <li v-for="(linkItem, index) in linkItemList" :key="index" class="footer__wrapper__links__item" >
          <nuxt-link :to="linkItem.url">{{ linkItem.text }}</nuxt-link>
        </li>
      </ul>
      <div class="footer__wrapper__copyright u-mtM">
        <small class="footer__wrapper__copyright__text">
          <span>&copy;</span>
          2021-&nbsp;<span class="fontUppercase">overflow</span>
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data () {
    return {
      logo: {
        url: '/',
        src: require('~/assets/images/logo/logo-pink.png'),
        alt: 'OVERFLOWのロゴ'
      },
      snsItemList: [
        {
          url: 'https://twitter.com/OVER_FLOW_info',
          src: require('~/assets/images/sns/twitter.png'),
          alt: 'hoge'
        }
        // {
        //   url: 'https://www.instagram.com/idlidl2021/?igshid=5e2hjn3jeaha',
        //   src: require('~/assets/images/sns/instagram.png'),
        //   alt: 'hoge'
        // },
        // {
        //   url: 'https://www.youtube.com/',
        //   src: require('~/assets/images/sns/youtube.png'),
        //   alt: 'hoge'
        // }
      ],
      bnrItemList: [
        // {
        //   url: '',
        //   src: require('~/assets/images/banner/bnr1.png'),
        //   alt: 'hoge'
        // }
      ],
      linkItemList: [
        {
          url: '',
          text: 'よくあるご質問'
        },
        // {
        //   url: '/faq/',
        //   text: 'よくあるご質問'
        // },
        {
          url: '/contact/',
          text: 'お問い合わせ'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  &__wrapper {
    padding: 4rem 1.5rem;
  }

  &__wrapper__links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__wrapper__copyright__text {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;

    span:first-of-type {
      font-size: 1.6rem;
    }
  }
}

.footer__wrapper__sns {
  display: flex;
  justify-content: center;

  &__item {
    display: flex;
    align-items: center;
    margin-left: 2rem;

    &:first-of-type {
      margin-left: 0;
    }

    &__inner__img {
      width: 4rem;
    }
  }
}

.footer__wrapper__links__item {
  font-size: 1.2rem;

  &::before {
    content: "|";
    margin: 0 2rem;
    text-decoration: none;
  }

  &:first-of-type::before {
    display: none;
  }
}

.footer__wrapper__logo {
  width: 20rem;
  margin: auto;
}

.footer__wrapper__banner__item {
  width: 24rem;
  margin: auto;
}

</style>
