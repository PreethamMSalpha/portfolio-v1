const INITIAL_STATE = {
  open: false,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
