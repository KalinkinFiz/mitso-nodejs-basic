import { promises } from 'fs';

const copy = async () => {
  const sourceDir = './files';
  const destinationDir = './files_copy';

  try {
    // Проверяем на существование
    await promises.access(sourceDir);
    await promises.access(destinationDir);

    console.error('FS operation failed!');
  } 
  catch (error) {
    await promises.mkdir(destinationDir);

    // Получаем список файлов в папке files
    const files = await promises.readdir(sourceDir);

    // Копируем каждый файл из папки files в папку files_copy
    await Promise.all(
      files.map(async (file) => {
        const sourceFile = `${sourceDir}/${file}`;
        const destinationFile = `${destinationDir}/${file}`;

        // Читаем содержимое файла
        const fileContent = await promises.readFile(sourceFile);

        // Создаем новый файл в папке files_copy и записываем в него содержимое
        await promises.writeFile(destinationFile, fileContent);
      })
    );

    console.log('Files copied successfully!');
  }
};

copy();