import Heading from "./components/Heading";
import Container from "./components/Container";
import { Timer } from "lucide-react";
import "./styles/global.css";
import "./styles/themes.css";

function App() {
  return (
    <>
      <Container>
        <Heading title="Chronos Pomodoro">
          <button>
            <Timer />
          </button>
        </Heading>
      </Container>
    </>
  );
}
export default App;
