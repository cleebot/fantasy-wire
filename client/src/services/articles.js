import api from "./apiConfig";

export const getAllArticles = async () => {
  const res = await api.get("/articles");
  return res.data
};

export const getArticle = async (id) => {
  const res = await api.get(`/articles/${id}`);
  return res.data
}

export const postArticle = async (articleData) => {
  const res = await api.post("/articles", { article: articleData });
  return res.data;
}

export const putArticle = async (id, articleData) => {
  const res = await api.put(`/articles/${id}`, { article: articleData })
  return res.data
}

export const deleteArticle = async (id) => {
  const res = await api.delete(`/foods/${id}`);
  return res
}