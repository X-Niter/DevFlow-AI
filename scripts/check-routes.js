const fs = require("fs");
const path = require("path");

const requiredRoutes = [
  "src/pages/landing.tsx",
  "src/pages/onboarding/complete.tsx",
  "src/pages/admin/releases.tsx",
  "src/pages/index.tsx"
];

const missing = requiredRoutes.filter(route => !fs.existsSync(path.join(__dirname, "..", route)));

if (missing.length > 0) {
  console.error("❌ Missing required routes:");
  missing.forEach(file => console.error(" - " + file));
  process.exit(1);
} else {
  console.log("✅ All critical routes are present.");
}
