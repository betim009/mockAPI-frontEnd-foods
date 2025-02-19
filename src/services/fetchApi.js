import axios from "axios"

export const fetchAll = async (url) => {
    try {
        const req = await axios.get(url);
        return req.data;
    } catch (error) {
        return error;
    }
};

export const fetchNewPost = async (url, postData) => {
    try {
        const response = await axios.post(url, postData);
        console.log('Post criado:', response.data);
        return response;
    } catch (error) {
        console.error('Erro ao criar post:', error);
        return error
    }
};