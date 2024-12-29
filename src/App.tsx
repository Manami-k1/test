import ArticleList from './pages/ArticleList';
import Login from './pages/Login';
import LoginBk from './pages/LoginBk';
import Signup from './pages/Signup';
import Edit from './pages/Edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* 修正 */}
        <Route path='/article-list' element={<ArticleList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loginBk' element={<LoginBk />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
