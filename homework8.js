import axios from "axios";

//повертаю не весь респонс, а лише частину data через деструктурізацію
//не вказую конкретний id в лінці а передаю id як змінну
const fetchComments = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    return data;
  } catch {
    throw "Incorrect comments request";
  }
};

const fetchPosts = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  } catch {
    throw "Incorrect posts request";
  }
};

//.allSettled повертає помилку якщо хоч один запит зафейлився
Promise.allSettled([fetchComments(1), fetchPosts(234534545)])
  .then((results) => results.forEach((result) => console.log(result)))
  .catch((error) => {
    console.log("Error", error);
  });

//.all навіть якщо один з запитів зафейлився, .all повертає результат для коректного запиту
Promise.all([fetchComments(342343), fetchPosts(4)])
  .then((results) => results.forEach((result) => console.log(result)))
  .catch((error) => {
    console.log("Error", error);
  });
