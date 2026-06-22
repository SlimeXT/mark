const axios = require('axios');

// Ví dụ hàm lấy tất cả sách dùng async/await
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Bạn hãy thực hiện tương tự cho các hàm getByISBN, getByAuthor, getByTitle
