"use server";

import path from "path";
import { writeFile } from "fs/promises";

export const uploadImage = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    const res = await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      buffer,
    );
    console.log("File written successfully");
  } catch (error) {
    console.log("Error occured ", error);
  }
  return "/images/" + filename;
};
