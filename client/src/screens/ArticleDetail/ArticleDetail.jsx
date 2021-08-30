import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArticle } from "../../services/articles";
import { addCategorytoArticle } from "../../services/categories";

export default function ArticleDetail(props) {
  const [article, setArticle] = useState(null);
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchArticle = async () => {
      const articleData = await getArticle(id);
      setArticle(articleData);
    };
    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = await addCategorytoArticle(id, category);
    setArticle(article);
  };

  return (
    <div>
      <h3>{article?.title}</h3>
    </div>
  )
}

