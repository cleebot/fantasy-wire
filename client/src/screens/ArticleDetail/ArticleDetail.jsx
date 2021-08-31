import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArticle } from "../../services/articles";
import { addCategorytoArticle } from "../../services/categories";

export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState(null);
  // const [category, setCategory] = useState('');
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchArticleItem = async () => {
      const articleData = await getArticle(id);
      setArticleItem(articleData);
    };
    fetchArticleItem();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setCategory(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const article = await addCategorytoArticle(id, category);
  //   setArticle(article);
  // };

  return (
    <div>
      <h3>Name: {articleItem?.title}</h3>
      <h4>Content: {articleItem?.content}</h4>
      <img className='articleimg' src={`${articleItem?.img_url}`}
      alt={`${articleItem?.name}`}
        />
    </div>
  )
}

