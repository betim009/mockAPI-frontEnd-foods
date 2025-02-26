import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <Form className="mt-5">
            <Row style={{ backgroundColor: "#ededed", padding: "10px", borderRadius: "10px" }}>
                <Form.Group
                    as={Col}
                    md={12} lg={5}
                    className="mb-3"
                    controlId="formGroupName"
                >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="nome completo" />
                </Form.Group>
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
                    md={12} lg={2}
                    className="mb-3"
                    controlId="formGroupTel"
                >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" placeholder="27 99881234" />
                </Form.Group>
                <Form.Group
                    as={Col}
                    md={12} lg={6}
                    className="mb-3"
                    controlId="formGroupPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                    as={Col}
                    md={12} lg={6}
                    className="mb-3"
                    controlId="formGroupPassword2">
                    <Form.Label>Repetir senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                    as={Col}
                    md={12} lg={10}
                    className="mb-3"
                    controlId="formGroupAddress">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Avenida..." />
                    <Form.Text className="text-muted">
                        Estabelicimento da cidade de Vitória/ES.
                    </Form.Text>
                </Form.Group>
                <Form.Group
                    as={Col}
                    md={12} lg={2}
                    className="mb-3"
                    controlId="formGroupNumber">
                    <Form.Label>Nº</Form.Label>
                    <Form.Control type="number" placeholder="15" />
                </Form.Group>

                <Col>
                    <Button
                        variant="danger"
                        type="submit"
                        className="mb-2">
                        Cadastrar
                    </Button>
                </Col>
            </Row>
        </Form>

    )
}