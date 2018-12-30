import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
      dedault: return state;
  }
}

// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(thunk));
let store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)));
// store.subscribe(() => console.log(store.getState()));

export default store;
