import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "vi", gl: "VN" },
    headers: {
        "X-RapidAPI-Key": "44e66e19a6msh0c24136e2b05f2dp10a168jsn798c61561c8a",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
