import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/modal";
export const useAgencyStore = defineStore("agency", () => {
  const errors = ref({});
  const errorsEdit = ref();
  const brands = ref([]);
  const brand = ref();
  const total = ref();
  const pendingShow = ref(false);
  const showBrand = ref();
  const checkBrand = ref();
  const loading = ref<boolean>(false);
  const loadingEdit = ref<boolean>(false);
  const errorSubmit = ref();
  function setError(error: any) {
    errors.value = { ...error };
  }
  function setError2(error: any) {
    errors.value = { ...error.response.data.errors };
  }
  function setErrorEdit(error: any) {
    errorsEdit.value = { ...error.response.data.errors };
  }
  async function deleteFunc(id: number) {
    try {
      const response = await ApiService.delete(`agencies/soft-delete/${id}`);
      if (response.status === 200) {
        getItems();
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      setError2(response);
    }
  }
  function getItems(page = 1 as number) {
    return ApiService.get(`agencies`, "", { page: page })
      .then(({ data }) => {
        brands.value = data.data;
        total.value = data.meta.totalItems;
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }
  async function getItem(id: any) {
    try {
      const response = await ApiService.get(`agencies/${id}`);
      if (response.status === 200) {
        brand.value = response.data.data;
        // checkBrand.value == response.status;
        showBrand.value = response.data.data;
        checkBrand.value == true;
        pendingShow.value = false;
      }
    } catch (response) {
      setError2(response);
    }
  }
  async function edit(id: number, credentials: any , addCustomerModalRef) {
    try {
      const response = await ApiService.patch(`agencies/${id}`, credentials);
      if (response.status >= 200) {
        errorSubmit.value = true;
        errorsEdit.value = null;
        loadingEdit.value = false;
        setTimeout(() => {
          Swal.fire({
            text: "Form has been successfully submitted!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            hideModal(addCustomerModalRef);
            getItems();
          });
          // document.getElementById("kt_modal_add_customer_cancel")?.click();
          // uploadFile!.clearFiles();
        }, 1000);
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (errorss) {
      if (errorss) {
        setErrorEdit(errorss);
        loadingEdit.value = false;
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
      }
    }
  }


  async function create(
    credentials: any,
    addCustomerModalRef,
  ) {
    try {
      const response = await ApiService.post("agencies", credentials);
      if (response.status >= 201) {
        errorSubmit.value = true;
        errors.value = {};
        loading.value = false;
        setTimeout(() => {
          Swal.fire({
            text: "Form has been successfully submitted!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            hideModal(addCustomerModalRef);
            getItems();
          });
          document.getElementById("kt_modal_add_customer_cancel")?.click();
        }, 1000);
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (errorss) {
      loading.value = false;
      console.log(loading.value);
      if (errorss) {
        setError2(errorss);
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
      }
    }
  }

  return {
    create,
    deleteFunc,
    errors,
    edit,
    brands,
    total,
    brand,
    pendingShow,
    loading,
    showBrand,
    checkBrand,
    errorsEdit,
    errorSubmit,
    loadingEdit,
    getItem,
    getItems,
  };
});
