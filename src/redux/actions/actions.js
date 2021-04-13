import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_LIST,
  REMOVE_LIST
} from "./actionTypes.js";

//add cart action
export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const addList = (id) => {
  return {
    type: ADD_LIST,
    id,
  };
};

export const removeList = (id) => {
  return {
    type: REMOVE_LIST,
    id,
  };
};