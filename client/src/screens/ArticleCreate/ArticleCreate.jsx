import { useState } from 'react'

export default function ArticleCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
    category_id: '',
  });

  const { title, content, img_url, category_id } = formData;
  const { handleCreate, categories } = props;

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3 class="mb-8 text-3xl text-center">Create Article</h3>
      <label>
        Title:
        <input
        type='text'
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name='title'
        value={title}
        onChange={handleChange} />
      </label>
      <label>
        Content:
        <input
        type='text'
        name='content'
        class="block border border-grey-light w-full p-3 rounded mb-4"
        value={content}
        onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type='text'
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name='img_url'
        value={img_url}
        onChange={handleChange} />
      </label>
      <select onChange={handleChange} name="category_id" value={category_id}>
            <option value="category">Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
            </select>
            <br />
            <br />
      <button type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

