import { useState, useContext } from 'react'
import PostsContext from '../context/PostsContext';
import { useNavigate } from "react-router-dom";
import AddForm from '../components/AddForm';

const NewPostPage = () => {
  const { handlePush } = useContext(PostsContext);
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    handlePush({ content: value });
    navigate('/');

  };

  return (
    <AddForm
      fields={[{ name: 'content', label: 'Создать пост:', value: value }]}
      onChange={(_, value) => setValue(value)}
      onSubmit={handleSubmit}
    />
  )
}
export default NewPostPage;