import AddTodo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className='max-w-[540px] mx-auto py-[70px]'>
      <h1 className='text-[40px] text-white font-bold uppercase tracking-[15px] mb-[40px]'>
        Todo
      </h1>
      <AddTodo />
    </div>
  );
}

export default App;
