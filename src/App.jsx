import "./App.css";
import Tictactoe from "./tictactoe/Tictactoe";

function App() {
  return (
    <>
      <section className="w-screen h-screen  flex justify-start gap-10 flex-col items-center">

          <Tictactoe></Tictactoe>

      </section>
    </>
  );
}

export default App;
