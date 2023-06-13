<template>
  <div id="accordion-collapse" class="custom-accordion">
    <template
      v-for="(section, index) in Object.keys(bindValue).slice(0, Object.keys(bindValue).length - 1)"
      :key="index"
    >
      <h2 id="accordion-collapse-heading-2">
        <button
          data-id="2"
          @click="outerAccordionToggle(index)"
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="{ 'text-gray-900': accordionOpenId == index }"
          aria-expanded="false"
        >
          <span class="capitalize">{{ section }}</span>
          <div class="flex gap-4">
            <ToggleVue v-model="bindValue[section].show" />
            <svg
              class="w-6 h-6 shrink-0"
              :class="{ 'rotate-180': accordionOpenId == index }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" :class="{ hidden: accordionOpenId != index }">
        <div class="p-5 border border-gray-200 dark:border-gray-700">
          <div
            v-for="(item, index) in Object.keys(bindValue[section]).slice(1)"
            class="pb-4"
            :key="index"
          >
            <div>
              <label
                for="email"
                class="mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize flex justify-between items-center"
              >
                <span>
                  {{ item }}
                </span>

                <span>
                  <ToggleVue v-model="bindValue[section][item].show" />
                </span>
              </label>
              <div v-if="bindValue[section][item].type == 'text'">
                <input
                  type="text"
                  :name="item"
                  :id="item"
                  v-model="bindValue[section][item].value"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  :placeholder="`Please enter ${item}`"
                />
              </div>
              <div v-if="bindValue[section][item].type == 'url'">
                <InputWithFileUploader
                  v-model="bindValue[section][item].value"
                  :id="`section-image-${section}-${item}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        @click="outerAccordionToggle(Object.keys(bindValue).length - 1)"
        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        :class="{ 'text-gray-900': accordionOpenId == Object.keys(bindValue).length - 1 }"
        aria-expanded="true"
      >
        <span class="capitalize">{{
          Object.keys(bindValue)[Object.keys(bindValue).length - 1]
        }}</span>
        <div class="flex gap-4">
          <ToggleVue
            v-model="bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]].show"
          />
          <svg
            class="w-6 h-6 shrink-0"
            :class="{ 'rotate-180': accordionOpenId == Object.keys(bindValue).length - 1 }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-1"
      :class="{ hidden: accordionOpenId != Object.keys(bindValue).length - 1 }"
    >
      <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <!-- Nested accordion -->
        <div id="accordion-nested-collapse" class="custom-accordion">
          <template
            v-for="(section, index) in Object.keys(
              bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]]
            ).slice(1)"
            :key="index"
          >
            <h2 id="accordion-nested-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                @click="innerAccordionToggle(index)"
                :class="{ 'text-gray-900': innerAccordionOpenId == index }"
              >
                <span class="capitalize">{{ section }}</span>
                <div class="flex gap-4">
                  <ToggleVue
                    v-model="
                      bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][section]
                        .show
                    "
                  />
                  <svg
                    class="w-6 h-6 shrink-0"
                    :class="{ 'rotate-180': innerAccordionOpenId == index }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </h2>
            <div
              id="accordion-nested-collapse-body-1"
              :class="{ hidden: innerAccordionOpenId != index }"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div
                  v-for="(item, index) in Object.keys(
                    bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][section]
                  ).slice(1)"
                  class="pb-4"
                  :key="index"
                >
                  <div
                    v-if="
                      bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][section][
                        item
                      ].type == 'text'
                    "
                  >
                    <label
                      :for="item"
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize flex justify-between items-center"
                    >
                      <span>
                        {{ item }}
                      </span>

                      <span>
                        <ToggleVue
                          v-model="
                            bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][
                              section
                            ][item].show
                          "
                        />
                      </span>
                    </label>
                    <input
                      type="text"
                      :name="item"
                      :id="item"
                      v-model="
                        bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][
                          section
                        ][item].value
                      "
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      :placeholder="`Please enter ${item}`"
                    />
                  </div>
                  <div v-else>
                    <label
                      :for="item"
                      class="mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize flex justify-between items-center"
                    >
                      <span>
                        {{ item }}
                      </span>

                      <span>
                        <ToggleVue
                          v-model="
                            bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][
                              section
                            ][item].show
                          "
                        />
                      </span>
                    </label>
                    <Chips
                      v-model="
                        bindValue[Object.keys(bindValue)[Object.keys(bindValue).length - 1]][
                          section
                        ][item].value
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <!-- End: Nested accordion -->
      </div>
    </div>
  </div>
</template>

<script>
import ToggleVue from '../components/Toggle.vue'
import Chips from './Chips.vue'
import InputWithFileUploader from './FileUploader/InputWithFileUploader.vue'
export default {
  components: {
    ToggleVue,
    Chips,
    InputWithFileUploader
  },
  props: { modelValue: null },
  computed: {
    bindValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  data() {
    return {
      accordionOpenId: 0,
      innerAccordionOpenId: -1
    }
  },
  methods: {
    outerAccordionToggle(id) {
      this.toggleAccordion(id)
    },
    innerAccordionToggle(id) {
      this.toggleInnerAccordion(id)
    },
    toggleAccordion(id) {
      if (this.accordionOpenId == id) {
        this.accordionOpenId = -1
      } else {
        this.accordionOpenId = id
      }
    },
    toggleInnerAccordion(id) {
      if (this.innerAccordionOpenId == id) {
        this.innerAccordionOpenId = -1
      } else {
        this.innerAccordionOpenId = id
      }
    }
  }
}
</script>
