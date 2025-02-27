import { Button, Col, Container, Form } from "react-bootstrap";
import SingUp from "../../components/singUp";
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import './signIn.css'
import Login from "../../components/login";

export default function SignIn() {
    const { userValidate, setUserValidate } = useContext(Context);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        if (!userValidate.start) {
            userValidate.start = true;
            setUserValidate({ ...userValidate });
        }
    }, [])

    const handleClickQuestion = () => {
        setDisplay((prev) => !prev)
    }


    return (
        <main>
            <Container className="container-signIn">
                {display ? <Login /> : <SingUp />}

                {display ?
                    <div className="div-question">
                        <p>Não possui uma conta?
                            {" "}
                            <Link onClick={handleClickQuestion} className="text-danger">Faça o seu cadastro</Link>
                        </p>
                    </div>
                    :
                    <div className="div-question">
                        <p>Você já possui uma conta?
                            {" "}
                            <Link onClick={handleClickQuestion} className="text-danger">Faça Login</Link>
                        </p>
                    </div>}
            </Container>
        </main>
    )
}