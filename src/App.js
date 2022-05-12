import "./App.css";
import TodoInput from "./Components/todo/TodoInput";
import TodoList from "./Components/todo/TodoList";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
