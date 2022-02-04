<template>
  <main class="faq">
    <!-- <page-title title="faq" />
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
            <p v-show="isOpen[index]" class="accordion__inner__item__content topSlide">{{ item.content }}<span v-if="item.hasTextLink" class="text-link"><nuxt-link :to="item.textLink">{{ item.linkText }}</nuxt-link></span></p>
            </transition>
          </li>
        </ul>
      </div>
    </div>
    <breadcrumb :breadcrumbs="breadcrumbs" /> -->
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
          title: 'プレゼントはできますか？',
          content: 'プレゼントは事前にプレゼント可能の告知が出ている定期公演、主催ライブのみ可能です。メンバーへの直接のお渡しはお断りしております。物販スタッフまでお渡しください。プレゼントできないものもございますので、［物販・特典会レギュレーションとイベント参加に関する注意事項］を合わせてご確認ください。',
          hasTextLink: true,
          textLink: '/information/',
          linkText: '［物販・特典会レギュレーションとイベント参加に関する注意事項］'
        },
        {
          title: 'チケットの購入方法は？',
          content: 'ライブごとに異なります。\nOVERFLOW公式Twitterにてライブ予定とチケット購入リンクを随時告知しております。またOVERFLOW公式ホームページのスケジュールページからも、ライブごとに購入リンクを記載しております。そちらもご参考ください。',
          hasTextLink: false
        },
        {
          title: 'ライブのルールは？',
          content: '会場やイベントによりルールが異なります。それぞれのルールに従ってご参加ください。また、OVERFLOWの観覧ルールなどは［物販・特典会レギュレーションとイベント参加に関する注意事項］のページにまとめておりますのでご確認ください。',
          hasTextLink: true,
          textLink: '/information/',
          linkText: '［物販・特典会レギュレーションとイベント参加に関する注意事項］'
        },
        {
          title: 'ライブは撮影できますか？',
          content: '原則撮影は禁止です。撮影可能の際は公式Twitterより告知します。',
          hasTextLink: false
        },
        {
          title: '特典会の参加方法は？',
          content: '①参加には特典券が必要です。(a),(b)どちらの方法でも入手できます。\n(a)チェキ券を購入する→物販購入列へお並びください。グッズもこちらで購入できます。\n(b)グッズ特典券で参加する→グッズ購入2000円毎にお渡しする『グッズ購入特典券』を集めて特典会に参加することもできます。(1枚→写メ、2枚→サインなしチェキ、3枚→サイン有りチェキ、4枚→30秒動画or集合チェキ)\n\n②特典会列に並び、撮影。\n・1度に複数枚券を出すことはできません。\n1枚使用後に特典会列に並び直しをお願いします。\n・チェキ、グッズ購入特典券、入場特典券など、どの種類の券も同じ列にお並びください。\n・チェキ、写メ共にメンバーのみでの撮影も可能です。\n・その他［物販・特典会レギュレーションとイベント参加に関する注意事項］をご確認ください。',
          hasTextLink: true,
          textLink: '/information/',
          linkText: '［物販・特典会レギュレーションとイベント参加に関する注意事項］'
        },
        {
          title: 'スケジュールはいつ更新されますか？',
          content: 'スケジュール更新は随時変更、追加します。予告なしに変更、追加がある場合や、Twitterの告知と前後する場合もございますので、予めご了承ください。',
          hasTextLink: false
        }
      ]
      return data
    }
  },
  methods: {
    handleToggle (index) {
      if (!this.isOpen[index]) {
        this.isOpen = Array(this.getContents.length).fill(false)
      }
      this.isOpen.splice(index, 1, !this.isOpen[index])
    },
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
.accordion__inner__item {
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
  white-space: pre-wrap;
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

.text-link {
  display: block;
  margin-top: 1rem;

  a {
    color: #0066c0;
  }
}

@media screen and (min-width: 769px) {
  .page-body {
    max-width: 68rem;
  }

  .accordion__inner__item {
    margin: 0;
  }
}
</style>
