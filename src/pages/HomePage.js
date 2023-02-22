import { useContext } from 'react'
import PostsContext from '../context/PostsContext';
import { useNavigate, Link } from "react-router-dom";
import Card from '../components/Card';
import './HomePage.css';

const HomePage = () => {
  const { posts, loading } = useContext(PostsContext);
  const navigate = useNavigate();

  return (
    <div className='home'>
      <button className='new-post-btn'>
        <Link to='/posts/new'>{'Создать пост'}</Link>
      </button>
      <div className='body'>
        { loading && <div>{'Loading...'}</div> }
        { posts.map((o) => <Card data={o} key={o.id} onClick={() => navigate(`/posts/${o.id}`)} />) }
      </div>
    </div>
  )
}
export default HomePage;