import axios from "axios";

export const fetchApi = async (word) => {
  try {
    const result = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return result.data[0];
  } catch (error) {
    return { error: true };
  }
};

export const getUser = () => {
  return localStorage.getItem("user");
};
