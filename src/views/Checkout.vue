<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper :current-step="currentStep" />
    <section class="form-panel">
      <div class="form-panel__container">
        <form class="form-panel__container__form">
          <router-view
            :initial-form-data="formData"
            @formOneDataUpdate="formOneDataUpdate"
            @formTwoDataUpdate="formTwoDataUpdate"
            @formThreeDataUpdate="formThreeDataUpdate"
          />
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
        v-if="currentStep !== 3"
        class="btn btn-next"
        :class="{
          'first-step': currentStep === 1,
        }"
        @click.stop.prevent="nextStep"
      >
        下一步
      </button>
      <modal v-else name="example" class="btn btn-next last-step"
        >確認下單</modal
      >
    </section>
  </main>
</template>

<script>
import VModal from 'vue-js-modal'
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
        delivery: 'standard',
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

      if (this.currentStep === 2) {
        this.$router.push('/checkout/step2')
      }
      if (this.currentStep >= 3) {
        this.currentStep = 3
        this.$router.push('/checkout/step3')
      }
    },
    prevStep() {
      this.currentStep--
      if (this.currentStep === 2) {
        this.$router.push('/checkout/step2')
      }

      if (this.currentStep <= 1) {
        this.currentStep = 1
        this.$router.push('/checkout/step1')

        return
      }
    },
    formOneDataUpdate(formOneData) {
      this.formData.title = formOneData.title
      this.formData.title = formOneData.title
      this.formData.name = formOneData.name
      this.formData.phone = formOneData.phone
      this.formData.email = formOneData.email
      this.formData.city = formOneData.city
      this.formData.address = formOneData.address
    },
    formTwoDataUpdate(formTwoData) {
      this.formData.delivery = formTwoData.delivery
      this.formData.deliveryCost = formTwoData.deliveryCost
    },
    formThreeDataUpdate(formThreeData) {
      this.formData.cardName = formThreeData.cardName
      this.formData.cardNumber = formThreeData.cardNumber
      this.formData.validity = formThreeData.validity
      this.formData.cvc = formThreeData.cvc
    },
  },
}
</script>
