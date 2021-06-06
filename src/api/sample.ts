import axios from 'axios';

// API sample:このデータは利用していません。実装サンプルです
export const getTodo = async (): Promise<void> => {
  try {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(response.data);
    await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  } catch (error) {
    console.error(error);
  }
};
