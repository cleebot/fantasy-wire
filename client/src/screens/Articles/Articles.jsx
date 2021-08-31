import { Link } from 'react-router-dom';

export default function Articles(props) {

  const { articles, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Articles</h3>
      <Link to='/articles/new'>
        <button>Create an Article!</button>
      </Link>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles.map((article) => (
        <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
          <img className="mx-auto" src={`${article.img_url}`}
      alt={`${article.name}`}
        />
            <p className="text-1xl font-bold text-gray-600">{article.title}</p>
          </Link>   
            <div>
              <Link to={`/articles/${article.id}/edit`}>
                <button className="mr-4 text-gray-600">Edit</button>
              </Link>
              <button className="text-gray-600" onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
            </div>
            </div>
      )
        )}
        </div>
      {/* <Link to='/articles/new'>
        <button>Create</button>
      </Link> */}
    </div>
  )
}
