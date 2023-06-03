import axios from "axios";

export const fetchApi = async (word) => {
  try {
    const result = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return result.data[0];
  } catch (error) {
    console.log(error.message);
  }
};
