export const initialState = {
  items: [
    {
      id: "",
      todo: "",
      status: "Active",
    },
  ],
};

export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, action.addtodo],
      };
    case "DEL_CART":
      return {
        items: state.items.filter((item) => item.id !== action.delCart.id),
      };

    default:
      return state;
  }
};

export default Todoreducer;
