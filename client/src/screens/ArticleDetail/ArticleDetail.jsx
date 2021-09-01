import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArticle } from "../../services/articles";
import { Link } from "react-router-dom";

export default function ArticleDetail(props) {
  const [articleItem, setArticleItem] = useState(null);
  const [category] = useState('');
  const { id } = useParams();

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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
      <img className="w-full" src={`${articleItem?.img_url}`}
      alt={`${articleItem?.name}`}
        />
        <h1>{category?.name}</h1>
        <h1 className="text-2xl font-bold text-gray-600">{articleItem?.title}</h1>
      <p className="mt-2 text-lg font-semibold text-gray-600">{articleItem?.content}</p>   
            <div>
              <Link to={`/articles/${articleItem?.id}/edit`}>
                <button className="mr-4 text-gray-600">Edit</button>
              </Link>
      </div>
      </div>
    </div>
  )
}

