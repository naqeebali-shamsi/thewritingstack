#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((child) => {
            copyRecursive(path.join(src, child), path.join(dest, child));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

const targetDir = process.cwd();
const sourceDir = path.join(__dirname, '..');

console.log('🚀 Initializing TheWritingStack...');

// Directories to copy
const dirsToCopy = ['.claude', '.planning', 'templates'];

dirsToCopy.forEach(dir => {
    const src = path.join(sourceDir, dir);
    const dest = path.join(targetDir, dir);

    if (fs.existsSync(src)) {
        console.log(`  Constructing ${dir}...`);
        copyRecursive(src, dest);
    }
});

console.log('\n✅ TheWritingStack installation complete!');
console.log('Run /series:init to begin your 30-day journey.');
