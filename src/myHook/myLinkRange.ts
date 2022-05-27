/*
 * @Author: wanghh
 * @Date: 2022-05-26 15:19:27
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-27 09:44:29
 * @Description: 省市区下拉组件
 *  ProvinceSelect,
    CitySelect,
    AreaSelect,
    新技术：createVNode
 */
import { ElSelect, ElOption } from "element-plus";
import { ref, createVNode, computed } from "vue";
import cityTree from "./city-tree.json";

type Fun = (v: string) => void;

interface VNode {
  id: number;
  name: string;
}
// 将一个子节点创建为ElOption的VNode
const createOptionVNode = ({ id, name }: VNode) => {
  return createVNode(ElOption, { value: id, label: name });
};
// 将一个子节点数组，创建为一群ElOption的VNode的数组
const createOptionVNodes = (arr: any) => {
  return arr.map(createOptionVNode);
};

export const useLinkage = () => {
  //省
  const currentProvince = ref<string>("");
  let onProvinceOriginChange: Fun;
  const onProvinceChange = (v: string) => {
    if (onProvinceOriginChange) {
      onProvinceOriginChange(v);
    }
    currentProvince.value = v;
    onCityChange("");
    onAreaChange("");
  };
  const ProvinceSelect = (props: any, context: any) => {
    const provinceOptions = createOptionVNodes(cityTree);
    onProvinceOriginChange = context.attrs["onUpdate:modelValue"];
    currentProvince.value = context.attrs.modelValue;
    return createVNode(
      ElSelect,
      {
        ...context.attrs,
        placeholder: "请选择",
        "onUpdate:modelValue": onProvinceChange,
      },
      provinceOptions
    );
  };

  //   市
  const currentCity = ref<string>("");
  let onCityOriginChange: Fun;
  const onCityChange = (v: string) => {
    if (onCityOriginChange) {
      onCityOriginChange(v);
    }
    currentCity.value = v;
    onAreaChange("");
  };
  const cities = computed(() => {
    return cityTree.find((t) => t.id == currentProvince.value)?.children ?? [];
  });
  const CitySelect = (props: any, context: any) => {
    const cityOptions = createOptionVNodes(cities.value);
    onCityOriginChange = context.attrs["onUpdate:modelValue"];
    return createVNode(
      ElSelect,
      {
        ...context.attrs,
        placeholder: "请选择",
        "onUpdate:modelValue": onCityChange,
      },
      cityOptions
    );
  };

  //   区
  let onAreaOriginChange: Fun;
  const onAreaChange = (v: string) => {
    if (onAreaOriginChange) {
      onAreaOriginChange(v);
    }
  };
  const areas = computed(() => {
    if (currentProvince.value == null && currentCity.value == null) {
      return [];
    }
    return cities.value.find((t) => t.id == currentCity.value)?.children ?? [];
  });
  const AreaSelect = (props: any, context: any) => {
    const areaOptions = createOptionVNodes(areas.value);
    onAreaOriginChange = context.attrs["onUpdate:modelValue"];
    return createVNode(
      ElSelect,
      {
        ...context.attrs,
        placeholder: "请选择",
        "onUpdate:modelValue": onAreaChange,
      },
      areaOptions
    );
  };
  return {
    ProvinceSelect,
    CitySelect,
    AreaSelect,
  };
};
