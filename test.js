import process from "node:process";
import test from "ava";
import { isIP, isIPv4, isIPv6 } from "is-ip";
import { ipv4, ipv6 } from "./index.js";

if (!process.env.CI) {
  test("main", async (t) => {
    t.true(isIP(await ipv4()));
  });
}

test("ipv4", async (t) => {
  t.true(isIPv4(await ipv4()));
});

test("ipv6", async (t) => {
  t.true(isIPv6(await ipv6()));
});
