import { copyFile, mkdir, readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../docs/client');
const destDir = path.join(__dirname, '../docs');

async function copyRecursive(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      await copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    await copyRecursive(srcDir, destDir);
    console.log('Copied docs/client contents to docs/ root');
  } catch (error) {
    console.error('Failed to copy docs/client to docs root:', error);
    process.exit(1);
  }
}

main();
