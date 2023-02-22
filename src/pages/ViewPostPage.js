import { useState, useContext, useEffect } from 'react';
import PostsContext from '../context/PostsContext';
import { useNavigate, useParams } from "react-router-dom";
import Card from '../components/Card';
import Page404 from '../pages/Page404';

const ViewPostPage = () => {
  const { posts, handleRemove } = useContext(PostsContext);
  const navigate = useNavigate();
  const {id} = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) setPost(posts.find((o) => String(o.id) === id));
    return () => {};
  }, [posts, id]);

  const handleClose = () => {
    handleRemove(id);
    navigate('/');
  }

  return (post && <Card data={post} onClose={handleClose} />) || <Page404/>;
}
export default ViewPostPage;