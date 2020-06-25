import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TODO = gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation toggleTodo($id: uuid!, $done: Boolean!) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

//add todos
//toggle todos
//delete todos
//list todos
function App() {
  const { data, loading, error } = useQuery(GET_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  function handleToggleTodo({ id, done}){
    toggleTodo({variables: { id: id, done: done, }})
  }

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>Error fetching todos</div>;
  return (
    <div className="vh-100 code flex flex-column items-center bg-purple white pa3 fl-1">
      <h1 className="f2-l">
        Graphql Checklist{" "}
        <span role="img" aria-label="Checkmark">
          🦄
        </span>
      </h1>
      {/*Todo Form */}
      <form className="mb3">
        <input
          className="pa2 f4 b--dashed"
          type="text"
          placeholder="Write your todo"
        />
        <button className="pa2 f4 bg-green" type="submit">
          Create
        </button>
      </form>
      {/*Todo List */}
      <div className="flex items-center justify-center flex-column">
        {data.todos.map((todo) => (
          <p onDoubleClick={() => handleToggleTodo(todo)} key={todo.id}>
            <span className="pointer list pa1 f3">{todo.text}</span>
            <button className="bg-transparent bn f4">
              <span className="red">&times;</span>
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
