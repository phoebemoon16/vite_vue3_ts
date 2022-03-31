/*
 * @Author: wanghh
 * @Date: 2022-03-31 14:09:05
 * @LastEditors: wanghh
 * @LastEditTime: 2022-03-31 14:09:05
 * @Description:
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
