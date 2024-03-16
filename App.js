
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Post from './Post';
import PostLayout from './PostLayout';

function App() {
  return (
   <div>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Head' element={<Header />} />
    <Route path='/Navi' element={<Nav />} />
    <Route path='*' element={<Missing />} />
    <Route path='/Post' element={<PostLayout />}>
      <Route index element={<Postpage />} />
      <Route path='New'element={<Newpost />} />
      <Route path=':id' element={<Post />} />
    </Route>
    <Route path='/New' element={<Newpost />} />
    <Route path='/Foot' element={<Footer />} />
    <Route path='/Abo' element={<About />} />
    <Route path='/Post/:id' element={<Post />} />
   </Routes>
   </div>
   
  )
}

export default App;
