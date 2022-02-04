<template>
  <main class="info">
    <!-- <page-title title="information" />
    <div class="page-body">
      <section class="info__sec">
        <h2 class="info__title">物販・特典会レギュレーション</h2>
        <div class="info__content">
          <p class="info__desc">いつもOVERFLOWへの応援ありがとうございます。<br>特典会レギュレーションについては下記をご確認ください。</p>
          <div class="info__item">
            <img src="@/assets/images/info/goods_menu.jpeg" alt="グッズレギュレーション">
          </div>
          <div class="info__item">
            <img src="@/assets/images/info/goods_ticket.jpeg" alt="グッズ購入特典券">
          </div>
        </div>
      </section>
      <section class="info__sec">
        <h2 class="info__title">イベントに関する注意事項</h2>
        <div class="info__content">
        <p class="info__desc">また、皆様に楽しくイベントやライブに参加して頂くために以下の注意事項をお守りください。</p>
          <div class="info__item">
            <img src="@/assets/images/info/caution_event.jpeg" alt="イベント参加における注意事項">
          </div>
          <div class="info__item">
            <img src="@/assets/images/info/caution_tokuten.jpeg" alt="特典会注意事項">
          </div>
        </div>
      </section>
    </div>
    <layout-btn-default url="/" text="TOPに戻る" />
    <breadcrumb :breadcrumbs="breadcrumbs" /> -->
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'イベント参加に関するご案内',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, イベント参加, 注意事項' },
        { hid: 'description', name: 'description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWの物販・特典会レギュレーションとイベントに参加される際の注意事項に関する情報を掲載しています。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/information/' },
        { hid: 'og:title', property: 'og:title', content: 'イベント参加に関するご案内｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWとは『儚い女の子』をグループコンセプトとしたアイドルです。OVERFLOWの物販・特典会レギュレーションとイベントに参加される際の注意事項に関する情報を掲載しています。' }
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
          name: 'information',
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

.info {
  &__sec {
    margin-top: 4rem;
    padding: 0 1.5rem;

    &+& {
      margin-top: 6rem;
    }
  }

  &__title {
    font-size: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
    font-weight: bold;
  }

  &__content {
    margin-top: 4rem;
  }

  &__desc {
    margin-top: 4rem;
  }

  &__item {
    margin-top: 2rem;
  }
}

@media screen and (min-width: 768px) {
}
</style>
