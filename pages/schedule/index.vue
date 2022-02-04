<template>
  <main>
    <section>
      <page-title title="schedule" />
      <div class="page-body">
        <layout-schedule />
      </div>
    </section>
    <breadcrumb :breadcrumbs="breadcrumbs" />
  </main>
</template>

<script>
import LayoutSchedule from '~/components/LayoutSchedule.vue'
export default {
  components: { LayoutSchedule },
  head () {
    return {
      title: 'SCHEDULE',
      meta: [
        { hid: 'keyword', name: 'keyword', content: 'OVERFLOW, オフロウ, アイドル, スケジュール, イベント, ライブ, メディア' },
        { hid: 'description', name: 'description', content: 'OVERFLOWのスケジュールを掲載してます。' },
        { hid: 'og:url', property: 'og:url', content: 'http://overflowhp.com/schedule/' },
        { hid: 'og:title', property: 'og:title', content: 'SCHEDULE｜OVERFLOWオフィシャルサイト' },
        { hid: 'og:description', property: 'og:description', content: 'OVERFLOWのスケジュールを掲載してます。' }
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
          name: 'schedule',
          path: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
