<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper :current-step="currentStep" />
    <section class="form-panel">
      <div class="form-panel__container">
        <form class="form-panel__container__form">
          <router-view />
        </form>
      </div>
    </section>
    <Cart :delivery-cost="formData.deliveryCost" />
    <section class="button">
      <button
        class="btn btn-prev"
        :class="{
          'first-step': currentStep === 1,
          'last-step': currentStep === 3,
        }"
        @click.stop.prevent="prevStep"
      >
        上一步
      </button>
      <button
        class="btn btn-next"
        :class="{
          'first-step': currentStep === 1,
          'last-step': currentStep === 3,
        }"
        @click.stop.prevent="nextStep"
      >
        {{ currentStep | buttonNext }}
      </button>
    </section>
  </main>
</template>

<script>
import Stepper from './../components/Stepper'
import Cart from './../components/Cart'

export default {
  name: 'Checkout',
  components: {
    Stepper,
    Cart,
  },
  data() {
    return {
      currentStep: 1,
      formData: {
        title: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        delivery: '',
        deliveryCost: 0,
        cardName: '',
        cardNumber: '',
        validity: '',
        cvc: '',
      },
    }
  },
  methods: {
    nextStep() {
      this.currentStep++
      if (this.currentStep >= 3) {
        this.currentStep = 3
      }
    },
    prevStep() {
      this.currentStep -= 1
      if (this.currentStep <= 1) {
        this.currentStep = 1
        return
      }
    },
  },
  filters: {
    buttonNext(value) {
      return value === 3 ? '確認下單' : '下一步'
    },
  },
}
</script>
