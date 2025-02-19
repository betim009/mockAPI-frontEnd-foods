import "./home.css";
import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


export default function Home() {
  const { dataLanches, dataBebidas } = useFetch();
  const { handlePlus, handleMinus } = useCart();

  console.log(dataLanches)
  return (
    <main>
      <Container>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Lanches</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mt-5">
                {dataLanches.map(e => (
                  <Col lg={6} key={e.id} className="mb-2">
                    <Card>
                      <Row>
                        <Col sm={12} md={6} lg={5}>
                          <img src={e.urlImg} alt="notFound" class="img-thumb rounded-start" />
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                          <h5 className="card-title">{e.name}</h5>
                          <p className="card-text">{e.details}</p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              {e.price}
                            </small>
                          </p>
                          <div className="d-flex gap-3">
                            <Button
                              variant="danger"
                              onClick={() => handlePlus(e)}
                            >
                              +
                            </Button>
                            <h3>{e.count}</h3>
                            <Button
                              variant="danger"
                              onClick={() => handleMinus(e)}
                            >
                              -
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>Bebidas</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="mt-5">
                {dataBebidas.map(e => (
                  <Col lg={6} key={e.id} className="mb-2">
                    <Card>
                      <Row>
                        <Col sm={12} md={6} lg={5}>
                          <img src={e.urlImg} alt="notFound" class="img-thumb rounded-start" />
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                          <h5 className="card-title">{e.name}</h5>
                          <p className="card-text">{e.details}</p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              {e.price}
                            </small>
                          </p>
                          <div className="d-flex gap-3">
                            <Button
                              variant="danger"
                              onClick={() => handlePlus(e)}
                            >
                              +
                            </Button>
                            <h3>{e.count}</h3>
                            <Button
                              variant="danger"
                              onClick={() => handleMinus(e)}
                            >
                              -
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>



      </Container>
    </main>
  );
}
