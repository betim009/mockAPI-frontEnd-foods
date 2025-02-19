import useFetch from "../../hooks/useFetch";
import "./home.css";
import Container from 'react-bootstrap/Container';

export default function Home() {
  const { data } = useFetch();

  console.log(data)
  return (
    <main>
      <Container>
        {data.map(e => (
          <div key={e.id}>
            <img src={e.urlImg} alt="notFound" style={{width: "120px"}}/>
            <h5>{e.name}</h5>
            <p>R${e.price}</p>
            <p><strong>Igredientes:</strong> {e.details}</p>
            <button>+</button>
            <button>-</button>
          </div>
        ))}
      </Container>
    </main>
  );
}
