import './myCard.css'
import useCart from "../../hooks/useCart";
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from "react-bootstrap";

export default function MyCard({ array }) {
    const { handlePlus, handleMinus } = useCart();

    return (
        <>
            {
                array.map(e => (
                    <Col lg={6} key={e.id} className="mb-2">
                        <Card>
                            <Row>
                                <Col sm={12} md={6} lg={5} className='col-thumb'>
                                    <img src={e.urlImg} alt="notFound" className="img-thumb rounded-start" />
                                </Col>
                                <Col sm={12} md={6} lg={7} className='col-body'>
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.details}</p>
                                    <h4 className="cart-text mb-3">
                                        {e.price}
                                    </h4>
                                    <div className="div-cart">
                                        <Button
                                            variant="danger"
                                            onClick={() => handlePlus(e)}
                                        >
                                            +
                                        </Button>
                                        <p className='text-price'>{e.count}</p>
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
                ))
            }
        </>
    )
}