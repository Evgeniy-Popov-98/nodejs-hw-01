import fs from 'fs/promises';
import { PATH_DB } from '../constants/constants.js';
import { createFakeContact } from '../createFakeContact/createFakeContact.js';

const generateContacts = async (number) => {
  console.log(PATH_DB);
  let contactsArr = [];
  for (let i = 0; i < number; i++) {
    contactsArr.push(createFakeContact());
  }
  fs.writeFile(PATH_DB.parse, contactsArr);
  //   try {
  //     await fs.writeFile(PATH_DB, contactsArr);
  //     console.log('Дані успішно записані у файл.');
  //   } catch (err) {
  //     console.error('Помилка запису у файл:', err);
  //   }
};

await generateContacts(5);
