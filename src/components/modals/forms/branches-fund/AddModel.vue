<template>
  <div class="modal fade" id="kt_modal_add_brand" ref="addCustomerModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header d-flex align-items-center" id="kt_modal_add_customer_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold m-0">Add a branch</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary">
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div class="scroll-y me-n7 pe-7" id="kt_modal_add_brand_scroll" data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_brand_header"
              data-kt-scroll-wrappers="#kt_modal_add_brand_scroll" data-kt-scroll-offset="300px">
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> Name </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name">
                  <el-input v-model="formData.name" type="text" placeholder="" />
                  <div v-if="errors">
                    <span v-if="errors.name" class="error-from-server">{{
                      errors.name
                      }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> address </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="address">
                  <el-input v-model="formData.address" type="text" placeholder="" />
                  <div v-if="errors">
                    <span v-if="errors.address" class="error-from-server">{{
                      errors.address
                      }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> district </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="district">
                  <el-input v-model="formData.district" type="text" placeholder="" />
                  <div v-if="errors">
                    <span v-if="errors.district" class="error-from-server">{{
                      errors.district
                      }}</span>
                  </div>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> city </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="city_id">
                  <el-select v-if="options1" v-model="formData.city_id" filterable placeholder="Select"
                    style="width: 540px">
                    <el-option v-for="item in options1" :key="item.id" :label="item.name_en" :value="item.id" />
                  </el-select>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.city_id" class="error-from-server">{{
                    errors.city_id
                    }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">
                  fund company
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="fund_company_id">
                  <el-select v-if="options2" v-model="formData.fund_company_id" filterable placeholder="Select"
                    style="width: 540px">
                    <el-option v-for="item in options2" :key="item.id" :label="item.name" :value="item.id" />
                  </el-select>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.fund_company_id" class="error-from-server">{{ errors.fund_company_id }}</span>
                </div>
              </div>
              <!--end::Input group-->

              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">active</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="is_active">
                  <el-radio-group v-model="formData.is_active" class="ml-4">
                    <el-radio :value="true" size="large"> yes </el-radio>
                    <el-radio :value="false" size="large"> no </el-radio>
                  </el-radio-group>
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.is_active" class="error-from-server">{{
                    errors.is_active
                    }}</span>
                </div>
              </div>
              <!--begin::Input group-->

              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">email</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.email" type="email" placeholder="" />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.email" class="error-from-server">{{
                    errors.email
                    }}</span>
                </div>
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">mobile</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="mobile">
                  <el-input v-model="formData.mobile" type="tel" placeholder="" />
                </el-form-item>
                <!--end::Input-->
                <div v-if="errors">
                  <span v-if="errors.mobile" class="error-from-server">{{
                    errors.mobile
                    }}</span>
                </div>
              </div>
              <div class="mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2"> map </label>
                <!--end::Label-->
                <el-form-item prop="long">
                  <div style="width: 100%; height: 300px" id="map-fund"></div>
                </el-form-item>
                <!--begin::Input-->
                <!--end::Input-->
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
            <button type="reset" id="kt_modal_add_branch_cancel" class="btn btn-light me-3">
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
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script>
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, watch } from "vue";
import { hideModal } from "@/core/helpers/modal";
import { countries } from "@/core/data/countries";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { genFileId } from "element-plus";
import { useBrnchFundStore } from "@/stores/branches-fund";
import ApiService from "@/core/services/ApiService";


export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: ["func"],
  setup(props) {
    const store = useBrnchFundStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    let loading = ref(store.loading);
    const valueId = ref();
    let clickedLat = ref();
    let clickedLng = ref();
    const formData = ref({
      name: "",
      address: "",
      lat: "",
      long: "",
      email: "",
      mobile: "",
      district: "",
      is_active: "",
      fund_company_id: "",
      city_id: "",
    });

    let options1 = ref();
    let options2 = ref();

    const getCities = async () => {
      return ApiService.get(`cities`)
        .then(({ data }) => {
          options1.value = data.data;
        })
        .catch(({ response }) => {});
    };
    const getAgencies = async () => {
      return ApiService.get(`fund_companies`)
        .then(({ data }) => {
          options2.value = data.data;
        })
        .catch(({ response }) => {});
    };

    getCities();
    getAgencies();

    async function initMap() {
      // Request needed libraries.
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");
      const map = new google.maps.Map(document.getElementById("map-fund"), {
        zoom: 4,
        center: { lat: 24.7136, lng: 46.6753 },
        mapId: "DEMO_MAP_ID",
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 24.7136, lng: 46.6753 },
      });

      map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map);
      });
    }

    let marker = null;

    function placeMarkerAndPanTo(latLng, map) {
      // Remove the old marker if it exists
      if (marker) {
        marker.setMap(null);
      }

      // Create a new marker
      marker = new google.maps.Marker({
        position: latLng,
        map: map,
      });

      // Pan the map to the clicked location
      map.panTo(latLng);

      // Get the latitude and longitude
      clickedLat.value = latLng.lat();
      clickedLng.value = latLng.lng();
      formData.value.lat = clickedLat.value;
      formData.value.long = clickedLng.value;
      // Do whatever you want with the latitude and longitude variables
      console.log("Latitude:", clickedLat.value);
      console.log("Longitude:", clickedLng.value);
    }

    onMounted(() => {
      // getMap();
      initMap();
      
    });
    const rules = ref({
      name: [
        {
          required: true,
          message: " name is required",
          trigger: "change",
        },
      ],
      address: [
        {
          required: true,
          message: " address is required",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "email is required",
          trigger: "change",
        },
      ],
      mobile: [
        {
          required: true,
          message: "mobile is required",
          trigger: "change",
        },
      ],
      long: [
        {
          required: true,
          message: "coordinations is required",
          trigger: "change",
        },
      ],
      district: [
        {
          required: true,
          message: "district is required",
          trigger: "change",
        },
      ],
      is_active: [
        {
          required: true,
          message: "is active is required",
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
      city_id: [
        {
          required: true,
          message: "city is required",
          trigger: "change",
        },
      ],
    });

    let errors = ref();
    const submit = async () => {
      if (!formRef.value) {
        return;
      }
      formRef.value.validate(async (valid) => {
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
      addCustomerModalRef,
      getAssetPath,
      countries,
      valueId,
      options1,
      options2,
    };
  },
});
</script>
