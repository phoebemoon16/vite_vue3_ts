<!--
 * @Author: wanghh
 * @Date: 2022-07-11 08:44:50
 * @LastEditors: wanghh
 * @LastEditTime: 2022-07-12 16:02:10
 * @Description:
-->
<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import {
  RadiusBottomrightOutlined,
  MenuOutlined,
  TeamOutlined,
  HomeOutlined,
  WifiOutlined,
  InfoCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref, reactive } from "vue";

const list = ref([
  { name: "111" },
  { name: "222" },
  { name: "333" },
  { name: "444" },
]);

const hotelList = ref([
  { name: "No extras", value: 1, price: 0, origin: true },
  { name: "Reserve now, pay later", value: 2, price: 35, origin: true },
]);

const hotelList2 = ref([
  { name: "No extras", value: 1, price: 0, origin: false },
]);

const list2 = ref([{ name: "211" }]);

const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
  width: "390px",
});

const radioStyle2 = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
  width: "390px",
  cursor: "move",
});
const value = ref(1);
function log(val: any) {
  let num = 0;
  let idx = 0;
  hotelList2.value.forEach((item, index) => {
    if (item.name === val.added.element.name) {
      num++;
      idx = index;
    }
  });
  if (num > 1) {
    hotelList2.value.splice(idx, 1);
    message.warning("Do not drag in repeatedly");
  }
}

function handleDelete(index: number) {
  hotelList2.value.splice(index, 1);
}
</script>
<template>
  <div class="hotel">
    <div class="list">
      <header>
        <img
          class="img"
          src="https://images.trvl-media.com/hotels/1000000/30000/26000/25953/12118128.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        />
      </header>
      <div class="detail">
        <h3 class="uitk-heading-6">
          Premium Room, 1 King Bed, Non Smoking, Lake View
        </h3>
        <ul>
          <li><RadiusBottomrightOutlined class="icon" />325 sq ft</li>
          <li><MenuOutlined class="icon" />Lake view</li>
          <li><TeamOutlined class="icon" />Sleeps 3</li>
          <li><HomeOutlined class="icon" />1 King Bed</li>
          <li><wifi-outlined class="icon" />Free WiFi</li>
        </ul>
        <a class="detail-link">More details ></a>
      </div>
      <a-divider class="divider" />
      <div class="policy">
        <h4>Cancellation policy</h4>
        <a class="detail-link"
          >More details on all policy options <info-circle-outlined
        /></a>
        <a-radio-group v-model:value="value">
          <a-radio :style="radioStyle" :value="1"
            >Non-Refundable <span class="radio-right"> + $0</span></a-radio
          >
          <a-radio :style="radioStyle" :value="2"
            >Fully refundable before Jul 23<span class="radio-right">
              + $34</span
            ></a-radio
          >
        </a-radio-group>
      </div>
      <a-divider class="divider" />
      <div class="extra">
        <h4>Cancellation policy</h4>
        <VueDraggableNext
          v-model="hotelList"
          :group="{ name: 'hotel', pull: 'clone', put: false }"
          ghost-class="ghost"
          :sort="false"
        >
          <div
            class="radioDrage"
            v-for="element in hotelList"
            :key="element.name"
          >
            <a-radio :style="radioStyle2">
              {{ element.name }}
              <span class="radio-right"> + ${{ element.price }}</span></a-radio
            >
          </div>
        </VueDraggableNext>
      </div>
      <div class="chargeBottom">
        <div class="charge">
          <div class="price">
            <a-tag color="#0d7066" class="priceTag">15% of</a-tag>
            <div>
              <h1>$322</h1>
              <h4>$379</h4>
              <info-circle-outlined style="padding-left: 5px" />
              <h5>$364 total</h5>
            </div>
            <a class="detail-link">Price details ></a>
          </div>
          <a-button type="primary" class="ReserveButton">Reserve</a-button>
        </div>
      </div>
    </div>
    <div class="list">
      <header>
        <img
          class="img2"
          src="https://images.trvl-media.com/hotels/1000000/30000/26000/25953/e92f696f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        />
      </header>
      <div class="detail">
        <h3 class="uitk-heading-6">Suite, 1 Bedroom, Non Smoking, Balcony</h3>
        <ul>
          <li><RadiusBottomrightOutlined class="icon" />419 sq ft</li>
          <li><MenuOutlined class="icon" />City view</li>
          <li><TeamOutlined class="icon" />Sleeps 4</li>
          <li><HomeOutlined class="icon" />1 King Bed</li>
          <li><wifi-outlined class="icon" />Free WiFi</li>
        </ul>
        <a class="detail-link">More details ></a>
      </div>
      <a-divider class="divider" />
      <div class="policy">
        <h4>Cancellation policy</h4>
        <a class="detail-link"
          >More details on all policy options <info-circle-outlined
        /></a>
        <a-radio-group v-model:value="value">
          <a-radio :style="radioStyle" :value="1"
            >Non-Refundable
            <span class="radio-right radio-right2"> + $0</span></a-radio
          >
          <a-radio :style="radioStyle" :value="2"
            >Fully refundable before Jul 23<span class="radio-right">
              + $34</span
            ></a-radio
          >
        </a-radio-group>
      </div>
      <a-divider class="divider" />
      <div class="extra">
        <h4>Cancellation policy</h4>
        <div class="copyDrag">
          <VueDraggableNext
            v-model="hotelList2"
            group="hotel"
            ghost-class="ghost"
            :sort="false"
            @change="log"
          >
            <div
              class="radioDrage"
              v-for="(element, index) in hotelList2"
              :key="element.name"
            >
              <a-radio :style="radioStyle2">
                {{ element.name }}
                <minus-circle-outlined
                  style="margin-left: 10px"
                  v-show="element.origin"
                  @click="handleDelete(index)"
                />

                <span class="radio-right">
                  + ${{ element.price }}</span
                ></a-radio
              >
            </div>
          </VueDraggableNext>
        </div>
      </div>
      <div class="chargeBottom">
        <div class="charge charge2">
          <div class="price">
            <a-tag color="#0d7066" class="priceTag">15% of</a-tag>
            <div>
              <h1>$322</h1>
              <h4>$379</h4>
              <info-circle-outlined style="padding-left: 5px" />
              <h5>$364 total</h5>
            </div>
            <a class="detail-link">Price details ></a>
          </div>
          <a-button type="primary" class="ReserveButton">Reserve</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.drag {
  // display: flex;
  // text-align: center;
  .dragArea {
    display: flex;
    // align-items: center;
    justify-content: center;
    margin: 20px 0px;
  }
}

.list-group-item {
  border: 1px solid #ccc;
  padding: 5px 5px;
  width: 50px;
  cursor: move;
}
.drag2 {
  width: 60px;
  margin: 0 10px;
  .drag2-content {
    // display: flex;
    // // align-items: center;
    // justify-content: space-between;
  }
  .icon {
    display: none;
  }
  .icon:hover {
    display: block;
  }
}
.drag2:hover .icon {
  display: inline;
  margin-left: 10px;
}

.hotel {
  display: flex;
  justify-content: center;
  .list {
    border-radius: 5px;
    width: 392px;
    // height: 800px;
    margin: 0px 10px;
    border: 1px solid #d7d4d2;
    header {
      height: 160px;
      border-radius: 5px;
      .img {
        width: 100%;
        height: 100%;
      }
      .img2 {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detail {
    margin: 10px 10px;
    text-align: left;
    .uitk-heading-6 {
      color: #141d38;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
    ul {
      list-style-type: none;
      margin-left: -35px;
      li {
        padding: 2px 0px;
        .icon {
          padding-right: 5px;
        }
      }
    }
    .detail-link {
      color: #3662d8;
    }
    .detail-link:hover {
      text-decoration: underline;
    }
  }

  .divider {
    background-color: #d7d4d2;
    margin: 10px 0;
  }
  .policy {
    padding: 0px 10px;
    text-align: left;
    .detail-link {
      font-size: 12px;
      color: #343b53;
    }
    .detail-link:hover {
      text-decoration: underline;
    }
    .radio-right {
      display: inline-block;
      position: absolute;
      right: 30px;
    }
  }

  .extra {
    height: 120px;
    padding: 0px 10px;
    text-align: left;
    .copyDrag {
      height: 100px;
      overflow-y: scroll;
    }
    .radio-right {
      display: inline-block;
      position: absolute;
      right: 30px;
    }
    .radioDrage {
      cursor: move;
    }
  }
  .chargeBottom {
    // position: fixed;
    // bottom: 10px;
    .charge {
      margin: 10px 10px;
      height: 100px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .priceTag {
        border-radius: 15px;
        background-color: #0d7066;
      }
      h1 {
        display: inline-block;
        padding-right: 5px;
      }
      h4 {
        display: inline-block;
        text-decoration: line-through;
      }
      h5 {
        margin-top: -18px;
      }
      .detail-link {
        color: #3662d8;
      }
      .detail-link:hover {
        text-decoration: underline;
      }
      .ReserveButton {
        border-radius: 5px;
        line-height: 20px;
        background-color: #2950b8;
      }
    }

    .charge2 {
      margin-top: 30px;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
>
