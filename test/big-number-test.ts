import { romanize } from "../dist/index.js";

console.log("=== BIG NUMBER TEST ===");
const numbers = [5000, 10000, 123456];
numbers.forEach(n => console.log(`${n} → ${romanize(n)}`));
