import assert from "node:assert";
import { sameAt } from "../same.js";
import { countEqualPairs } from "../pairs.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("sameAt returns a boolean", () => {
  assert.strictEqual(typeof sameAt([1, 2], 0), "boolean");
});

check("countEqualPairs returns flags", () => {
  assert.ok(Array.isArray(countEqualPairs([1, 2]).flags));
});

check("countEqualPairs returns longest", () => {
  assert.strictEqual(typeof countEqualPairs([1, 2]).longest, "number");
});

check("render counts flags", () => {
  assert.strictEqual(typeof render({ values: [1, 2] }).count, "number");
});

check("render exposes count flag", () => {
  assert.strictEqual(typeof render({ values: [1, 2] }).count_ok, "boolean");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
