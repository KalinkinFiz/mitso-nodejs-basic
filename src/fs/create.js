import { promises as fs } from 'fs';

const create = async () => {
  // Определяем путь к файлу
  const filePath = './files/fresh.txt';

  // Определяем содержимое файла
  const fileContent = 'I am fresh and young';

  try {
    // Проверяем, существует ли файл
    await fs.access(filePath);

    // Если файл уже существует, выдаем ошибку
    console.error('FS operation failed)');
  } catch {
    // Если файл не существует, создаем его и записываем в него содержимое
    await fs.writeFile(filePath, fileContent);

    // Если файл успешно создан, выводим сообщение об успехе
    console.log('File created successfully!');
  }
};

create();