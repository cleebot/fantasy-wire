import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleCreate from "../screens/ArticleCreate/ArticleCreate"; 
import ArticleDetail from "../screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "../screens/ArticleEdit/ArticleEdit";
import { getAllArticles, postArticle, putArticle, deleteArticle } from '../services/articles';
import { getAllCategories } from '../services/categories';
import Categories from "../screens/Categories/Categories";
import Articles from "../screens/Articles/Articles";


export default function MainContainer(props) {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchArticles = async () => {
      const articleList = await getAllArticles();
      setArticles(articleList)
    }
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      setCategories(categoryList)
    };
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    const articleData = await postArticle(formData);
    setArticles((prevState) => [...prevState, articleData]);
    history.push('/articles');
  };

  const handleUpdate = async (id, formData) => {
    const articleData = await putArticle(id, formData);
    setArticles((prevState) =>
      prevState.map((article) => {
        return article.id === Number(id) ? articleData : article;
      })
    );
    history.push(/articles/);
  };

  const handleDelete = async (id) => {
    await deleteArticle(id);
    setArticles((prevState) => prevState.filter((article) => article.id !== id));
  };

  return (
    <div>
      <h1>main container</h1>
      <Switch>
      <Route path='/categories'>
          <Categories categories={categories} />
        </Route>
        <Route path='/articles/:id/edit'>
          <ArticleEdit articles={articles} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/articles/new'>
          <ArticleCreate handleCreate={handleCreate} categories={categories} />
        </Route>
        <Route path='/articles/:id'>
          <ArticleDetail categories={categories}/>
        </Route>
        <Route path='/articles'>
          <Articles
            articles={articles}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
