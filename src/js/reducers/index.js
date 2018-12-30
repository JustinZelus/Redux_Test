import { ADD_ARTICLE } from "../constants/action-type";

const intialState = {
  articles: []
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // state = { ...state, articles: state.articles.concat(action.payload) };

      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
