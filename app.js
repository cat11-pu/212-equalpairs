// app.js：渲染结果
import { sameAt } from "./same.js";
import { countEqualPairs } from "./pairs.js";

export function render(spec) {
  const values = spec.values || [];
  const view = countEqualPairs(values);
  const flags = view.flags || [];
  return { flags: flags, count: flags.filter((item) => item).length, longest: view.longest || 0,
           count_ok: flags.length === Math.max(0, values.length - 1), value_count: values.length,
           longest_ok: (view.longest || 0) <= values.length, tail: sameAt(values, 0) };
}
