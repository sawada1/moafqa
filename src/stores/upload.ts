import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export const useUploadStore = defineStore("upload", () => {
  const errors = ref({});
  function setError(error: any) {
    errors.value = { ...error };
  }
  function setError2(error: any) {
    errors.value = { ...error.data.errors };
  }
  async function uploadFile(upload: any, formData: any) {
    const formBody = new FormData();
    formBody.append("image_name", upload ? upload[0].name : "");
    formBody.append("directory", "brands");
    formBody.append("file", upload ? upload[0].raw : "");
    try {
      const response = await ApiService.post(`files/upload`, formBody);
      if (response.status === 200) {
        createBrand(formData);
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      setError2(response);
    }
  }

  async function createBrand(credentials: any) {
    try {
      const response = await ApiService.post("brands", credentials);
      if (response.status === 200) {
        createBrand("dasdas");
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (response) {
      setError2(response);
    }
  }

  return {
    uploadFile,
    errors,
  };
});
