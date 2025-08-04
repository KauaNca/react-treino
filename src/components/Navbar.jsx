import { Link } from "react-router-dom";
//O LINK é semelhante ao a href, mas é usado para navegação dentro do React Router e assim não recarrega a página.
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/helloword">HelloWorld</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
