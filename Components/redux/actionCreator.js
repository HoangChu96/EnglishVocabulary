export function addWord(en, vn){
  return { type: 'ADD_WORD', en, vn };
}

export function toggleIsAdding(){
  return { type: 'TOGGLE_IS_ADDING' };
}

export function fillterStatus(actionType){
  return { type: actionType}
}

export function tabShowAll(){
  return {type: 'Tab_SHOW_ALL'};
}

export function tabMemorized(){
  return {type: 'Tab_MEMORIZED'};
}

export function tabNeedPractice(){
  return {type: 'Tab_NEED_PRACTICE'};
}

export function memorizedWord(id){
  return {type: 'TOGGLE_MEMORIZED', id };
}

export function showWord(id){
  return { type: 'TOGGLE_SHOW', id };
}
