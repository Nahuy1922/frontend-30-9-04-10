import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import InputFocus from "./components/InputFocus";
import { UserProvider, ShowUser } from "./components/UserContext";

function App() {
  return (
    <div>
      <h1>React Hook Demo</h1>
      <Counter />
      <TodoList />
      <InputFocus />
      <UserProvider>
        <ShowUser />
      </UserProvider>
    </div>
  );
}

export default App;
