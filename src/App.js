import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<Post />} />
    <Route path="/post/add" element={<PostAdd />} />
    <Route path="/post/edit/:id" element={<PostEdit />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
