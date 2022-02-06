<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper />
    <Cart />
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
}
</script>
