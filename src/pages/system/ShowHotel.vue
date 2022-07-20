<!--
 * @Author: wanghh
 * @Date: 2022-07-20 10:25:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-20 17:51:09
 * @Description: 
-->
<script setup>
import {
  UserOutlined,
  HeartFilled,
  CloseOutlined,
  ThunderboltFilled,
} from "@ant-design/icons-vue";
</script>

<template>
  <div class="box">
    <header>
      <div class="header-icon">
        <a-button shape="circle" style="background: #ccc">
          <template #icon>
            <user-outlined class="icon" />
          </template>
        </a-button>
        <close-outlined class="icon" />
      </div>
      <h2>You have a new order</h2>
    </header>
    <div class="content">
      <img />
      <p>A traveler is waiting for your confirmation</p>
      <p>with Executive Twin Room + Breakfast for $129($115+$14)</p>
      <p>The above diagram is the customizrtion details</p>
      <p>Please confirm the reservation</p>
      <p>
        You can also save it permanently for traveler to search it next time
      </p>
    </div>
    <div class="bottom">
      <div>
        <thunderbolt-filled class="icon" />
        <h5>Confirm</h5>
      </div>
      <div>
        <heart-filled class="icon" />
        <h5>Save</h5>
      </div>
      <div>
        <thunderbolt-filled class="icon" />
        <h5>Reject</h5>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  position: relative;
  margin: 0px auto;
  width: 350px;
  height: 500px;
  border: 1px solid #ccc;
  .icon {
    font-size: 25px;
  }
  header {
    height: 100px;
    .header-icon {
      padding: 5px 15px;
      display: flex;
      justify-content: space-between;
    }
  }
  .content {
  }
  .bottom {
    width: 100%;
    height: 60px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .icon {
      margin-top: 10px;
      padding: 0px 10px;
      // padding: 20px 10px;
    }
  }
}
</style>
