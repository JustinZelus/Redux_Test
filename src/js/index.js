import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
// window.store = store;
// window.addArticle = addArticle;

// store.subscribe(() => console.log("Look ma, Redux!!"));
// store.dispatch({
//   type: "ADD_ARTICLE",
//   title: "React Redux Tutorial for Beginners",
//   id: 1
// });

// console.log(store.getState());
// store.getState();

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
