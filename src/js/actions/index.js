import ADD_ARTICLE from "../constants/action-type";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
