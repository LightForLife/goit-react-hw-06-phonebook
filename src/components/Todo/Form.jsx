import React from 'react';

const Form = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input value={text} onChange={e => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default Form;
