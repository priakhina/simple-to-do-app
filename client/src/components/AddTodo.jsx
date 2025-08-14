import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newTodo = { text };
    onAdd(newTodo);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center w-full h-[64px] p-[20px_24px] bg-white dark:bg-[#25273D] rounded-[5px] before:block before:shrink-0 before:content-[""] before:w-[24px] before:h-[24px] before:bg-[url("/icons/icon-check-default-light.svg")] dark:before:bg-[url("/icons/icon-check-default-dark.svg")] before:bg-no-repeat before:mr-[24px]'>
        <input
          id='todo'
          type='text'
          placeholder='Create a new todo...'
          className='w-full outline-none bg-transparent placeholder-[#9495A5] dark:placeholder-[#767992]'
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </div>
    </form>
  );
};

export default AddTodo;
