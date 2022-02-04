<template>
  <transition name="modal" appear>
    <div class="modal__overlay">
      <div class="modal__overlay__close-btn" @click="closeModal">
        <div class="modal__overlay__close-btn__inner"></div>
      </div>
      <div class="modal__overlay__close-lay" @click="closeModal" />
      <div class="modal__window">
        <div style="overflow: hidden;">
          <div class="modal__content">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
})
</script>

<style lang="scss" scoped>
.modal {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    &__close-lay {
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: transparent;
    }
  }

  &__window {
    height: 60%;
    width: 84%;
    padding: 4rem 1.5rem;
    overflow-y: auto;
    background: rgb(255,245,255);
    background: linear-gradient(180deg, rgba(255,245,255,1) 0%, rgba(237,242,255,1) 100%);
    position: relative;
    z-index: 101;
  }

  &__content {
    height: 100%;
  }
}

.modal__overlay__close-btn  {
  display: block;
  height: 4rem;
  width: 4rem;
  position: fixed;
  top: 4rem;
  right: 1.5rem;

  &__inner {
    height: 100%;
    width: 100%;
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 0.2rem;
      width: 4rem;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transform: rotate(45deg);
    }

    &::after {
      content: '';
      display: block;
      height: 0.2rem;
      width: 4rem;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transform: rotate(-45deg);
    }
  }
}

// transition
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  .modal__overlay__close-btn {
    transition: opacity 0.4s, transform 0.4s;
  }

  .modal__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal__overlay__close-btn {
    opacity: 0;
    transform: translateY(-20px);
  }

  .modal__window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

@media screen and (min-width: 768px) {
  .modal__window {
    width: 30%;
  }
}
</style>
