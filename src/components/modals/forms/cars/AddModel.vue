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
          <h2 class="fw-bold m-0">Add a car</h2>
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
        id="addFormCars"
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
                <label class="required fs-6 fw-semibold mb-2"> brand </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="brand_id">
                  <el-select
                    v-if="options1"
                    v-model="formData.brand_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options1"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.brand_id" class="error-from-server">{{
                      errors.brand_id
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> model </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="model_id">
                  <el-select
                    v-if="options2"
                    v-model="formData.model_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.model_id" class="error-from-server">{{
                      errors.model_id
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> submodel </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="sub_model_id">
                  <el-select
                    v-if="options3"
                    v-model="formData.sub_model_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options3"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span
                      v-if="errors.sub_model_id"
                      class="error-from-server"
                      >{{ errors.sub_model_id }}</span
                    >
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> color </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="color_ids">
                  <el-select
                    v-if="options4"
                    v-model="formData.color_ids"
                    multiple
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options4"
                      :key="item.id"
                      :label="item.name_ar"
                      :value="item.id"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.color_ids" class="error-from-server">{{
                      errors.color_ids
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> car body </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="car_body">
                  <el-select
                    v-if="options5"
                    v-model="formData.car_body"
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options5"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.car_body" class="error-from-server">{{
                      errors.car_body
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  fuel type
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="fuel_type">
                  <el-select
                    v-if="options6"
                    v-model="formData.fuel_type"
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options6"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span v-if="errors.fuel_type" class="error-from-server">{{
                      errors.fuel_type
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  gear shifter
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="gear_shifter">
                  <el-select
                    v-if="options7"
                    v-model="formData.gear_shifter"
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options7"
                      :key="item.value"
                      :label="item.name"
                      :value="item.value"
                    />
                  </el-select>
                  <div v-if="errors">
                    <span
                      v-if="errors.gear_shifter"
                      class="error-from-server"
                      >{{ errors.gear_shifter }}</span
                    >
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->

              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">price</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="price">
                  <el-input
                    v-model="formData.price"
                    type="number"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.price" class="error-from-server">{{
                    errors.price
                  }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">year</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="year">
                  <el-input
                    v-model="formData.year"
                    type="number"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.year" class="error-from-server">{{
                    errors.year
                  }}</span>
                </div>
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <!--begin::Input group-->

              <!--end::Input group-->
              <!--begin::Input group-->

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
              id="kt_modal_add_cars_cancel"
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
import { useCarsStore } from "@/stores/cars";
import ApiService from "@/core/services/ApiService";
import { object } from "yup";
import Item1 from "@/components/activity-timeline-items/Item1.vue";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: ["func"],
  setup(props) {
    const store = useCarsStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    let loading = ref(store.loading);
    const valueId = ref();
    const formData = ref({
      brand_id: "",
      model_id: "",
      color_ids: [],
      sub_model_id: "",
      car_body: "",
      fuel_type: "",
      gear_shifter: "",
      price: "",
      year: "",
    });

    let options1 = ref();
    let options2 = ref();
    let options3 = ref();
    let options4 = ref();
    let options5 = ref([
      {
        value: "Hatchback",
        name: "Hatchback",
      },
      {
        value: "Sedan",
        name: "Sedan",
      },
      {
        value: "FourWheelDrive",
        name: "Four wheel drive",
      },
      {
        value: "Commercial",
        name: "Commercial",
      },
      {
        value: "Family",
        name: "Family",
      },
    ]);
    let options6 = ref([
      {
        value: "Gasoline",
        name: "Gasoline",
      },
      {
        value: "Diesel",
        name: "Diesel",
      },
      {
        value: "Electric",
        name: "Electric",
      },
      {
        value: "Hybrid",
        name: "Hybrid",
      },
    ]);
    let options7 = ref([
      {
        value: "Manual",
        name: "Manual",
      },
      {
        value: "Automatic",
        name: "Automatic",
      },
      {
        value: "SemiAutomatic",
        name: "Semi Automatic",
      },
    ]);

    const getBrands = async () => {
      return ApiService.get(`brands`)
        .then(({ data }) => {
          options1.value = data.data;
        })
        .catch(({ response }) => {});
    };
    const getModels = async () => {
      return ApiService.get(`models`)
        .then(({ data }) => {
          options2.value = data.data;
        })
        .catch(({ response }) => {});
    };
    const getSubModels = async () => {
      return ApiService.get(`sub-models`)
        .then(({ data }) => {
          options3.value = data.data;
        })
        .catch(({ response }) => {});
    };
    const getcolors = async () => {
      return ApiService.get(`colors`)
        .then(({ data }) => {
          options4.value = data.data;
        })
        .catch(({ response }) => {});
    };
    getBrands();
    getModels();
    getSubModels();
    getcolors();
    onMounted(() => {});
    const rules = ref({
      brand_id: [
        {
          required: true,
          message: "brand is required",
          trigger: "change",
        },
      ],
      model_id: [
        {
          required: true,
          message: " model is required",
          trigger: "change",
        },
      ],
      color_ids: [
        {
          required: true,
          message: "colors is required",
          trigger: "change",
        },
      ],
      sub_model_id: [
        {
          required: true,
          message: "sub model is required",
          trigger: "change",
        },
      ],
      car_body: [
        {
          required: true,
          message: "car body is required",
          trigger: "change",
        },
      ],
      fuel_type: [
        {
          required: true,
          message: "fuel type is required",
          trigger: "change",
        },
      ],
      gear_shifter: [
        {
          required: true,
          message: "gear shifter is required",
          trigger: "change",
        },
      ],
      price: [
        {
          required: true,
          message: "price is required",
          trigger: "change",
        },
      ],
      year: [
        {
          required: true,
          message: "year is required",
          trigger: "change",
        },
      ],
    });

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

    const disabledDate = (time: Date) => {
      return time.getTime() > Date.now();
    };

    watch([() => store.errors, () => store.loading , ()=> store.emptyForm], ([newVal, val2 , val3]) => {
      errors.value = newVal;
      loading.value = val2;
      formData.value = val3;
    });

    return {
      formData,
      rules,
      submit,
      errors,
      formRef,
      loading,
      addCustomerModalRef,
      getAssetPath,
      countries,
      valueId,
      options1,
      options2,
      options3,
      options4,
      options5,
      options6,
      options7,
      disabledDate,
    };
  },
});
</script>
