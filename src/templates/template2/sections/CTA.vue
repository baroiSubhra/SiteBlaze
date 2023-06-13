<template>
  <section class="center template-section w-full" id="cta" v-if="data.show">
    <div class="w-full">
      <div class="center pb-4">
        <h1 class="mb-4 text-center">{{ data.title.value }}</h1>
      </div>
      <div class="w-full">
        <div class="w-full grid gap-4 md:grid-cols-2 pb-4">
          <div class="w-full" v-if="data.input1.show">
            <label for="email" class="lbl">{{ data.input1.value }}</label>
            <input
              type="text"
              name="email"
              id="email"
              v-model="email"
              class="inpt"
              :placeholder="data.input1.placeholder"
            />
          </div>
          <div v-if="data.input2.show">
            <label for="phoneno" class="lbl">{{ data.input2.value }}</label>
            <input
              type="text"
              name="phoneno"
              id="phoneno"
              v-model="phoneno"
              class="inpt"
              :placeholder="data.input2.placeholder"
            />
          </div>
        </div>
        <div class="pb-4" v-if="data.input3.show">
          <label for="querry" class="lbl">{{ data.input3.value }}</label>
          <textarea
            name="querry"
            id="querry"
            v-model="querry"
            rows="4"
            class="inpt"
            :placeholder="data.input3.placeholder"
          ></textarea>
        </div>
        <div class="center" v-if="data.ctaButton.show">
          <Button @click="submitData" :loading="sendingData" :label="data.ctaButton.value" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createCTAQuerry } from '@/api/apis'
import Button from '../components/Button.vue'
export default {
  components: {
    Button
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      querry: '',
      phoneno: '',
      email: '',
      sendingData: false
    }
  },
  methods: {
    generatePayload() {
      return {
        input1: this.email,
        input2: this.phoneno,
        input3: this.querry
      }
    },
    resetData() {
      this.email = ''
      this.phoneno = ''
      this.querry = ''
    },
    async submitData() {
      this.sendingData = true
      const payload = this.generatePayload()
      const resp = await createCTAQuerry(payload)
      if (resp.success) {
        this.resetData()
      }
      this.sendingData = false
    }
  }
}
</script>
