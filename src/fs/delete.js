import { promises } from 'fs';

const remove = async () => {
  try {
    const filePath = './files/fileToRemove.txt';

    // проверяем, существует ли файл
    const fileExists = await promises.access(filePath).then(() => true).catch(() => false);

    // если файл не существует, выбрасываем ошибку
    if (!fileExists) {
      throw new Error(`FS operation failed: ${filePath} does not exist.`);
    }

    // удаляем файл
    await promises.unlink(filePath);
    console.log('File successfully removed.');
  } catch (error) {
    console.error(error.message);
  }
};

await remove();