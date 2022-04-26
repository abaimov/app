import axios from "axios";

const url = "http://127.0.0.1:5000";

export const getImagesAxios = async () => {
  return await axios.get(`${url}/pets/images/`);
};

export const login = async () => {
  await axios.post(`${url}/login`);
};

export const registration = async (payload) => {
  try {
    await axios
      .post(`${url}/registration`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
          "Content-Type": "application/json",
        },
      })
      .then((responce) => console.log(responce));
  } catch (error) {
    console.log(error);
  }
};
