import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_LIST,
  REMOVE_LIST,
} from "../actions/actionTypes";
import products from "../products/products";

const initState = {
  items: products,
  addedItems: [],
  total: 0,
  addList: [],
};
const cartReducer = (state = initState, action) => {
  if (action.type === ADD_ITEM) {
    let addItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addItem.quantity += 1;
      return {
        ...state,
        total: state.total + addItem.price,
      };
    } else {
      addItem.quantity = 1;
      let newTotal = state.total + addItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addItem],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_LIST) {
    let addItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addList.find((item) => action.id === item.id);

    if (existed_item) {
      let new_items = state.addList.filter((item) => action.id !== item.id);

      return {
        ...state,
        addList: new_items,
      };
    } else {
      addItem.quantity = 1;

      return {
        ...state,
        addList: [...state.addList, addItem]
      };
    }
  }

  if (action.type === REMOVE_LIST) {
    let itemToRemove = state.addList.find((item) => action.id === item.id);
    let new_items = state.addList.filter((item) => action.id !== item.id);

    //calculating the total
    console.log(itemToRemove);
    return {
      ...state,
      addList: new_items,
    };
  } else {
    return state;
  }
};

export default cartReducer;
