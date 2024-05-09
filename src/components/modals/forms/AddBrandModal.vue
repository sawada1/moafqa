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
          <h2 class="fw-bold m-0">{{ $t('Addbrand') }}</h2>
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
                  >{{ $t('englishName') }}</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name_en">
                  <el-input
                    v-model="formData.name_en"
                    type="text"
                    placeholder=""
                  />
                  <div v-if="errors">
                    <span v-if="errors.name_en" class="error-from-server">{{
                      errors.name_en
                    }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"
                  >{{ $t('arabicName') }}</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name_ar">
                  <el-input
                    v-model="formData.name_ar"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.name_ar" class="error-from-server">{{
                    errors.name_ar
                  }}</span>
                </div>
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">{{ $t('logo') }}</label>

                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item>
                  <el-upload
                    v-model:file-list="File"
                    ref="upload"
                    class="upload-demo"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :auto-upload="false"
                  >
                    <template #trigger>
                      <el-button type="primary">{{ $t('selectlogo') }}</el-button>
                    </template>
                    <template #tip>
                      <!-- <div class="el-upload__tip text-red">
                        limit 1 file, new file will cover the old file
                      </div> -->
                    </template>
                  </el-upload>
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
                {{ $t('Submit') }}
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                {{ $t('Pleasewait') }}
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
import { useBrandsStore } from "@/stores/brands";
import { useI18n } from "vue-i18n";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: ["func"],
  setup(props) {
    const { locale } = useI18n();
    const store = useBrandsStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    let loading = ref(store.loading);
   

    const formData = ref({
      name_en: "",
      name_ar: "",
      logo: "",
    });

    const rules = ref({
      name_en: [
        {
          required: true,
          message: locale.value == 'en' ? "english name is required" : ' الاسم باللغه الانجليزية مطلوب',
          trigger: "change",
        },
      ],
      name_ar: [
        {
          required: true,
          message: locale.value == 'en' ? "arabic name is required" : ' الاسم باللغه العربية مطلوب',

          trigger: "change",
        },
      ],
      logo: [
        {
          required: true,
          message: locale.value == 'en' ? "logo is required" : ' الشعار الانجليزية مطلوب',
          trigger: "change",
        },
      ],
    });

    let File = ref();
    const upload = ref<UploadInstance>();

    const handleExceed: UploadProps["onExceed"] = (files) => {
      upload.value!.clearFiles();
      const file = files[0] as UploadRawFile;
      file.uid = genFileId();
      upload.value!.handleStart(file);

      // formData.value.logo = upload.value[0];
    };

    const checkLogo = () => {
      if (upload.value) {
        formData.value.logo = upload.value ? upload.value[0].name : null;
      }
    };

    let errors = ref();
    const submit = async () => {
      if (!formRef.value) {
        return;
      }
      console.log(File.value);
      formRef.value.validate(async (valid: boolean) => {
        if (valid && File.value) {
          loading.value = true;
          store.uploadFile(
            File.value,
            formData.value,
            addCustomerModalRef.value,
            upload.value
          );
          errors.value = store.errors ? store.errors : [];
          console.log(store.errors);
          console.log(loading.value);
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
      upload,
      File,
      checkLogo,
      handleExceed,
    };
  },
});
</script>
