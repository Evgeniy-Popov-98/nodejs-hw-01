import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';
import { createFakeContact } from '../createFakeContact/createFakeContact.js';

const generateContacts = async (number) => {
  let contactsArr = [];

  try {
    const data = await fs.readFile(PATH_DB);
    contactsArr = JSON.parse(data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }

  const numberArr = number + contactsArr.length;

  for (let i = contactsArr.length; i < numberArr; i++) {
    contactsArr.push(createFakeContact());
  }

  const data = JSON.stringify(contactsArr);

  try {
    await fs.writeFile(PATH_DB, data);
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await generateContacts(5);
