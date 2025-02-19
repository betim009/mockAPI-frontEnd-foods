import "./home.css";
import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import MyCard from "../../components/my-card";


export default function Home() {
  const { dataLanches, dataBebidas } = useFetch();
  const { handlePlus, handleMinus } = useCart();

  console.log(dataLanches)
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
        <div className="d-grid gap-2 mt-5">
          <Button variant="danger" size="lg">
            Finalizar Compra
          </Button>
        </div>


      </Container>
    </main>
  );
}
