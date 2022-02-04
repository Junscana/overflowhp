<template>
  <main class="contact">
    <!-- <page-title title="contact" />
    <div class="page-body">
      <p class="contact-desc">グループに関してや出演など依頼などは下記ボタンよりお問い合わせください。</p>
      <div class="btn-area">
        <a
          class="btn-area__contact-btn"
          href="mailto:info@overflowhp.com?subject=OVERFLOW公式ホームページからお問い合わせ&amp;body=【お名前】%0d%0a%0d%0a%0d%0a【会社名】%0d%0a%0d%0a%0d%0a【メールアドレス】%0d%0a%0d%0a%0d%0a【電話番号】%0d%0a%0d%0a%0d%0a【件名】%0d%0a%0d%0a%0d%0a【お問い合わせ内容】%0d%0a%0d%0a%0d%0a"
        >お問い合わせはこちら</a>
      </div>
    </div>
    <breadcrumb :breadcrumbs="breadcrumbs" /> -->
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'CONTACT',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, お問い合わせ, 不明点' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWに関するお問い合わせはこちらから可能です。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/contact/' },
        { hid: 'og:title', property: 'og:title', content: 'SCHEDULE｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWに関するお問い合わせはこちらから可能です。' }
      ]
    }
  },
  data () {
    return {
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'contact',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body {
  margin-top: 2rem;
}

.contact-desc {
  padding: 0 1.5rem;
}

.btn-area {
  margin-top: 4rem;
  text-align: center;

  &__contact-btn {
    display: block;
    height: 4rem;
    width: 20rem;
    margin: auto;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    border: 1px solid #333;
    box-sizing: border-box;
  }
}

@media screen and (min-width: 768px) {
  .contact-desc {
    text-align: center;
  }
}
</style>
