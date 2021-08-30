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
      setFormData({ title: articleItem.title })
    }
    if (articles.length) {
      prefillFormData()
    }
  }, [articles, id])
  
  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [title]: value
    }))
  }

  return (
    <div>
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
            value={FormData.content}
            onChange={handleChange}
          />
        </label>
        <label>
          Img_url:
          <input
            type='text'
            name='img_url'
            value={FormData.img_url}
            onChange={handleChange}
            />
        </label>
      </form>
      
    </div>
  )
}
