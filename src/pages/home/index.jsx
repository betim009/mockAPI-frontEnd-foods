import "./home.css";
import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import MyCard from "../../components/my-card";
import AlertError from "../../components/alert-error";
import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const { dataLanches, dataBebidas } = useFetch();
  const { cart, someCart, handleSubmitPayment } = useCart();
  const { userValidate } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userValidate.start) {
      return navigate('/sign-in')
    }
  }, [])

  return (
    <main>
      <Container>

        <Accordion className="mt-5" defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Lanches</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <MyCard array={dataLanches} />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>Bebidas</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <MyCard array={dataBebidas} />
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div>
          <Row className="mt-3">
            {cart.map(e => (
              <Col md={12} lg={6} key={e.id}>
                <p className="fw-bold">{e.nome}</p>
                <p>{e.count} - {e.preco} x</p>
                <hr />
              </Col>
            ))}
          </Row>
          {someCart ? (<h4>Valor final: R$<small>{someCart.toFixed(2).replace(".", ",")}</small></h4>) : ""}
        </div>

        <AlertError />

        <div className="d-grid gap-2 mt-5 mb-5">
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleSubmitPayment()}
          >
            Finalizar Compra
          </Button>
        </div>




      </Container>
    </main >
  );
}
