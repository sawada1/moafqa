import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/modal";
export const useBrandsStore = defineStore("brands", () => {
  const errors = ref({});
  const errorsEdit = ref();
  const brands = ref([]);
  const brand = ref();
  const total = ref();
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
  async function deleteBrand(id: number) {
    try {
      const response = await ApiService.delete(`brands/soft-delete/${id}`);
      if (response.status === 200) {
        getBrands();
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      setError2(response);
    }
  }
  function getBrands(page = 1 as number) {
    return ApiService.get(`brands`, "", { page: page })
      .then(({ data }) => {
        brands.value = data.data;
        total.value = data.meta.totalItems;
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }
  async function getBrand(id: any) {
    try {
      const response = await ApiService.get(`brands/${id}`);
      if (response.status === 200) {
        brand.value = response.data.data;
        // checkBrand.value == response.status;
        showBrand.value = response.data.data;
        checkBrand.value == true;
      }
    } catch (response) {
      setError2(response);
    }
  }
  async function editBrand(id: number, credentials: any , addCustomerModalRef , uploadFile) {
    try {
      const response = await ApiService.patch(`brands/${id}`, credentials);
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
            getBrands();
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

 
  async function uploadEditFile(
    id,
    upload: any,
    formData: any,
    addCustomerModalRef,
    uploadFile
  ) {
    const formBody = new FormData();
    formBody.append("image_name", upload ? upload[0].name : "");
    formBody.append("directory", "brands");
    formBody.append("file", upload ? upload[0].raw : "");
    try {
      const response = await ApiService.post(`files/upload`, formBody);
      if (response.status >= 201) {
        formData.logo = response.data.data.relative_path;
        editBrand(id,formData, addCustomerModalRef, uploadFile);
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      // setError2(response);
    }
  }

  async function uploadFile(
    upload: any,
    formData: any,
    addCustomerModalRef,
    uploadFile
  ) {
    const formBody = new FormData();
    formBody.append("image_name", upload ? upload[0].name : "");
    formBody.append("directory", "brands");
    formBody.append("file", upload ? upload[0].raw : "");
    try {
      const response = await ApiService.post(`files/upload`, formBody);
      if (response.status >= 201) {
        formData.logo = response.data.data.relative_path;
        createBrand(formData, addCustomerModalRef, uploadFile);
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      // setError2(response);
    }
  }

  async function createBrand(
    credentials: any,
    addCustomerModalRef,
    uploadFile
  ) {
    try {
      const response = await ApiService.post("brands", credentials);
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
            getBrands();
          });
          document.getElementById("kt_modal_add_customer_cancel")?.click();
          uploadFile!.clearFiles();
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
    createBrand,
    deleteBrand,
    errors,
    editBrand,
    brands,
    total,
    brand,
    loading,
    showBrand,
    checkBrand,
    errorsEdit,
    errorSubmit,
    getBrand,
    loadingEdit,
    uploadFile,
    uploadEditFile,
    getBrands,
  };
});
