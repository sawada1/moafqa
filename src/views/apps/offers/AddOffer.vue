<template>
  <div>
    <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">
      <!--begin::Modal body-->
      <div class="modal-body py-10 px-lg-17">
        <!--begin::Scroll-->
        <div class="scroll-y me-n7 pe-7" id="kt_modal_add_brand_scroll" data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_modal_add_brand_header" data-kt-scroll-wrappers="#kt_modal_add_brand_scroll"
          data-kt-scroll-offset="300px">

          <div class="row">
            <!--begin::Input group-->
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-3">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> title ar </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="title_ar">
                <el-input v-model="formData.title_ar" type="text" placeholder="" />
                <div v-if="errors">
                  <span v-if="errors.title_ar" class="error-from-server">{{
                    errors.title_ar
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="col-12 col-xl-6 col-lg-6 fv-row ">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> title en </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="title_en">
                <el-input v-model="formData.title_en" type="text" placeholder="" />
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
            <div class="col-12 col-xl-12 col-lg-12 fv-row mb-3">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2">description_ar</label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="description_ar">
                <el-input v-model="formData.description_ar" type="textarea" placeholder="" />
                <div v-if="errors">
                  <span v-if="errors.description_ar" class="error-from-server">{{
                    errors.description_ar
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <div class="col-12 col-xl-12 col-lg-12 fv-row mb-3">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2">description_en</label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="description_en">
                <el-input v-model="formData.description_en" type="textarea" placeholder="" />
                <div v-if="errors">
                  <span v-if="errors.description_en" class="error-from-server">{{
                    errors.description_en
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2">
                start date
              </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="instalment_duration">
                <el-input v-model="formData.start_date" type="date" placeholder="" />
                <div v-if="errors">
                  <span v-if="errors.start_date" class="error-from-server">{{ errors.start_date
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2">
                expiry date
              </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="first_batch">
                <el-input v-model="formData.expiry_date" type="date" placeholder="" />
                <div v-if="errors">
                  <span v-if="errors.expiry_date" class="error-from-server">{{ errors.expiry_date
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> recived support </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="recived_support">
                <el-radio-group v-model="formData.recived_support" class="ml-4">
                  <el-radio :value="true" size="large"> yes </el-radio>
                  <el-radio :value="false" size="large">no</el-radio>
                </el-radio-group>
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
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> fund company </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="fund_company_id">
                <el-select v-if="options1" v-model="formData.fund_company_id" placeholder="Select" style="width: 100%">
                  <el-option v-for="item in options1" :key="item.id" :label="item.name_ar" :value="item.id" />
                </el-select>
                <div v-if="errors">
                  <span v-if="errors.fund_company_id" class="error-from-server">{{
                    errors.fund_company_id
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> agency </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="agency_id">
                <el-select v-if="options2" v-model="formData.agency_id" placeholder="Select" style="width: 100%">
                  <el-option v-for="item in options2" :key="item.id" :label="item.name_ar" :value="item.id" />
                </el-select>
                <div v-if="errors">
                  <span v-if="errors.agency_id" class="error-from-server">{{
                    errors.agency_id
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> brands </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="brands">
                <el-select v-if="options3" v-model="formData.brands" placeholder="Select" style="width: 100%">
                  <el-option v-for="item in options3" :key="item.id" :label="item.name_ar" :value="item.id" />
                </el-select>
                <div v-if="errors">
                  <span v-if="errors.brands" class="error-from-server">{{
                    errors.brands
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <div class="col-12 col-xl-6 col-lg-6 fv-row mb-7">
              <!--begin::Label-->
              <label class="required fs-6 fw-semibold mb-2"> models </label>
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="models">
                <el-select v-if="options4" v-model="formData.models" placeholder="Select" style="width: 100%">
                  <el-option v-for="item in options4" :key="item.id" :label="item.name_ar" :value="item.id" />
                </el-select>
                <div v-if="errors">
                  <span v-if="errors.models" class="error-from-server">{{
                    errors.models
                    }}</span>
                </div>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->
          </div>

        </div>
        <!--end::Scroll-->
      </div>
      <!--end::Modal body-->
      <!--begin::Modal footer-->
      <div class="modal-footer flex-center">
        <!--begin::Button-->
        <button type="reset" id="kt_modal_add_customer_cancel" class="btn btn-light me-3">
          Discard
        </button>
        <!--end::Button-->

        <!--begin::Button-->
        <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary" type="submit">
          <span v-if="!loading" class="indicator-label">
            Submit
            <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
          </span>
          <span v-if="loading" class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
        <!--end::Button-->
      </div>
      <!--end::Modal footer-->
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import ApiService from "@/core/services/ApiService";
import { useRequestStore } from "@/stores/request";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { defineComponent, ref, onMounted, watch } from "vue";

const store = useRequestStore();
const formRef = ref<null | HTMLFormElement>(null);
const addCustomerModalRef = ref<null | HTMLElement>(null);
let loading = ref(store.loading);
const valueId = ref();
const formData = ref({
  image: "",
  title_ar: "",
  title_en: "",
  description_ar: "",
  description_en: "",
  start_date: "",
  expiry_date: "",
  recived_support: "",
  fund_company_id: "",
  agency_id: "",
  brands: "",
  models: "",
  years: [],
});

onMounted(() => {});
const rules = ref({
  image: [
    {
      required: true,
      message: "image is required",
      trigger: "change",
    },
  ],
  title_ar: [
    {
      required: true,
      message: "arabic title is required",
      trigger: "change",
    },
  ],
  title_en: [
    {
      required: true,
      message: "english title is required",
      trigger: "change",
    },
  ],
  description_ar: [
    {
      required: true,
      message: "arabic description is required",
      trigger: "change",
    },
  ],
  description_en: [
    {
      required: true,
      message: "english description is required",
      trigger: "change",
    },
  ],
  start_date: [
    {
      required: true,
      message: "start date is required",
      trigger: "change",
    },
  ],
  expiry_date: [
    {
      required: true,
      message: "expiry date is required",
      trigger: "change",
    },
  ],
  recived_support: [
    {
      required: true,
      message: "recived support is required",
      trigger: "change",
    },
  ],
  fund_company_id: [
    {
      required: true,
      message: "fund company is required",
      trigger: "change",
    },
  ],
  agency_id: [
    {
      required: true,
      message: "agency is required",
      trigger: "change",
    },
  ],
  brands: [
    {
      required: true,
      message: "brands is required",
      trigger: "change",
    },
  ],
  models: [
    {
      required: true,
      message: "models is required",
      trigger: "change",
    },
  ],
  years: [
    {
      required: true,
      message: "years is required",
      trigger: "change",
    },
  ],
});

let options1 = ref();
let options2 = ref();
let options3 = ref();
let options4 = ref();

const getFunds = async () => {
  ApiService.get(`fund_companies`)
    .then(({ data }) => {
      options1.value = data.data;
    })
    .catch(({ response }) => {});
};
const getAgencies = async () => {
  ApiService.get(`agencies`)
    .then(({ data }) => {
      options2.value = data.data;
    })
    .catch(({ response }) => {});
};
const getBrands = async () => {
  ApiService.get(`brands`)
    .then(({ data }) => {
      options3.value = data.data;
    })
    .catch(({ response }) => {});
};
const getModels = async () => {
  ApiService.get(`models`)
    .then(({ data }) => {
      options4.value = data.data;
    })
    .catch(({ response }) => {});
};
getFunds();
getAgencies();
getBrands();
getModels();

onMounted(() => {
});

let errors = ref();
const submit = async () => {
  if (!formRef.value) {
    return;
  }
  formRef.value.validate(async (valid: boolean) => {
    // formData.value.brands.split(' ').map((ele) => { return parseInt(ele) });
    // formData.value.models.split(' ').map((ele) => { return parseInt(ele) });
    // console.log(typeof formData.value.brands);
    // console.log('arr', formData.value.brands);
    // console.log('arr', formData.value.models);
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
</script>


<style>
    .el-textarea__inner,
    textarea {
      resize: none;
    }
</style>
