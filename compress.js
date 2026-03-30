import sharp from "sharp";
import fs from "fs";
import path from "path";

const folderPath = "./src/assets/images";

const compressImages = async () => {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      await sharp(filePath)
        .jpeg({ quality: 70 })
        .toFile(filePath + "_temp");

    } else if (file.endsWith(".png")) {
      await sharp(filePath)
        .png({ quality: 70, compressionLevel: 9 })
        .toFile(filePath + "_temp");

    } else {
      continue;
    }

    // overwrite same file
    fs.unlinkSync(filePath);
    fs.renameSync(filePath + "_temp", filePath);

    console.log("Compressed:", file);
  }

  console.log("Done!");
};

compressImages();