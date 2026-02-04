# Image Input Folder

Drop your **uncompressed, original images** here.

## How to Use

1. **Add images** to this folder (any format: WebP, PNG, JPG)
2. **Run** `npm run optimize-images`
3. **Get optimized images** in `public/images-out/`

The script will create:
- Compressed default version (`.webp`)
- Responsive variants (`-400w.webp`, `-800w.webp`, `-1200w.webp`)

## Important

- Images in this folder are **never modified**
- You can run the script multiple times safely
- Already processed images are automatically skipped
- You can organize images in subdirectories (structure will be preserved in output)

## After Processing

Once you're happy with the results:
1. Copy optimized images from `images-out/` to your target location
2. Clear this folder (or keep originals as backup)
