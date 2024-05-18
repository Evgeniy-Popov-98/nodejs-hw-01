import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const thanos = async () => {
  let contactsArr;
  try {
    const data = await fs.readFile(PATH_DB);
    contactsArr = JSON.parse(data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }

  let newContactsArr = [];

  for (let i = 0; i < contactsArr.length; i++) {
    if (Math.random() >= 0.5) {
      newContactsArr.push(contactsArr[i]);
    }
  }
  console.log(newContactsArr.length);
};

await thanos();
