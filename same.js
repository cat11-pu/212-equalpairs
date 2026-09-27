// same.js：比一对，后一个等于前一个算相等；越界返回假
export function sameAt(values, spot) {
  if (!Array.isArray(values) || spot < 0 || spot + 1 >= values.length) {
    return false;
  }
  return values[spot + 1] === values[spot];
}
