import fs from 'fs/promises';

//Function to read users data from files
export const readUsersFile = async () => {
  try {
    const fileData = await fs.readFile('data/users.json', 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.log('Errors reading users file: ', error);
    return [];
  }
}

//Function to read posts data from files
export const readPostsFile = async () => {
  try {
    const fileData = await fs.readFile('data/posts.json', 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.log('Error reading posts file: ', error);
    return [];
  }
}

//function to write data to users file
export const writeUsersFile = async(data) => {
  try {
    await fs.writeFile('data/users.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Data written to users file');
  } catch (error) {
    console.log('Error writing data to users file: ', error);
  }
}

//function to write data to posts file
export const writePostsFile = async(data) => {
  try {
    await fs.writeFile('data/posts.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Data written to users file');
  } catch (error) {
    console.log('Error writing data to users file: ', error);
  }
}













