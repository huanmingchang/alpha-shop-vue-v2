<template>
  <div class="form-panel__container__form__form-part">
    <div class="form-panel__container__form__form-part--form-title">
      寄送地址
    </div>
    <div class="form-panel__container__form__form-part__forms step-1">
      <div
        class="form-panel__container__form__form-part__forms__form-row title"
      >
        <label for="">稱謂</label>
        <div
          class="form-panel__container__form__form-part__forms__form-row__select-wrapper"
        >
          <select name="gender" id="gender" required v-model="formData.title">
            <option value="" selected disabled>請選擇稱謂</option>
            <option value="male">先生</option>
            <option value="female">小姐</option>
          </select>
        </div>
      </div>
      <div class="form-panel__container__form__form-part__forms__form-row name">
        <label for="">姓名</label>
        <input
          id="customer-name"
          type="text"
          placeholder="請輸入姓名"
          required
          v-model="formData.name"
        />
      </div>
      <div
        class="form-panel__container__form__form-part__forms__form-row phone"
      >
        <label for="">電話</label>
        <input
          id="customer-phone"
          type="text"
          placeholder="請輸入行動電話"
          required
          v-model="formData.phone"
        />
      </div>
      <div
        class="form-panel__container__form__form-part__forms__form-row email"
      >
        <label for="">Email</label>
        <input
          id="customer-email"
          type="text"
          placeholder="請輸入電子郵件"
          required
          v-model="formData.email"
        />
      </div>
      <div class="form-panel__container__form__form-part__forms__form-row city">
        <label for="">縣市</label>
        <div
          class="form-panel__container__form__form-part__forms__form-row__select-wrapper"
        >
          <select name="city" id="city" required v-model="formData.city">
            <option value="" selected disabled>請選擇縣市</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="form-panel__container__form__form-part__forms__form-row address"
      >
        <label for="">地址</label>
        <input
          id="customer-address"
          type="text"
          placeholder="請輸入地址"
          v-model="formData.address"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form1',
  props: {
    initialFormData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cities: [
        '台北市',
        '新北市',
        '桃園市',
        '新竹市',
        '台中市',
        '彰化縣',
        '嘉義縣',
        '台南市',
        '高雄市',
      ],
      formData: {
        title: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
      },
    }
  },
  methods: {
    fetchFormData() {
      this.formData.title = this.initialFormData.title
      this.formData.name = this.initialFormData.name
      this.formData.phone = this.initialFormData.phone
      this.formData.email = this.initialFormData.email
      this.formData.city = this.initialFormData.city
      this.formData.address = this.initialFormData.address
    },
  },
  created() {
    this.fetchFormData()
  },
  watch: {
    formData: {
      handler: function (formOneData) {
        this.$emit('formOneDataUpdate', formOneData)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
