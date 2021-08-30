import api from "./apiConfig;"

export const getAllCategories = async () => {
  const res = await api.get("/categories");
  return res.data
};

export const addCategorytoArticle = async (categoryId, articleId) => {
  const res = await api.put(`/categories/${categoryId}/articles/${articleId}`);
  return res.data
};
