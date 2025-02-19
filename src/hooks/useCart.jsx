import { useContext, useState } from "react";
import Context from "../context/Context";

export default function useCart() {
    const { data, setData } = useContext(Context);

    const handlePlus = (product) => {
        product.count += 1;
        setData([...data]);
    };

    const handleMinus = (product) => {
        product.count -= 1;
        setData([...data]);
    };

    return {
        handlePlus,
        handleMinus
    };
}
