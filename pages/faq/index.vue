<template>
  <main class="faq">
    <page-title title="faq" />
    <div class="page-body">
      <div class="accordion">
        <ul class="accordion__inner">
          <li
            v-for="(item, index) in getContents"
            :key="index"
            class="accordion__inner__item"
          >
            <button
              type="button"
              class="accordion__inner__item__title"
              :class="{ 'is-active': isOpen[index] }"
              @click="handleToggle(index)"
            >
              <span v-text="item.title" />
            </button>
            <transition
              title="topSlide"
              @before-enter="beforeEnter"
              @enter="enter"
              @before-leave="beforeLeave"
              @leave="leave"
            >
              <p v-show="isOpen[index]" v-text="item.content" class="accordion__inner__item__content topSlide" />
            </transition>
          </li>
        </ul>
      </div>
    </div>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'FAQ',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, FAQ, よくあるご質問' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはFAQ（よくあるご質問）ページです。OVERFLOWに関するよくあるご質問をご覧いただけます。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/faq/' },
        { hid: 'og:title', property: 'og:title', content: 'FAQ｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはFAQ（よくあるご質問）ページです。OVERFLOWに関するよくあるご質問をご覧いただけます。' }
      ]
    }
  },
  data () {
    return {
      isOpen: [],
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'faq',
          path: ''
        }
      ]
    }
  },
  created () {
    this.isOpen = Array(this.getContents.length).fill(false)
  },
  computed: {
    getContents () {
      const data = [
        {
          title: 'ここに質問が入ります',
          content: 'ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。'
        },
        {
          title: 'ここに質問が入ります',
          content: 'ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。'
        },
        {
          title: 'ここに質問が入ります',
          content: 'ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。ここに回答が入ります。'
        }
      ]
      return data
    }
  },
  methods: {
    // メニューを開閉する
    handleToggle (index) {
      if (!this.isOpen[index]) {
        this.isOpen = Array(this.getContents.length).fill(false)
      }
      this.isOpen.splice(index, 1, !this.isOpen[index])
    },
    // スライド開閉要素の高さ取得
    beforeEnter (el) {
      el.style.height = '0'
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave (el) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion__inner__item{
  margin: 0 1.5rem;
  border-top: 1px solid #6AC0F0;
  box-sizing: border-box;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: 1px solid #6AC0F0;
  }
}

.accordion__inner__item__title {
  font-size: 1.8rem;
  text-align: left;
  display: block;
  width: 100%;
  padding: 1rem 0;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  border: none;

  &::before,
  &::after {
    content: '';
    width: 1.8rem;
    height: 0.1rem;
    background-color: #444;
    position: absolute;
    top: 50%;
    right: 0;
  }

  &::before {
    transform: translate(0, -50%);
  }

  &::after {
    transition: all 0.3s ease-in-out;
    transform: translate(0, -50%) rotate(90deg);
  }

  &.is-active {
    &::after {
      transform: translate(0, -50%) rotate(0deg);
    }
  }
}

.accordion__inner__item__content {
  padding: 1.5rem 0 0;
  border-top: 1px solid #6AC0F0;

  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.topSlide {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.topSlide-enter-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.topSlide-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@media screen and (min-width: 768px) {
  .page-body {
    max-width: 68rem;
  }
}
</style>
