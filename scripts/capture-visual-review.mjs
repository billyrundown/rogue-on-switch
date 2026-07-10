import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.env.VISUAL_REVIEW_URL ?? 'http://127.0.0.1:4321';
const output = 'artifacts/visual-review';
const targets = [{ name: 'home-desktop', width: 1440, height: 1000 }, { name: 'home-mobile', width: 390, height: 844 }];

await mkdir(output, { recursive: true });
const browser = await chromium.launch();
try {
  for (const target of targets) {
    const page = await browser.newPage({ viewport: target });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${output}/${target.name}.png`, fullPage: true, animations: 'disabled', caret: 'hide', scale: 'css' });
    await page.close();
  }
} finally { await browser.close(); }
