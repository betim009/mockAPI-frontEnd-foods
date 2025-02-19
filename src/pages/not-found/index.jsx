import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
  return (
    <>
      <header className="header-notFound">
        <h4>App</h4>
      </header>
      <main className="main-notFound">
        <div>
          <h2>Page Not Found</h2>
          <Link to="/">Back to home</Link>
        </div>
      </main>
    </>
  );
}
