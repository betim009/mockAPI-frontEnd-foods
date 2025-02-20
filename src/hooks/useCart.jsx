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
        if (product.count <= 0) return null;
        setData([...data]);
    };

    const someCart = data.reduce(
        (acc, element) => acc + parseFloat(element.price) * element.count, 0);

    const cart = data.filter(e => e.count > 0);

    return {
        handlePlus,
        handleMinus,
        cart,
        someCart
    };
}
