<template>
  <div class="form-panel__container__form__form-part">
    <div class="form-panel__container__form__form-part--form-title">
      運送方式
    </div>
    <div class="form-panel__container__form__form-part__forms step-2">
      <div
        id="standard-delivery"
        class="form-panel__container__form__form-part__forms__radio-wrapper standard"
        data-delivery="standard"
        :class="{ checked: formData.delivery === 'standard' }"
      >
        <input
          type="radio"
          name="delivery"
          id="standard"
          value="standard"
          class="form-panel__container__form__form-part__forms__radio-wrapper--radio-btn standard"
          checked
          v-model="formData.delivery"
          @change="handleDelivery"
        />
        <label
          for="standard"
          class="form-panel__container__form__form-part__forms__radio-wrapper__container standard"
        >
          <div
            class="form-panel__container__form__form-part__forms__radio-wrapper__container__details standard"
          >
            <div
              class="form-panel__container__form__form-part__forms__radio-wrapper__container__details--option standard"
              data-standard
            >
              標準運送
            </div>
            <div
              class="form-panel__container__form__form-part__forms__radio-wrapper__container__details--freight standard"
            >
              免費
            </div>
          </div>
          <div
            class="form-panel__container__form__form-part__forms__radio-wrapper__container__time standard"
          >
            約 3~7 個工作天
          </div>
        </label>
      </div>
      <div
        id="dhl-delivery"
        class="form-panel__container__form__form-part__forms__radio-wrapper dhl"
        data-delivery="dhl"
        :class="{ checked: formData.delivery === 'dhl' }"
      >
        <input
          type="radio"
          name="delivery"
          id="dhl"
          value="dhl"
          class="form-panel__container__form__form-part__forms__radio-wrapper--radio-btn dhl"
          v-model="formData.delivery"
          @change="handleDelivery"
        />
        <label
          for="dhl"
          class="form-panel__container__form__form-part__forms__radio-wrapper__container dhl"
        >
          <div
            class="form-panel__container__form__form-part__forms__radio-wrapper__container__details dhl"
          >
            <div
              class="form-panel__container__form__form-part__forms__radio-wrapper__container__details--option dhl"
              data-dhl
            >
              DHL 貨運
            </div>
            <div
              class="form-panel__container__form__form-part__forms__radio-wrapper__container__details--freight dhl"
            >
              $500
            </div>
          </div>
          <div
            class="form-panel__container__form__form-part__forms__radio-wrapper__container__time dhl"
          >
            48 小時內送達
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form2',
  props: {
    initialFormData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        delivery: 'standard',
        deliveryCost: 0,
      },
    }
  },
  created() {
    this.fetchFormData()
  },
  methods: {
    fetchFormData() {
      this.formData = {
        ...this.formData,
        ...this.initialFormData,
      }
    },
    handleDelivery() {
      if (this.formData.delivery === 'standard') {
        this.formData.deliveryCost = 0
      }

      if (this.formData.delivery === 'dhl') {
        this.formData.deliveryCost = 500
      }
    },
  },
  watch: {
    formData: {
      handler: function (formTwoData) {
        this.$emit('formTwoDataUpdate', formTwoData)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
