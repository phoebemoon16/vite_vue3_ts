<!--
 * @Author: wanghh
 * @Date: 2022-06-22 09:13:24
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-11 10:36:19
 * @Description: 
-->
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getCurrentInstance } from "@vue/runtime-core";
import Compressor from "compressorjs";
import * as XLSX from "xlsx";

const currentInstance = getCurrentInstance();
const fileList = ref<Array<any>>([]);
const previews = ref<any>('<table><tr><td id="sjs-A1"></td></tr></table>');
// const previewsHTML = ref<any>("<span>preview excel</span>");

function handleChangeImg(item: any, j: number) {}
function move() {}
// storage/files/41/20220707/附件.pdf
onMounted(() => {
  fetch("/view").then((data) => {
    // let data2 = new Blob([data])
    let wb = XLSX.read(data, { type: "buffer" });
    var firstSheetName = wb.SheetNames[0];
    //reading only first sheet data
    var jsonData = XLSX.utils.sheet_to_json(wb.Sheets[firstSheetName]);
    alert(JSON.stringify(jsonData));
    //displaying the json result into HTML table
    displayJsonToHtmlTable(jsonData);
    // var wsname = wb.SheetNames[0];
    // var ws = wb.Sheets[wsname];
    // var HTML = XLSX.utils.sheet_to_html(ws);
    // // previews.value = HTML;
    // previews.value = `<table><tr><td id=\"sjs-A1\"></td></tr></table>`;
    // currentInstance.ctx.$refs.previewsHTML.innerHTML = HTML;
    console.log(wb, "workbook");
  });
  // readWorkbookFromRemoteFile("/view");
});
function displayJsonToHtmlTable(jsonData) {
  if (jsonData.length > 0) {
    var htmlData =
      "<tr><th>Student Name</th><th>Address</th><th>Email ID</th><th>Age</th></tr>";
    for (var i = 0; i < jsonData.length; i++) {
      var row = jsonData[i];
      htmlData +=
        "<tr><td>" +
        row["Student Name"] +
        "</td><td>" +
        row["Address"] +
        "</td><td>" +
        row["Email ID"] +
        "</td><td>" +
        row["Age"] +
        "</td></tr>";
    }
    // table.innerHTML = htmlData;
    console.log(htmlData, "htmlData");
  } else {
    // table.innerHTML = "There is no data in Excel";
  }
}
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
function readWorkbookFromRemoteFile(url: string) {}
</script>
<template>
  <input type="file" id="file" accept="image/*" />
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

  <a
    href="http://10.1.100.42:99/storage/files/41/20220707/test.xlsx"
    download="w3logo"
  >
    <img border="0" alt="W3School" />
  </a>

  <div>
    excel预览
    <a href="http://10.1.100.42:99/storage/files/41/20220707/test.xlsx"
      >excel点击预览</a
    >
  </div>

  <div ref="previewsHTML"></div>
  <div v-html="previews"></div>
  <table id="display_excel_data"></table>
</template>
