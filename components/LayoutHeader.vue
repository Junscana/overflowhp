<template>
  <header class="header" :class="{ 'colored': scrollY > kvHeight }">
    <div class="header__inner">
      <div
        class="header__menu-btn"
        :class="{ active: menuBtnActive }"
        @click="menuBtnActive = !menuBtnActive"
      />
    </div>
    <div
      class="header__menu-layer"
      :class="{ active: menuBtnActive }"
      @click="menuBtnActive = !menuBtnActive"
    />
    <div
      class="header__menu"
      :class="{ active: menuBtnActive }"
    >
      <ul class="header__menu__inner">
        <li v-for="(menuItem, menuIndex) in menuList" :key="`menu-${menuIndex}`" class="header__menu__inner__item" @click="menuBtnActive = !menuBtnActive">
          <nuxt-link :to="menuItem.url" class="header__menu__inner__item__inner fontUppercase" :target="menuItem.isBlank">
            <span v-if="menuItem.note" class="header__menu__inner__item__inner fontUppercase" style="padding-top: 0;">
              {{ menuItem.text }}
            </span>
            <span v-else class="header__menu__inner__item__inner fontUppercase" style="padding: 0;">
              {{ menuItem.text }}
            </span>
            <p v-if="menuItem.note" class="font-s fontUppercase" style="color: #707070; font-size: 1.4rem;">※{{ menuItem.text }}は現在準備中です</p>
          </nuxt-link>
        </li>
        <li v-for="(menuItem, menuExtraIndex) in menuListExtraLink" :key="`menuExtra-${menuExtraIndex}`" class="header__menu__inner__item">
          <span class="header__menu__inner__item__inner fontUppercase">
            {{ menuItem.text }}
          </span>
          <p class="font-s fontUppercase" style="color: #707070; font-size: 1.4rem;">※online shopは現在準備中です</p>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data () {
    return {
      menuBtnActive: false,
      logo: {
        url: '/',
        src: require('~/assets/images/logo/logo-pink.png'),
        alt: 'OVERFLOWのロゴ'
      },
      winWidth: '',
      scrollY: 0,
      kvHeight: '',
      menuList: [
        {
          text: 'home',
          url: '/',
          isBlank: 'false',
          note: false
        },
        {
          text: 'news',
          url: '/news/',
          isBlank: 'false',
          note: false
        },
        {
          text: 'about',
          url: '/about/',
          isBlank: 'false',
          note: false
        },
        {
          text: 'profile',
          url: '/profile/',
          isBlank: 'false',
          note: false
        },
        {
          text: 'schedule',
          url: '/schedule/',
          isBlank: 'false',
          note: false
        },
        {
          text: 'discography',
          url: '',
          isBlank: 'false',
          note: true
        },
        // {
        //   text: 'discography',
        //   url: '/discography/',
        //   isBlank: 'false'
        // },
        {
          text: 'faq',
          url: '',
          isBlank: 'false',
          note: true
        },
        // {
        //   text: 'faq',
        //   url: '/faq/',
        //   isBlank: 'false'
        // },
        {
          text: 'contact',
          url: '/contact/',
          isBlank: 'false',
          note: false
        }
      ],
      menuListExtraLink: [
        {
          text: 'online shop',
          url: ''
        }
        // {
        //   text: 'online shop',
        //   url: 'https://overflow.official.ec'
        // }
      ]
    }
  },
  mounted () {
    window.addEventListener('load', this.getWinKvHeight)
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleKvHeight)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    // スクロール量取得
    handleScroll () {
      this.scrollY = window.scrollY
    },
    // ウィンドウサイズ取得
    handleResize () {
      this.winWidth = window.innerWidth
    },
    getWinKvHeight () {
      this.winWidth = window.innerWidth
      if (this.$route.name === 'index') {
        if (this.winWidth <= 768) {
          this.kvHeight = (4 * this.winWidth) / 3
        } else {
          this.kvHeight = (9 * this.winWidth) / 16
        }
      }
    },
    handleKvHeight () {
      this.winWidth = window.innerWidth
      if (this.winWidth <= 768) {
        this.kvHeight = (4 * this.winWidth) / 3
      } else {
        this.kvHeight = (9 * this.winWidth) / 16
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
.header {
  height: 6.4rem;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(174, 216, 255, 0) 100%);
  position: fixed;
  top: 0;
  z-index: 1;
  transition-duration: 0.4s;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__logo {
    height: 3.4rem;

    &__inner {
      height: 100%;
    }

    img {
      height: 100%;
      width: auto;
    }
  }

  &__menu-btn {
    height: 3.4rem;
    width: 3.4rem;
    position: relative;
    z-index: 11;

    &::before {
      content: "";
      display: inline-block;
      height: 1px;
      width: 3.6rem;
      background-color: #fa89b9;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transform: translateY(-0.8rem);
      transition-duration: 0.4s;
    }

    &::after {
      content: "";
      display: inline-block;
      height: 1px;
      width: 3.6rem;
      background-color: #fa89b9;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transform: translateY(0.8rem);
      transition-duration: 0.4s;
    }
  }

  &__menu-btn.active {
    &::before {
      background-color: #fa89b9 !important;
    }

    &::after {
      background-color: #fa89b9 !important;
    }
  }

  // ヘッダーメニュー活性ここから
  &__menu-btn.active {
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
  // ヘッダーメニュー活性ここまで

  &.colored {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgb(218 247 255 / 60%) 100%);
    transition-duration: 0.4s;

    .header__menu-btn::before,
    .header__menu-btn::after {
      background-color: #333;
    }
  }
}

.header__menu {
  height: 100%;
  width: 55%;
  padding: 6.4rem 1.5rem 0;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  right: -80%;
  z-index: 10;
  transition: 0.8s;
  overflow-y: scroll;

  &__inner {
    width: 15rem;
    margin: auto;
  }

  &__inner__item__inner {
    padding: 1rem 0;
    display: block;
    color: #F2C0D6;
  }
}

.header__menu-layer {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.6s;
  transition-delay: 0.1s;
}

.header__menu-layer.active {
  left: 0;
  transition: 0.6s;
}

.header__menu.active {
  right: 0;
}

@media screen and (min-width: 768px) {
  .header__inner {
    max-width: 100rem;
    margin: auto;
    padding: 0 1.5rem;
    position: fixed;
    right: 4rem;
    z-index: 100;
    padding: 0;

    &__menu {
      width: 34rem;

      &__inner {
        width: 26rem;
      }
    }
  }

  .header__menu {
    width: 18%;

    &__inner {
      width: 16rem;
    }

    &__inner__item__inner {
      font-size: 2.0rem;
    }
  }
}
</style>
