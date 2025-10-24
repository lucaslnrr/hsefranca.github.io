import fs from "fs";
import path from "path";

const outDir = path.resolve("out");
const docsDir = path.resolve("docs");

async function rmrf(dir) {
  await fs.promises.rm(dir, { recursive: true, force: true });
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function copyDir(src, dest) {
  await ensureDir(dest);
  const entries = await fs.promises.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isSymbolicLink()) {
      const link = await fs.promises.readlink(srcPath);
      await fs.promises.symlink(link, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  if (!fs.existsSync(outDir)) {
    console.error("out directory not found. Run `npm run build` first.");
    process.exit(1);
  }
  await rmrf(docsDir);
  await copyDir(outDir, docsDir);
  await fs.promises.writeFile(path.join(docsDir, ".nojekyll"), "");
  console.log("Exported static site from 'out' to 'docs' and added .nojekyll.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
