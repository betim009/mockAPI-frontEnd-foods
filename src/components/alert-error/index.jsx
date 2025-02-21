import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Context from '../../context/Context';
import { TfiClose } from "react-icons/tfi";

export default function AlertError() {
    const { errorCart, setErrorCart } = useContext(Context);

    return (
        <>
            <Alert show={errorCart} variant="danger">
                <Alert.Heading>O carrinho está vazio!</Alert.Heading>
                <p>
                    Adicione algum produto no seu carrinho de compra.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setErrorCart(false)} variant="outline-danger">
                        <TfiClose />
                    </Button>
                </div>
            </Alert>
        </>
    )
}