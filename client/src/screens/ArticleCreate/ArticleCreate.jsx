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
      <button type="submit"
      class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

