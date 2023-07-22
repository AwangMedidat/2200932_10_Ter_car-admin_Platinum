import TYPES from "../types";
import auth from "../utils/auth";

const initState = {
  user: auth.getAuth ?? null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.POST_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
