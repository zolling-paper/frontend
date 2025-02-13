const REGEXP = {
  name: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/,
  nameReplace: /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/g,
  password: /^[0-9]*$/,
  passwordReplace: /[^0-9]/g,
};

export default REGEXP;
