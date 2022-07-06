<!--
 * @Author: wanghh
 * @Date: 2022-06-22 09:13:24
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-06 10:49:33
 * @Description: 
-->
<script lang="ts" setup>
import { ref, onMounted, watchEffect } from "vue";
import Compressor from "compressorjs";

const fileList = ref<Array<any>>([]);

function handleChangeImg(item: any, j: number) {}
function move() {}

// 1.208419  压缩后:114030
function customRequest(obj: any) {
  console.log(obj, "00");
  new Compressor(obj.file, {
    quality: 0.4,

    // The compression process is asynchronous,
    // which means you have to access the `result` in the `success` hook function.
    success(result) {
      const formData = new FormData();
      console.log(result, "rsulit11");
      // The third parameter is required for server
      //   formData.append('file', result, result.name);

      // Send the compressed image file to server with XMLHttpRequest.
    },
    error(err) {
      console.log(err.message);
    },
  });
}

function download() {
  let url =
    "http://10.1.100.42:99/storage/files/41/20220622/pkxYpdwto4rrEi21hFeuMFYnDMolCnnsYV7TACuB.jpeg";
  let link = document.createElement("a");
  link.style.display = "none";
  //   link.href = url;
  // '.xls'
  link.setAttribute("href", url);
  link.setAttribute("download", "下载pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); //下载完成移除元素
  //   window.URL.revokeObjectURL(url); //释放掉blob对象
}

function preview() {
  let url =
    "http://10.1.100.42:99/storage/files/41/20220622/CcusJ5TUwJbw8XaADLHhYEVCbOMz3BDDVk6wyqAp.pdf";
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  // '.xls'
  link.setAttribute("download", "pdf");
  link.setAttribute("target", "_Blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); //下载完成移除元素
}

const input = ref("");

onMounted(() => {
  input.value.focus();
});
watchEffect(() => {
  if (input.value) {
    input.value.focus();
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});
</script>
<template>
  <input type="file" id="file" accept="image/*" />
  <input type="age" />
  <a-upload
    v-model="fileList"
    list-type="picture"
    multiple
    :customRequest="customRequest"
    @change="handleChangeImg(item, j)"
    @remove="move"
  >
    <a-button class="img-button button">
      <i class="iconfont icon-upload"></i>
      {{ `请上传` }}
    </a-button>
  </a-upload>

  <a-button type="primary" @click="preview">查看</a-button>
  <a-button type="primary" @click="download">下载</a-button>
  <a
    href="http://10.1.100.42:99/storage/files/41/20220622/CcusJ5TUwJbw8XaADLHhYEVCbOMz3BDDVk6wyqAp.pdf"
    download="file.pdf"
    >0000</a
  >

  <a href="logo.png" download="img">图片</a>
  <img src="@/assets/logo.png" />

  <a
    href="http://10.1.100.42:99/storage/files/41/20220622/CcusJ5TUwJbw8XaADLHhYEVCbOMz3BDDVk6wyqAp.pdf"
    download="w3logo"
  >
    <img border="0" alt="W3School" />
  </a>

  <div>
    ref功效
    <input ref="input" />
  </div>
</template>
