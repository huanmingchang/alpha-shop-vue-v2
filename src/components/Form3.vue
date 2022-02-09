<template>
  <div class="form-panel__container__form__form-part">
    <div class="form-panel__container__form__form-part--form-title">
      付款資訊
    </div>
    <div class="form-panel__container__form__form-part__forms step-3">
      <div
        class="form-panel__container__form__form-part__forms__form-row card-name"
      >
        <label for="">持卡人姓名</label>
        <input
          id="cardholder-name"
          type="text"
          placeholder="John Doe"
          required
          v-model="formData.cardName"
        />
      </div>
      <div
        class="form-panel__container__form__form-part__forms__form-row card-number"
      >
        <label for="">卡號</label>
        <input
          id="creditcard-number"
          type="text"
          placeholder="1111 2222 3333 4444"
          required
          v-model="formData.cardNumber"
        />
      </div>
      <div
        class="form-panel__container__form__form-part__forms__form-row card-validity"
      >
        <label for="">有效期限</label>
        <input
          id="creditcard-validity"
          type="text"
          placeholder="MM/YY"
          required
          v-model="formData.validity"
        />
      </div>
      <div class="form-panel__container__form__form-part__forms__form-row cvc">
        <label for="">CVC / CCV</label>
        <input
          id="creditcard-cvc"
          type="text"
          placeholder="123"
          required
          v-model="formData.cvc"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form3',
  props: {
    initialFormData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        validity: '',
        cvc: '',
      },
    }
  },
  methods: {
    fetchFormData() {
      this.formData = {
        ...this.formData,
        ...this.initialFormData,
      }
    },
  },
  created() {
    this.fetchFormData()
  },
  watch: {
    formData: {
      handler: function (formThreeData) {
        this.$emit('formThreeDataUpdate', formThreeData)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
