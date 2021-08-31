import { Link } from 'react-router-dom';

export default function Articles(props) {

  const { articles, handleDelete, currentUser } = props;

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <h3>Articles</h3>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <p>{article.title}</p>
          </Link>   
            <div>
              <Link to={`/articles/${article.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        </div>
      )
        )}
      <Link to='/articles/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
