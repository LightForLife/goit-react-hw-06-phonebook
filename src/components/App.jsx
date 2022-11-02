import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter />
        <ListContacts />
      </Container>
    </>
  );
}

// import { useState } from 'react';

// import TodoList from './Todo/TodoList';
// import Form from './Todo/Form';

// export function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState('');

//   const addTodo = () => {
//     if (text.trim().length) {
//       setTodos([
//         ...todos,
//         { id: new Date().toISOString(), text, completed: false },
//       ]);
//       setText('');
//     }
//   };

//   const removeTodo = todoId => {
//     console.log(todoId);
//     setTodos(todos.filter(todo => todo.id !== todoId));
//   };

//   const toggleTodoComplete = todoId => {
//     setTodos(
//       todos.map(todo => {
//         if (todo.id !== todoId) return todo;
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       })
//     );
//   };

//   return (
//     <div>
//       <Form text={text} handleInput={setText} handleSubmit={addTodo} />
//       <TodoList
//         todos={todos}
//         toggleTodoComplete={toggleTodoComplete}
//         removeTodo={removeTodo}
//       />
//     </div>
//   );
// }
