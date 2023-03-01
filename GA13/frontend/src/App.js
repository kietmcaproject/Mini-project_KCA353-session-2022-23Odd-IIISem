import LinearStepper from "./LinearStepper";
import { Container, Paper, Box } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <>
    <div id="back">
      <div>
        <br/>
        <br/>
        <br/>
        
        <br/>
      </div>
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </div>
    </>
  );
}

export default App;
