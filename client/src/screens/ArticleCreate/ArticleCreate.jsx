import { useState } from 'react'

export default function ArticleCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
  });

  const { title, content, img_url, category_id } = formData;
  const { handleCreate, categories } = props;
//deconstruct categories
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Article</h3>
      <label>
        Title:
        <input type='text' name='title' value={title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <input type='text' name='content' value={content} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type='text' name='img_url' value={img_url} onChange={handleChange} />
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
  );
}

