<template>
  <div class="schedule">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=b3ZlcmZsb3docEBnbWFpbC5jb20&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%230B8043"
      style="border: 0"
      class="sp"
      width="100%"
      height="500"
      frameborder="0"
      scrolling="no"
    />
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=b3ZlcmZsb3docEBnbWFpbC5jb20&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%230B8043"
      style="border: 0"
      class="pc"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    />
  </div>
</template>

<script>
export default {
  name: 'LayoutSchedule'
}
</script>

<style lang="scss">
.schedule {
  margin: 0 1.5rem;
}

iframe {
  position: relative;
  z-index: 0;
}

@media screen and (min-width: 768px) {
  .schedule {
    margin: 0;
  }
}
</style>
