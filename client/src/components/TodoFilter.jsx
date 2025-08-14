const FILTER_STATES = ['all', 'active', 'completed'];

const BASE_BUTTON_CLASSES = 'capitalize transition-colors';
const ACTIVE_COLOR = 'text-[#3A7CFD]';
const INACTIVE_COLOR = 'text-[#9495A5] dark:text-[#5B5E7E]';
const HOVER_COLOR = 'hover:text-[#494C6B] dark:hover:text-[#E3E4F1]';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className='flex justify-center items-center gap-[20px] md:gap-[15px] text-[17px] md:text-[16px] font-semibold'>
      {FILTER_STATES.map((state) => (
        <button
          key={state}
          className={`${BASE_BUTTON_CLASSES} ${
            filter === state ? ACTIVE_COLOR : INACTIVE_COLOR
          } ${filter !== state ? HOVER_COLOR : ''}`}
          onClick={() => setFilter(state)}
        >
          {state}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
