import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    console.log('Вміст файлу:', JSON.parse(data));
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await getAllContacts());
