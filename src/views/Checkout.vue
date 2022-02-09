<template>
  <main class="main">
    <div class="main__title">結帳</div>

    <!-- Stepper -->
    <Stepper :current-step="currentStep" />

    <!-- Form -->
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

    <!-- Cart -->
    <Cart :delivery-cost="formData.deliveryCost" @handleTotal="handleTotal" />

    <!-- Buttons -->
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
      <button
        v-else
        data-toggle="modal"
        data-target="#confirmOrder"
        class="btn btn-next last-step"
      >
        確認下單
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="confirmOrder"
        tabindex="-1"
        role="dialog"
        aria-labelledby="confirmOrder"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- 用 v-for 呈現 formData 內容，顯示在 modal 上 -->
              <p>{</p>
              <p v-for="(value, name) in formData" :key="name">
                {{ name }} : {{ value }}
              </p>
              <p>}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary">確認</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Stepper from './../components/Stepper'
import Cart from './../components/Cart'

const STORAGE_KEY = 'current-step'
const FORM_DATA = 'form-data'

export default {
  name: 'Checkout',
  components: {
    Stepper,
    Cart,
  },
  data() {
    return {
      currentStep: JSON.parse(localStorage.getItem(STORAGE_KEY)),
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
        totalPrice: 0,
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
      this.formData = {
        ...this.formData,
        ...formOneData,
      }
      localStorage.setItem(FORM_DATA, JSON.stringify(this.formData))
    },
    formTwoDataUpdate(formTwoData) {
      this.formData = {
        ...this.formData,
        ...formTwoData,
      }
      localStorage.setItem(FORM_DATA, JSON.stringify(this.formData))
    },
    formThreeDataUpdate(formThreeData) {
      this.formData = {
        ...this.formData,
        ...formThreeData,
      }
      localStorage.setItem(FORM_DATA, JSON.stringify(this.formData))
    },
    handleTotal(total) {
      this.formData.totalPrice = total
    },
  },
  updated() {
    // 控制直接輸入網址所導向的頁面
    if (this.$route.name === 'checkout-step1') {
      this.currentStep = 1
    }

    if (this.$route.name === 'checkout-step2') {
      this.currentStep = 2
    }

    if (this.$route.name === 'checkout-step3') {
      this.currentStep = 3
    }
  },
  created() {
    this.formData = JSON.parse(localStorage.getItem(FORM_DATA)) || this.formData
    this.currentStep = JSON.parse(localStorage.getItem(STORAGE_KEY)) || 1
  },
  watch: {
    // 如果 currentStep 有變化，儲存在 localStorage 裡面
    currentStep: {
      handler: function () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentStep))
      },
    },
  },
}
</script>
