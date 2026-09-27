// pairs.js：数对，一次扫描给出每对是否相等与最长连续相等段
import { sameAt } from "./same.js";

export function countEqualPairs(values) {
  if (!Array.isArray(values) || values.length < 2) {
    const error = new Error("需要至少两个数值才能数相邻相等的对");
    error.code = "E_TOO_SHORT";
    throw error;
  }
  const flags = new Array(values.length - 1);
  let longest = 0;
  let run = 0;
  for (let spot = 0; spot < values.length - 1; spot += 1) {
    const same = sameAt(values, spot);
    flags[spot] = same;
    if (same) {
      run += 1;
      if (run + 1 > longest) longest = run + 1;
    } else {
      run = 0;
    }
  }
  return { flags: flags, longest: longest };
}
