import { romanize } from "../dist/index.js";

console.log("=== BASIC TEST ===");
console.log("123 →", romanize(123)); // CXXIII
console.log("2026 →", romanize(2026)); // MMXXVI
