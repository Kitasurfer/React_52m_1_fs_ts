import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        <li><Link to="/clients/google">Google</Link></li>
        <li><Link to="/clients/apple">Apple</Link></li>
        <li><Link to="/clients/microsoft">Microsoft</Link></li>
      </ul>
    </div>
  );
};

export default Clients;
