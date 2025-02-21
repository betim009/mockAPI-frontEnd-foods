import './payment.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdArrowRoundBack } from "react-icons/io";
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
                    <Col md={12} lg={4}>
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
                                <h4>Formas de pagamento</h4>
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