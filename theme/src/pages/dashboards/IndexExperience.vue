<template>
  
     <div>
    <h2>Resim Yükleme</h2>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <button @click="uploadImage">Yükle</button>
  </div>
</template>
<script setup>
import axios from "axios";
let selectedFile = null;
function handleFileChange(event){
    selectedFile = event.target.files[0];
}
function uploadImage(){
    const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = axios.post("https://localhost:7228/api/Upload/UploadImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(response => {
            alert(`Yükleme başarılı: ${response.data.message}`);
        });
      } catch (error) {
        console.error(error);
        alert("Resim yüklenirken bir hata oluştu.");
      }
}
</script>

<style lang="scss">

</style>