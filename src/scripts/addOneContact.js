import { PATH_DB } from '../constants/constants.js';
import { createFakeContact } from '../createFakeContact/createFakeContact.js';

export const addOneContact = async () => {
  const oneContact = createFakeContact();

  try {
    await fs.writeFile('output.txt', oneContact, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await addOneContact();
