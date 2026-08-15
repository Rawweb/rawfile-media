import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const INPUT = './raw-photos';
const OUTPUT = './public/gallery';

const CROPS = [
  { suffix: 'portrait', width: 800, height: 1000 }, // 4/5
  { suffix: 'tall', width: 700, height: 980 }, // 5/7
  { suffix: 'wide', width: 1200, height: 675 }, // 16/9
  { suffix: 'square', width: 800, height: 800 }, // 1/1
];

await mkdir(OUTPUT, { recursive: true });

const files = (await readdir(INPUT)).filter((f) =>
  /\.(jpg|jpeg|png|webp)$/i.test(f),
);

for (const file of files) {
  const name = file.replace(/\.[^.]+$/, '');
  const input = join(INPUT, file);

  for (const crop of CROPS) {
    await sharp(input)
      .resize(crop.width, crop.height, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 85 })
      .toFile(join(OUTPUT, `${name}-${crop.suffix}.jpg`));

    console.log(`✓ ${name}-${crop.suffix}.jpg`);
  }
}

console.log('Done.');
