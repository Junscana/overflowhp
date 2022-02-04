<template>
  <main class="profile">
    <!-- <page-title title="profile" />
    <div class="page-body">
      <layout-member />
    </div>
    <breadcrumb :breadcrumbs="breadcrumbs" /> -->
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'MEMBER',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, 西名ゆめ, 神崎ひめの, 柚月みほ, 本多あおい, 宮渡ひなこ, 立花ことね' },
        { hid: 'description', name: 'description', content: 'OVERFLOWのメンバー一覧ページです。ここから気になったメンバーの詳細ページに飛ぶことができます。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/profile/' },
        { hid: 'og:title', property: 'og:title', content: 'MEMBER｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWのメンバー一覧ページです。ここから気になったメンバーの詳細ページに飛ぶことができます。' }
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
          name: 'profile',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  padding: 0 1.5rem;
}

.group__desc {
  margin-top: 4rem;

  &__title {
    font-size: 2rem;
    font-weight: bold;
  }

  &__content {
    margin-top: 2rem;
  }
}
</style>
