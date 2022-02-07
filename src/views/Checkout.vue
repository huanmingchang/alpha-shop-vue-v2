<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper />
    <section class="form-panel">
      <div class="form-panel__container">
        <form class="form-panel__container__form">
          <router-view />
        </form>
      </div>
    </section>
    <Cart :deliveryCost="formData.deliveryCost" />
    <section class="button">
      <button class="btn btn-prev first-step">上一步</button>
      <button class="btn btn-next first-step">下一步</button>
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
}
</script>
