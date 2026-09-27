// pairs.js：数对，一次扫描，每对只比一次；最长段按「对数加一」口径
import { sameAt } from "./same.js";

export function countEqualPairs(values) {
  if (!Array.isArray(values) || values.length < 2) {
    const error = new Error("E_TOO_SHORT: values must contain at least two items");
    error.code = "E_TOO_SHORT";
    throw error;
  }
  const flags = [];
  let longest = 0;
  let run = 0;
  for (let spot = 0; spot + 1 < values.length; spot += 1) {
    const equal = sameAt(values, spot);
    flags.push(equal);
    if (equal) {
      run += 1;
      if (run + 1 > longest) longest = run + 1;
    } else {
      run = 0;
    }
  }
  return { flags: flags, longest: longest };
}
