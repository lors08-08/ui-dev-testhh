const initialState = {
  loading: false,
  items: [],
};

function application(state = initialState, action) {
  switch (action.type) {
    case "items/load/start":
      return {
        ...state,
        loading: true,
      };
    case "items/load/succeed":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "items/load/error":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default application;
