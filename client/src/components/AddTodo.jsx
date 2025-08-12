const AddTodo = () => {
  return (
    <form>
      <div className='flex items-center w-full h-[64px] p-[20px_24px] bg-white rounded-[5px] before:block before:shrink-0 before:content-[""] before:w-[24px] before:h-[24px] before:rounded-full before:border before:border-[#E3E4F1] before:mr-[24px]'>
        <input
          id='todo'
          type='text'
          placeholder='Create a new todo...'
          className='h-full w-full outline-none bg-transparent placeholder-[#9495A5]'
        />
      </div>
    </form>
  );
};

export default AddTodo;
