import { VPK } from "vpk2";

const vpkDirPath = "./vpk_dlc3/pak01_dir.vpk";

const vpk = new VPK(vpkDirPath);
vpk.load()

// Extract all files
vpk.extract("./extracted_dlc3");

// vpk.files.forEach(file => {


//   console.log(file);

//   // Get the file's data
//   const data = vpk.getFile(file);

//   if (!data) return;
//   if (!file.endsWith(".vtf")) return;

//   // Write the file to disk
//   writeFileSync(join("./extracted-vtf", file), data);

// })