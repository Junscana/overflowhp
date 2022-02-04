<template>
  <div>
    <!-- <layout-header /> -->
    <Nuxt />
    <!-- <layout-footer /> -->
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.css";
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap');
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 1.2;
  cursor: default;
  color: #707070;
}

body.fixed {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

img {
  height: auto;
  width: 100%;
  vertical-align:top;
}

.pc {
  display: none;
}

/* main {
  padding-top: 2rem;
} */

main {
  margin-top: 6.4rem;
}

.page-body {
  margin-top: 4rem;
}

@media screen and (min-width: 768px) {
  .sp {
    display: none;
  }

  .pc {
    display: block;
  }

  /* 下層ページ共通ここから */
  .page-body {
    max-width: 100rem;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
  }
  /* 下層ページ共通ここまで */
}

.u-mtS {
  margin-top: 2rem !important;
}

.u-mtM {
  margin-top: 4rem !important;
}

.u-mtL {
  margin-top: 6rem !important;
}

.u-mtXL {
  margin-top: 8rem !important;
}

.u-mtXXL {
  margin-top: 10rem !important;
}

.text-c {
  text-align: center !important;
}

.fontUppercase {
  text-transform: uppercase;
}

.fontCapitalize {
  text-transform: capitalize;
}

.title-ul {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    display: block;
    width: 6rem;
    height: 0.2rem;
    border-radius: 1rem;
    // background-color: #FA70B5;
    // background-color: #fbb2d2;
    background-color: #fa89b9;
  }

  &::after {
    content: '';
    display: block;
    width: 1.4rem;
    height: 0.2rem;
    margin-left: 0.4rem;
    border-radius: 1rem;
    // background-color: #FA70B5;
    background-color: #fa89b9;
  }
}

.page-contents {
  margin: 0 1.5rem;
}
</style>
