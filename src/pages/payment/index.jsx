import './payment.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdArrowRoundBack } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'

export default function Payment() {
    const { someCart, cart } = useCart()

    const msgEmpty = () => {
        return (
            <div className='mt-5'>
                <h4>Carrinho está vazio.</h4>
                <p>Volte para a página inicial.</p>
                <Link className='icon-back-red' to="/"><IoMdArrowRoundBack size={30} /></Link>
            </div>
        )
    };

    console.log(cart)

    const createCart = () => {
        return (
            <Row>
                {cart.map(e => (
                    <Col key={e.id} md={12} lg={4}>
                        <img className="thumb-payment" src={e.imagem} />
                        <h4>{e.nome}</h4>
                        <p>{e.count}x R${e.preco.toFixed(2).replace(".", ",")}</p>
                    </Col>
                ))}
                <h4>Valor total da compra:
                    <small> R${someCart.toFixed(2).replace(".", ",")}</small>
                </h4>
            </Row>
        )
    }

    return (
        <main>
            <Container>
                <Row className='mt-5'>
                    {
                        cart.length === 0 ? null : (
                            <Col>
                                <section>
                                    <h4>Check-out</h4>
                                    <Form.Select size="lg" aria-label="Escolha uma forma de pagamento">
                                        <option value="" disabled selected>Escolha uma forma de pagamento</option>
                                        <option value="1">Cartão</option>
                                        <option value="2">Dinheiro</option>
                                        <option value="3">PIX</option>
                                    </Form.Select>
                                </section>

                                <fieldset className="mb-3 mt-3">
                                    <legend>Entrega ou retirar no local?</legend>
                                    <Form.Check
                                        className='check-payment'
                                        label="No local"
                                        name="group1"
                                        type="radio"
                                        id="radio-1"
                                    />
                                    <Form.Check
                                        className='check-payment'
                                        label="Na entrega"
                                        name="group1"
                                        type="radio"
                                        id="radio-2"
                                    />
                                </fieldset>
                            </Col>

                        )
                    }
                    <Col>
                        {cart.length === 0 ? msgEmpty() : createCart()}
                    </Col>

                </Row>

            </Container>
        </main >
    )
}