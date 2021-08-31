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
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      <img class="mx-auto" src={`${articleItem?.img_url}`}
      alt={`${articleItem?.name}`}
        />
        <h1 class="text-2xl font-bold text-gray-600">{articleItem?.title}</h1>
      <p class="mt-2 text-lg font-semibold text-gray-600">{articleItem?.content}</p>
        </div>
    </div>
  )
}

