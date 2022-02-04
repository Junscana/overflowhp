<template>
  <section class="member">
    <h2 class="member__title fontUppercase">member</h2>
    <ul class="member__list">
      <li v-for="(memberItem, index) in filteredMemberList" :key="index" class="member__list__item" :class="memberItem.id">
        <p>{{ memberItem.isShow }}</p>
        <nuxt-link :to="memberItem.url">
          <dl class="member__list__item__inner">
            <dd class="member__list__item__inner__img">
              <img :src="memberItem.src" :alt="memberItem.alt">
            </dd>
            <dt class="member__list__item__inner__name">{{ memberItem.name }}</dt>
          </dl>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LayoutMember',
  props: {
    nishina: {
      type: String,
      default: 'show'
    },
    kanzaki: {
      type: String,
      default: 'show'
    },
    yuduki: {
      type: String,
      default: 'show'
    },
    honda: {
      type: String,
      default: 'show'
    },
    miyato: {
      type: String,
      default: 'show'
    },
    tachibana: {
      type: String,
      default: 'show'
    }
  },
  data () {
    return {
      memberList: [
        {
          name: '本多 あおい',
          src: require('~/assets/images/member/honda_square.jpg'),
          alt: '本多あおいのアー写',
          url: '/profile/member/honda/',
          id: 'honda',
          display: this.honda
        },
        {
          name: '柚月 みほ',
          src: require('~/assets/images/member/yuduki_square.jpg'),
          alt: '柚月みほのアー写',
          url: '/profile/member/yuduki/',
          id: 'yuduki',
          display: this.yuduki
        }
      ],
      breadcrumbs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'profile',
          path: '/profile/'
        },
        {
          name: 'member',
          path: ''
        }
      ]
    }
  },
  computed: {
    filteredMemberList () {
      return this.memberList.filter((item) => {
        return item.display === 'show'
      })
    }
  }
}
</script>

<style lang="scss">
.member {
  margin-top: 4rem;
  padding: 0 1.5rem;

  &__title {
    font-size: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
    font-weight: bold;
  }
}

.member__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4rem;

  &__item {
    width: 48%;
    margin-top: 2rem;

    &__inner {
      position: relative;
    }

    &__inner__name {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.4);
      text-align: center;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &:first-of-type, &:nth-of-type(2) {
      margin-top: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .member {
    padding: 0;
  }

  .member__list {
    justify-content: flex-start;

    &__item {
      width: 32%;
      margin-left: 2%;

      &__inner__name {
        height: 30%;
        font-size: 1.8rem;
      }

      &:first-of-type,
      &:nth-of-type(4) {
        margin-left: 0;
      }

      &:nth-of-type(3) {
        margin-top: 0;
      }
    }
  }
}
</style>
