<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper />
  </main>
</template>

<script>
import Stepper from './../components/Stepper'

export default {
  name: 'Checkout',
  components: {
    Stepper,
  },
}
</script>
