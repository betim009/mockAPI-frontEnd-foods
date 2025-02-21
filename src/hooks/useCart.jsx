import { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function useCart() {
    const { data, setData, errorCart, setErrorCart } = useContext(Context);

    const navigate = useNavigate();

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
        (acc, element) => acc + parseFloat(element.preco) * element.count, 0);

    const cart = data.filter(e => e.count > 0);

    const handleSubmitPayment = () => {
        if (someCart === 0) {
            return setErrorCart(true)
        };
        return navigate("/payment");
    }

    return {
        handlePlus,
        handleMinus,
        cart,
        someCart,
        handleSubmitPayment,
        errorCart
    };
}
