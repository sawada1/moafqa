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
          <h2 class="fw-bold m-0">{{ $t("Addclientscore") }}</h2>
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
                <label class="required fs-6 fw-semibold mb-2">
                  {{ $t("netsalary") }}
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="net_salary">
                  <el-input
                    v-model="formData.net_salary"
                    type="number"
                    placeholder=""
                    readonly
                  />
                  <div v-if="errors">
                    <span v-if="errors.net_salary" class="error-from-server">{{
                      errors.net_salary
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  {{ $t("monthlyobligations") }}
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="monthly_obligations">
                  <el-input
                    v-model="formData.monthly_obligations"
                    type="text"
                    placeholder=""
                    readonly
                  />
                  <div v-if="errors">
                    <span
                      v-if="errors.monthly_obligations"
                      class="error-from-server"
                      >{{ errors.monthly_obligations }}</span
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
                  {{ $t("laporsector") }}
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="lapor_sector_id">
                  <el-select
                    v-if="options"
                    v-model="formData.lapor_sector_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.name_en"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span
                    v-if="errors.lapor_sector_id"
                    class="error-from-server"
                    >{{ errors.lapor_sector_id }}</span
                  >
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">{{
                  $t("salarybank")
                }}</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="salary_bank_id">
                  <el-select
                    v-if="options2"
                    v-model="formData.salary_bank_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span
                    v-if="errors.salary_bank_id"
                    class="error-from-server"
                    >{{ errors.salary_bank_id }}</span
                  >
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  {{ $t("client") }}
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="client_id">
                  <el-select
                    v-if="options3"
                    v-model="formData.client_id"
                    filterable
                    placeholder="Select"
                    style="width: 540px"
                  >
                    <el-option
                      v-for="item in options3"
                      :key="item.id"
                      :label="item.name_en"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.client_id" class="error-from-server">{{
                    errors.client_id
                  }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">{{
                  $t("mortgage loan")
                }}</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="mortgage_loan">
                  <el-radio-group v-model="formData.mortgage_loan" class="ml-4">
                    <el-radio :value="true" size="large">
                      {{ $t("yes") }}
                    </el-radio>
                    <el-radio :value="false" size="large">
                      {{ $t("no") }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.mortgage_loan" class="error-from-server">{{
                    errors.mortgage_loan
                  }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">{{
                  $t("simahissue")
                }}</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="simah_issue">
                  <el-radio-group v-model="formData.simah_issue" class="">
                    <el-radio :value="true" size="large">
                      {{ $t("yes") }}
                    </el-radio>
                    <el-radio :value="false" size="large">
                      {{ $t("no") }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.simah_issue" class="error-from-server">{{
                    errors.simah_issue
                  }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">{{
                  $t("active")
                }}</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="active">
                  <el-radio-group v-model="formData.active" class="ml-4">
                    <el-radio :value="true" size="large">
                      {{ $t("yes") }}
                    </el-radio>
                    <el-radio :value="false" size="large">
                      {{ $t("no") }}
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.active" class="error-from-server">{{
                    errors.active
                  }}</span>
                </div>
              </div>

              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  {{ $t("employmentdate") }}
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="employment_date">
                  <!-- <el-date-picker
                    v-model="formData.birth_date"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    size="default"
                  /> -->
                  <el-input
                    v-model="formData.employment_date"
                    type="date"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span
                    v-if="errors.employment_date"
                    class="error-from-server"
                    >{{ errors.employment_date }}</span
                  >
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
                {{ $t("Submit") }}
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                {{ $t("Pleasewait") }}
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
import { useClientScoreStore } from "@/stores/clientsScore";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: ["func"],
  setup(props) {
    const { locale } = useI18n();
    const store = useClientScoreStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    let loading = ref(store.loading);
    const valueId = ref();
    const formData = ref({
      client_id: "",
      net_salary: "",
      monthly_obligations: "",
      lapor_sector_id: "",
      mortgage_loan: "",
      salary_bank_id: "",
      simah_issue: "",
      active: "",
      employment_date: "",
    });

    const options = ref();
    const options2 = ref();
    const options3 = ref();
    function getItems() {
      return ApiService.get(`lapor-sector`)
        .then(({ data }) => {
          options.value = data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
    function getBanks() {
      return ApiService.get(`fund_companies`)
        .then(({ data }) => {
          options2.value = data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
    function getClients() {
      return ApiService.get(`client`)
        .then(({ data }) => {
          options3.value = data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }

    getItems();
    getBanks();
    getClients();

    onMounted(() => {});
    const rules = ref({
      client_id: [
        {
          required: true,
          message: locale.value == "en" ? "client is required" : "العميل مطلوب",
          trigger: "change",
        },
      ],
      net_salary: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "net salary is required"
              : "صافي الراتب مطلوب",
          trigger: "change",
        },
      ],
      monthly_obligations: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "monthly obligations is required"
              : "الالتزامات الشهرية مطلوب",
          trigger: "change",
        },
      ],
      lapor_sector_id: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "labor sector is required"
              : " قطاع العمل مطلوب",
          trigger: "change",
        },
      ],
      salary_bank_id: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "bank salary is required"
              : " راتب البنك مطلوب ",
          trigger: "change",
        },
      ],
      mortgage_loan: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "mortgage loan is required"
              : " القرض العقاري مطلوب ",
          trigger: "change",
        },
      ],
      simah_issue: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "simah issue is required"
              : " قضية سمه مطلوب ",
          trigger: "change",
        },
      ],
      active: [
        {
          required: true,
          message:
            locale.value == "en" ? "active is required" : "حقل مفعل مطلوب ",
          trigger: "change",
        },
      ],
      employment_date: [
        {
          required: true,
          message:
            locale.value == "en"
              ? "employment date type is required"
              : "نوع تاريخ التوظيف مطلوب ",
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
            text:
              locale.value == "en"
                ? "Sorry, looks like there are some errors detected, please try again."
                : "عذرًا، يبدو أنه تم اكتشاف بعض الأخطاء، يرجى المحاولة مرة أخرى.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText:
              locale.value == "en" ? "Ok, got it!" : "لقد فهمت شكرا",
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
      addCustomerModalRef,
      getAssetPath,
      countries,
      valueId,
      options2,
      options3,
      options,
      disabledDate,
    };
  },
});
</script>
