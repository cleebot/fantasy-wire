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
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
          <img className="mx-auto" src={`${article.img_url}`}
      alt={`${article.name}`}
        />
            <p>{article.title}</p>
          </Link>   
            <div>
              <Link to={`/articles/${article.id}/edit`}>
                <button className="mr-4">Edit</button>
              </Link>
              <button onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        </div>
      )
        )}
      {/* <Link to='/articles/new'>
        <button>Create</button>
      </Link> */}
    </div>
    </div>
  )
}
