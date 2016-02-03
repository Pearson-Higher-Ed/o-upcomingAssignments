/*
*--------------Actions Types------------------------
*/

// Move Higlight...
export const INCREMENT_WEEKOFFSET = 'INCREMENT_WEEKOFFSET'
export const DECREMENT_WEEKOFFSET = 'DECREMENT_WEEKOFFSET'
export const RESET_WEEKOFFSET     = 'RESET_WEEKOFFSET'


export function incrementWeekoffset(){
  return{
    type : INCREMENT_WEEKOFFSET
  }
}

export function decrementWeekOffset(){
  return{
    type : DECREMENT_WEEKOFFSET
  }
}

export function resetWeekOffset(){
  return{
    type : RESET_WEEKOFFSET
  }
}
