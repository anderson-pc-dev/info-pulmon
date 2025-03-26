import Button from "react-bootstrap/Button";
import './Home.scss';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <Button variant="primary">
        Click me!
      </Button>

      <Button variant="secondary">
        Click me!
      </Button>

      <Button variant="warning">
        Click me!
      </Button>
    </div>
  );
};

export default Home;