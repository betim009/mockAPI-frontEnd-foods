import "./home.css";
import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function Home() {
  const { data } = useFetch();
  const { handlePlus, handleMinus } = useCart();

  console.log(data)
  return (
    <main>
      <Container>
        {data.map(e => (
          <div key={e.id}>
            <img src={e.urlImg} alt="notFound" style={{ width: "120px" }} />
            <h5>{e.name}</h5>
            <p>R${e.price}</p>
            <p><strong>Igredientes:</strong> {e.details}</p>
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
        ))}
      </Container>
    </main>
  );
}
