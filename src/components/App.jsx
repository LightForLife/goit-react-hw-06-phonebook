import { useState, useEffect } from 'react';
import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
        { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
        { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
        { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
      ]
    );
  });

  // const initialState = {
  //   contacts: [
  //     { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
  //     { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
  //     { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
  //     { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
  //   ],
  //   filter: {
  //     status: 'all',
  //   },
  // };

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addItemContact = contacts => {
    const { id, name, number } = contacts;
    const itemContact = {
      id,
      name,
      number,
    };

    setContacts(state => [itemContact, ...state]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const constNormalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  const onDeleteContact = id => {
    const filterContacts = contacts.filter(contact => contact.id !== id);

    setContacts([...filterContacts]);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addItemContact={addItemContact} contacts={contacts} />
        <SearchTitle>Contacts</SearchTitle>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ListContacts
          contacts={getVisibleContacts()}
          onDelete={onDeleteContact}
        />
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
