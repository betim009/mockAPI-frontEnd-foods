import "./home.css";
import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";


export default function Home() {
  const { data } = useFetch();
  const { handlePlus, handleMinus } = useCart();

  console.log(data)
  return (
    <main>
      <Container>
        <Row className="mt-5">
          {data.map(e => (
            <Col lg={6} key={e.id}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={e.urlImg} alt="notFound" class="img-thumb rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{e.name}</h5>
                      <p className="card-text">{e.details}</p>
                      <p className="card-text"><small className="text-body-secondary">
                        {e.price}
                      </small></p>
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
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
