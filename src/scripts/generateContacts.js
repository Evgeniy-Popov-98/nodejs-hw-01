import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';
import { createFakeContact } from '../createFakeContact/createFakeContact.js';

const generateContacts = async (number) => {
  let contactsArr = [];
  for (let i = 0; i < number; i++) {
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
