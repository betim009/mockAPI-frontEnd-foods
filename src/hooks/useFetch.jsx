import { useState, useEffect, useContext } from "react";
import { fetchAll, fetchNewPost } from "../services/fetchApi";
import Context from "../context/Context";

export default function useFetch(initialValue = []) {
    const {data, setData} = useContext(Context);
    const [postData, setPostData] = useState({
        title: '',
        body: '',
        userId: 1,
    })

    useEffect(() => {
        const contentLoad = async () => {
            const url = "https://67b5223ba9acbdb38ed16600.mockapi.io/api/v1/foods";
            const result = await fetchAll(url);
            result.forEach(food => {
                food.count = 0;
            });
            setData(result);
        };


        contentLoad();
    }, []);

    const handleFormChangeSubmit = ({ target }) => {
        const { name, value } = target;
        const result = {
            ...postData,
            [name]: value
        };

        console.log(result);
        setPostData(result);
    };

    const handleSubmit = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const result = await fetchNewPost(url, postData);
        console.log(result);
        return result;
    };


    return {
        data,
        handleFormChangeSubmit,
        handleSubmit
    };
}
