<template>
  <section class="stepper">
    <div class="stepper__container">
      <div
        class="stepper__container__step"
        v-for="step in steps"
        :key="step.id"
        :class="step.status"
      >
        <div class="stepper__container__step--circle-container"></div>
        <div class="stepper__container__step--label-container">
          {{ step.title }}
        </div>
        <span class="stepper__container__step--connect-line"></span>
      </div>
    </div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'Stepper',
  props: {
    currentStep: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      steps: [
        {
          id: uuidv4(),
          title: '寄送地址',
          status: 'initial',
        },
        {
          id: uuidv4(),
          title: '運送方式',
          status: '',
        },
        {
          id: uuidv4(),
          title: '運送方式',
          status: '',
        },
      ],
    }
  },
}
</script>
