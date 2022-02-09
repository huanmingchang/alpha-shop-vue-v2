<template>
  <section class="stepper">
    <div class="stepper__container">
      <div
        v-for="step in steps"
        :key="step.id"
        class="stepper__container__step"
        :class="step.status"
      >
        <div class="stepper__container__step--circle-container"></div>
        <div class="stepper__container__step--label-container">
          {{ step.title }}
        </div>
        <span
          class="stepper__container__step--connect-line"
          :class="{
            'last-connect-line': step.id === steps[steps.length - 1].id,
          }"
        ></span>
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
  watch: {
    currentStep: {
      handler: function () {
        if (this.currentStep === 1) {
          this.steps[0].status = 'initial'
        }

        if (this.currentStep === 2) {
          this.steps[0].status = 'checked'
          this.steps[1].status = 'active'
        }

        if (this.currentStep === 3) {
          this.steps[0].status = 'checked'
          this.steps[1].status = 'checked'
          this.steps[2].status = 'active'
        }
      },
      deep: true,
    },
  },
}
</script>
