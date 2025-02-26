import { Col, Container, Form } from "react-bootstrap";
import Login from "../../components/login";
import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import './signIn.css'

export default function SignIn() {
    const { userValidate, setUserValidate } = useContext(Context);

    useEffect(() => {
        if (!userValidate.start) {
            userValidate.start = true;
            setUserValidate({ ...userValidate });
        }
    }, [])

    const handleClickQuestion = () => {
        alert('')
    }

    function SingUp() {
        return (
            <>
                <Form>
                    <Form.Group
                        as={Col}
                        md={12} lg={5}
                        className="mb-3"
                        controlId="formGroupEmail"
                    >
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="seu@email.com" />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md={12} lg={5}
                        className="mb-3"
                        controlId="formGroupSenha"
                    >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="sua senha" />
                    </Form.Group>
                </Form>
            </>
        )
    }

    return (
        <main>
            <Container>
                {userValidate.email ? SingUp() : <Login />}

                <div className="div-question">
                    <p>Você já possui uma conta?
                        {" "}
                        <Link onClick={handleClickQuestion} className="text-danger">Faça Login</Link>
                    </p>
                </div>
            </Container>
        </main>
    )
}