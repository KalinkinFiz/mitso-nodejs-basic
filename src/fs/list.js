import { promises } from 'fs';

const list = async () => {
  try {
    const directoryPath = './files';

    // проверяем, существует ли папка
    const directoryExists = await promises.access(directoryPath).then(() => true).catch(() => false);

    // если папка не существует, выбрасываем ошибку
    if (!directoryExists) {
      throw new Error(`FS operation failed: ${directoryPath} does not exist.`);
    }

    // получаем массив имен файлов в папке
    const files = await promises.readdir(directoryPath);
    console.log(files);
  } catch (error) {
    console.error(error.message);
  }
};

await list();