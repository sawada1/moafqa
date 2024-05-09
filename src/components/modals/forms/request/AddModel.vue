<template>
  <div
    class="modal fade"
    id="kt_modal_add_brand"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div
          class="modal-header d-flex align-items-center"
          id="kt_modal_add_customer_header"
        >
          <!--begin::Modal title-->
          <h2 class="fw-bold m-0">Add a brand</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_brand_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_brand_header"
              data-kt-scroll-wrappers="#kt_modal_add_brand_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"
                  >first batch</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="first_batch">
                  <el-input
                    v-model="formData.first_batch"
                    type="number"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span v-if="errors.first_batch" class="error-from-server">{{
                      errors.first_batch
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">last batch</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="last_batch">
                  <el-input
                    v-model="formData.last_batch"
                    type="number"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span v-if="errors.last_batch" class="error-from-server">{{
                      errors.last_batch
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">support</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="support">
                  <el-input
                    v-model="formData.support"
                    type="number"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span v-if="errors.support" class="error-from-server">{{
                      errors.support
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  instalment duration
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="instalment_duration">
                  <el-input
                    v-model="formData.instalment_duration"
                    type="number"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span
                      v-if="errors.instalment_duration"
                      class="error-from-server"
                      >{{ errors.instalment_duration }}</span
                    >
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  insurance percentage
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="first_batch">
                  <el-input
                    v-model="formData.insurance_percentage"
                    type="number"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span
                      v-if="errors.insurance_percentage"
                      class="error-from-server"
                      >{{ errors.insurance_percentage }}</span
                    >
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> client </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="client_id">
                  <el-select
                    v-if="options1"
                    v-model="formData.client_id"
                    placeholder="Select"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="item in options1"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.client_id" class="error-from-server">{{
                      errors.client_id
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> offer </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="offer_id">
                  <el-select
                    v-if="options2"
                    v-model="formData.offer_id"
                    placeholder="Select"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.offer_id" class="error-from-server">{{
                      errors.offer_id
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->
          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_customer_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, watch } from "vue";
import { hideModal } from "@/core/helpers/modal";
import { countries } from "@/core/data/countries";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { genFileId } from "element-plus";
import ApiService from "@/core/services/ApiService";
import { useRequestStore } from "@/stores/request";
export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: ["func"],
  setup(props) {
    const store = useRequestStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    let loading = ref(store.loading);
    const valueId = ref();
    const formData = ref({
      first_batch: "",
      last_batch: "",
      support: "",
      instalment_duration: "",
      insurance_percentage: "",
      client_id: "",
      offer_id: "",
    });

    onMounted(() => {});
    const rules = ref({
      first_batch: [
        {
          required: true,
          message: "first batch is required",
          trigger: "change",
        },
      ],
      last_batch: [
        {
          required: true,
          message: "last batch is required",
          trigger: "change",
        },
      ],
      support: [
        {
          required: true,
          message: "support is required",
          trigger: "change",
        },
      ],
      client_id: [
        {
          required: true,
          message: "client is required",
          trigger: "change",
        },
      ],
      offer_id: [
        {
          required: true,
          message: "offer is required",
          trigger: "change",
        },
      ],
      instalment_duration: [
        {
          required: true,
          message: "instalment duration is required",
          trigger: "change",
        },
      ],
      insurance_percentage: [
        {
          required: true,
          message: "insurance percentage is required",
          trigger: "change",
        },
      ],
    });

    let options1 = ref();
    let options2 = ref();

    const getClients = async () => {
      ApiService.get(`client`)
        .then(({ data }) => {
          options1.value = data.data;
        })
        .catch(({ response }) => {});
    };
    const getOffers = async () => {
      ApiService.get(`offers`)
        .then(({ data }) => {
          options2.value = data.data;
        })
        .catch(({ response }) => {});
    };

    getClients();
    getOffers();

    onMounted(() => {});

    let errors = ref();
    const submit = async () => {
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid: boolean) => {
        if (valid) {
          loading.value = true;
          store.create(formData.value, addCustomerModalRef.value);
          errors.value = store.errors ? store.errors : [];
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    watch([() => store.errors, () => store.loading], ([newVal, val2]) => {
      errors.value = newVal;
      loading.value = val2;
    });

    return {
      formData,
      rules,
      submit,
      errors,
      formRef,
      loading,
      options1,
      options2,
      addCustomerModalRef,
      getAssetPath,
      countries,
      valueId,
    };
  },
});
</script>
