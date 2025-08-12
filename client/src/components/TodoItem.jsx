const TodoItem = ({ todoItem, onToggleCompleted }) => {
  const { id, text, completed } = todoItem;

  return (
    <div className='flex items-center w-full h-[64px] p-[20px_24px] bg-white rounded-[5px]'>
      {/* Hidden real checkbox */}
      <input
        id={`todo-${id}`}
        type='checkbox'
        checked={completed}
        className='peer hidden'
        onChange={() => onToggleCompleted(id)}
      />
      {/* Visual checkbox */}
      <span className='relative w-[24px] h-[24px] rounded-full border border-[#E3E4F1] mr-[24px] cursor-pointer peer-checked:before:absolute peer-checked:before:content-[""] peer-checked:before:w-[10px] peer-checked:before:h-[8px] peer-checked:before:bg-[url("/icons/icon-check.svg")] peer-checked:before:bg-no-repeat peer-checked:before:bg-center peer-checked:before:bg-cover peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2 peer-checked:border-0 peer-checked:bg-linear-to-r peer-checked:from-[#55DDFF] peer-checked:to-[#C058F3]' />
      <label
        htmlFor={`todo-${id}`}
        className={`select-none cursor-pointer ${
          completed ? 'line-through text-[#D1D2DA]' : ''
        }`}
      >
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
