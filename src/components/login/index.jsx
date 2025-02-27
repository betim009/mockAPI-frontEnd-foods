import './login.css'
import { Button, Col, Container, Form } from "react-bootstrap";
export default function Login() {
    return (
        <div className="div-login">
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
                <Button
                    variant="danger"
                    size="md"
                >
                    Entrar
                </Button>
            </Form>
        </div>
    )
}
