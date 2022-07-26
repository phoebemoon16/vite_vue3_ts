<!--
 * @Author: wanghh
 * @Date: 2022-07-20 10:25:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-21 11:02:25
 * @Description: 
-->
<script setup>
import {
  UserOutlined,
  HeartFilled,
  CloseOutlined,
  ThunderboltFilled,
  RightOutlined,
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
      <div class="img">
        <div class="animation"></div>
        <right-outlined class="icon-irght" />
      </div>
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
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-irght {
        color: red;
        font-size: 20px;
        margin-top: -96px;
      }
    }
    .animation {
      width: 100px;
      height: 100px;
      border-top: 3px dashed red;
      // border-right: 1px solid red;
      border-top-left-radius: 100%;
      animation: myfirst 5s;
    }

    @keyframes myfirst {
      50% {
        margin-top: 50px;
      }
      100% {
        margin-top: -50px;
      }
    }
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
