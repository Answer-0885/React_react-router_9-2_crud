import { Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import ViewPostPage from './pages/ViewPostPage';
import PostsProvider from './components/PostsProvider';
import './App.css';

const App = () => {
  return (
    <PostsProvider>
      <div className="App">
        <Routes>
            <Route path='/posts/new' element={<NewPostPage/>}/>
            <Route path='/posts/:id' element={<ViewPostPage />}/>
            <Route exact path='/' element={<HomePage/>}/>
            <Route element={<Page404/>}/>
        </Routes>
      </div>
    </PostsProvider>
  );
}

export default App;