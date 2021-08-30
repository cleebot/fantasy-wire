import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getAllArticles } from '../../services/articles';

export default function ArticleEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
  })
  const { articles, handleUpdate } = props;
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
    }))
  }

  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData)
      }}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            />
        </label>
        <label>
          Content:
          <input
            type='text'
            name='content'
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <label>
          Img_url:
          <input
            type='text'
            name='img_url'
            value={formData.img_url}
            onChange={handleChange}
            />
        </label>
        <button>Submit</button>
      </form>
  )
}
