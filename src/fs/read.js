import { promises } from 'fs';
const read = async () => {
   const filePath = './files/fileToRead.txt';

    // проверяем, существует ли файл
    const fileExists = await promises.access(filePath).then(() => true).catch(() => false);

    // если файл не существует, выбрасываем ошибку
    if (!fileExists) {
      throw new Error(`FS operation failed: ${filePath} does not exist.`);
    }

  try {
    const fileContent = await promises.readFile(filePath, 'utf-8');
    console.log(`File content of ${filePath}:`, fileContent);
  } catch (error) {
    console.error(error.message);
  }
};

await read();