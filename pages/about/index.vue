<template>
  <main class="profile">
    <section class="page-contents">
      <page-title title="about" />
      <div class="page-body">
        <section class="group">
          <div class="group__image">
            <img src="~/assets/images/kv/kv-pc.jpg" alt="OVERFLOWアーティスト写真">
          </div>
          <div class="group__desc">
            <p class="group__desc__text">2021.06.19 OVERFLOWデビュー単独LIVE@白金高輪SELENE b2開催</p>
            <div class="group__desc__content">
              <strong class="group__desc__content__concept">『儚い女の子』</strong>
              <p class="group__desc__content__text">
                <span>儚さとは、何かが散りゆく、その刹那の瞬間。</span>
                <span>あっという間に過ぎていく、青春。<br>友達も、恋愛も、家族も、将来も、</span>
                <span>期待と不安に</span>
                <span>心が揺れ動いて、一歩踏み出せない。</span>
                <span>思い通りにならないもどかしさに、胸が苦しくなる。<br>感情が溢れ出して、壊れて消えてしまいそうになる。</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'PROFILE',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, 『儚い女の子』' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはOVERFLOWのグループ説明ページです。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/about/' },
        { hid: 'og:title', property: 'og:title', content: 'ABOUT｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。こちらはOVERFLOWのグループ説明ページです。' }
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
.group__desc {
  margin-top: 2rem;

  &__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  &__text {
    margin-top: 2rem;
  }

  &__content {
    margin-top: 6rem;

    &__concept {
      display: block;
      margin-bottom: 4rem;
      text-align: center;
      font-family: 'Shippori Mincho B1', serif;
      font-size: 3rem;
      letter-spacing: 0.725rem;
      text-indent: 0.725rem;
    }

    &__text {
      font-family: 'Shippori Mincho B1', serif;
      font-size: 1.8rem;

      span {
        display: block;
        margin-top: 4rem;
        line-height: 2;
        text-align: center;
        letter-spacing: 0.325rem;
        text-indent: 0.325rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .profile {
    .l-breadcrumb {
      margin-top: 12rem;
    }
  }

  .group__desc {
    margin-top: 2rem;
  }

  .group__desc__content {
    margin-top: 12rem;
  }
}
</style>
