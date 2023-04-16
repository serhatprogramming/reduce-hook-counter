import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Display />
      <Button label="-" type="DEC" />
      <Button label="reset" type="RES" />
      <Button label="+" type="INC" />
    </div>
  );
};

export default App;
