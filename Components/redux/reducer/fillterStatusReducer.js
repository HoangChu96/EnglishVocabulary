const fillterStatusReducer = (state='SHOW_ALL', action) =>{
  if(action.type === 'Tab_SHOW_ALL') return 'SHOW_ALL';
  if(action.type === 'Tab_MEMORIZED') return 'MEMORIZED';
  if(action.type === 'Tab_NEED_PRACTICE') return 'NEED_PRACTICE';
  return state;
};

export default fillterStatusReducer;
