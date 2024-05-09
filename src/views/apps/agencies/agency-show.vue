<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div v-if="brand" class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <!-- <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image" /> -->
              <div
                class="color-hex-container-circle"
                :style="{ backgroundColor: brand.hex_code }"
              ></div>
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <KTIcon icon-name="down" icon-class="fs-3" />
              </span>
            </div>

            <!-- <span
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="Edit customer details"
                  >
                    <a
                      href="#"
                      class="btn btn-sm btn-light-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_update_customer"
                    >
                      Edit
                    </a>
                  </span> -->
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <!-- <div class="badge badge-light-info d-inline">Premium user</div> -->
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">name</div>
              <div class="text-gray-600">{{ brand.name }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">email</div>
              <div class="text-gray-600">{{ brand.email }}</div>
              <div class="fw-bold mt-5">mobile</div>
              <div class="text-gray-600">{{ brand.mobile }}</div>
              <div class="fw-bold mt-5">commercial register</div>
              <div class="text-gray-600">{{ brand.commercial_register }}</div>
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script setup lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted, watch } from "vue";
import { useAgencyStore } from "@/stores/agency";
// import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
let props = defineProps(["id"]);
let store = useAgencyStore();
let brand = ref(store.showBrand);

const getBrand = async () => {
  store.getItem(props.id);
  console.log(brand.value);
};

onMounted(() => {
  getBrand();
});

watch([() => store.showBrand], ([val]) => {
  brand.value = val;
});
</script>

<style>
.color-hex-container-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
