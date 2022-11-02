import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

// export function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <MainTitle>Phonebook</MainTitle>
//         <ContactForm />
//         <SearchTitle>Contacts</SearchTitle>
//         <Filter />
//         <ListContacts />
//       </Container>
//     </>
//   );
// }

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodoComplete } from './Todo/todoSlice';

import TodoList from './Todo/TodoList';
import Form from './Todo/Form';

export function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
  };

  // const removeTodo = todoId => {
  //   setTodos(todos.filter(todo => todo.id !== todoId));
  // };

  // const toggleTodoComplete = todoId => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
  // };

  return (
    <div>
      <Form text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
