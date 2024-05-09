<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            v-model="search"
            @input="searchItems()"
            type="text"
            data-kt-subscription-table-filter="search"
            class="form-control form-control-solid w-250px ps-14"
            placeholder="Search Subscriptions"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <!-- <button
                          type="button"
                          class="btn btn-light-primary me-3"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_subscriptions_export_modal"
                        >
                          <KTIcon icon-name="exit-up" icon-class="fs-2" />
                          Export
                        </button> -->
          <!--end::Export-->

          <!--begin::Add subscription-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_brand"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Add brand
          </button>
          <!--end::Add subscription-->
        </div>
        <!--end::Toolbar-->

        <!--begin::Group actions-->
        <div v-else class="d-flex justify-content-end align-items-center">
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewSubscriptions()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <KTDatatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        @on-items-per-page-change="onItemsPerPageChange"
        @page-change="pageChange"
        :data="store.brands"
        :header="headerConfig"
        :checkbox-enabled="true"
        :total="store.total"
      >
        <template v-slot:Ename="{ row: customer }">
          {{ customer.name_en }}
        </template>
        <template v-slot:Aname="{ row: customer }">
          {{ customer.name_ar }}
        </template>
        <template v-slot:actions="{ row: customer }">
          <div>
            <button class="btn btn-sm btn-light btn-active-light-primary">
              Actions
              <KTIcon icon-name="down" icon-class="fs-5 m-0" />
              <!--begin::Menu-->
              <v-menu activator="parent">
                <div class="custom-menu-container">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <router-link
                      :to="{
                        name: 'apps-cities-show',
                        params: { id: customer.id },
                      }"
                      class="menu-link px-3 link-menu-custom"
                      >View</router-link
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3 link-menu-custom">
                    <a
                      @click="deleteSubscription(customer.id)"
                      class="menu-link px-3"
                      >Delete</a
                    >
                  </div>
                  <div class="menu-item px-3 link-menu-custom">
                    <button
                      type="button"
                      class=""
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_edit_brand"
                      @click="getBrand(customer.id)"
                    >
                      <a class="menu-link px-3">edit</a>
                    </button>
                  </div>
                  <!--end::Menu item-->
                </div>
              </v-menu>
              <!--end::Menu-->
            </button>
          </div>
        </template>
      </KTDatatable>
    </div>
    <!--end::Card body-->
  </div>

  <!--end::Card-->
  <EditModal></EditModal>
  <AddModal></AddModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable/table-partials/models";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import AddModal from "@/components/modals/forms/request/AddModel.vue";
import EditModal from "@/components/modals/forms/request/EditModel.vue";
import { useRequestStore } from "@/stores/request";
import Swal from "sweetalert2/dist/sweetalert2.js";


export default defineComponent({
  name: "kt-subscription-list",
  components: {
    KTDatatable,
    AddModal,
    EditModal,
  },
  setup() {
    const headerConfig = ref([
      {
        columnName: "english name",
        columnLabel: "Ename",
        sortEnabled: true,
      },
      {
        columnName: "arabic name",
        columnLabel: "Aname",
        sortEnabled: true,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    let brand = ref();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    const pageChange = async (page: number) => {
      console.log(page);
      await store.getItems(page);
    };

    const initData = ref([]);
    const store = useRequestStore();
    const getSubModels = async () => {
      await store.getItems();
      initData.value.splice(0, store.brands.length, ...store.brands);
      MenuComponent.reinitialization();
    };

    const getBrand = async (id) => {
      await store.getItem(id);
      brand.value = store.brand;
    };
    onMounted(() => {
      getSubModels();
    });

    const selectedIds = ref<Array<number>>([]);
    const deleteFewSubscriptions = () => {
      selectedIds.value.forEach((item) => {
        deleteSubscription(item);
      });
      selectedIds.value.length = 0;
    };
    const deleteSubscription = async (id: number) => {
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            store.deleteFunc(id);
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    };
    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(store.brands, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };

    const search = ref<string>("");
    const searchItems = () => {
      store.brands.splice(0, store.brands.length, ...initData.value);
      if (search.value !== "") {
        // let results: Array<ISubscription> = [];
        let results = [];
        for (let j = 0; j < initData.value.length; j++) {
          if (searchingFunc(initData.value[j], search.value)) {
            results.push(initData.value[j]);
          }
        }
        store.brands.splice(0, store.brands.length, ...results);
      }
      MenuComponent.reinitialization();
    };

    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].toLowerCase().indexOf(value.toLowerCase()) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const onItemsPerPageChange = () => {
      setTimeout(() => {
        MenuComponent.reinitialization();
      }, 0);
    };

    return {
      search,
      searchItems,
      headerConfig,
      store,
      sort,
      onItemSelect,
      selectedIds,
      deleteFewSubscriptions,
      deleteSubscription,
      getAssetPath,
      pageChange,
      getSubModels,
      brand,
      getBrand,
      onItemsPerPageChange,
    };
  },
});
</script>

<style lang="scss">
.custom-menu-container {
  position: relative;
  box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
  background-color: #fff;
  border-radius: 6px;
  z-index: 111;
  .link-menu-custom {
  }
}
</style>
