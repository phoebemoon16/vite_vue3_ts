/*
 * @Author: wanghh
 * @Date: 2022-09-15 15:30:36
 * @LastEditors: wanghh
 * @LastEditTime: 2022-09-21 10:58:16
 * @Description:
 */
import { ref } from "vue";

interface Pagination {}

export const useTable = () => {
  const defaultProps = {
    size: "small",
    hover: true,
    pagination: {
      current: 1,
      pageSize: 20,
      total: 0,
      showPageSize: true,
    },
  };
};
