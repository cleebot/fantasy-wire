import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getAllArticles } from '../../services/articles';

export default function ArticleEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
  })

  const { title, content, img_url, category_id } = formData;
  const { articles, handleUpdate, categories } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const articleItem = articles.find((article) => article.id === Number(id));
      setFormData({
        title: articleItem.title,
        content: articleItem.content,
        img_url: articleItem.img_url,
      })
    };
    if (articles.length) {
      prefillFormData()
    }
  }, [articles, id])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full"> 
        <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData)
          }}>
            <h3 className="mb-8 text-3xl text-center">Edit Article</h3>
        <label>
          Title:
          <input
            type='text'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='title'
            value={formData.title}
            onChange={handleChange}
            />
        </label>
        <label>
          Content:
          <input
            type='text'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='content'
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <label>
          Img_url:
          <input
            type='text'
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name='img_url'
            value={formData.img_url}
            onChange={handleChange}
            />
        </label>
        <select onChange={handleChange} name="category_id" value={category_id}>
            <option value="category">Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
          </select>
        <button>Submit</button>
          </form>
        </div>
      </div>
      </div>
  )
}
