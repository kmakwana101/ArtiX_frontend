import React, { useState } from 'react'
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './Components/admin/Adminlayout2'
import Login from './Components/admin/Loginn';
import CategoryPage from './Components/admin/categori_post';
import CreatePosts from "./Components/admin/Createpost"
import UpdatePost from "./Components/admin/Update"
import AllPost from "./Components/admin/Allposts"
import FAQs from './Components/FAQs';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import Terms from './Components/Terms';
import Fullpost from './Components/Fullpost';
import Category from './Components/Category';
import Search from './Components/Search';
import UserContext from './context/UserContext';

const App = () => {
  const [user, setUser] = useState('asdfasdf')
  return (
    <UserContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route index path='/Admin' element={<Login />} />
            <Route index path='/AdminPanel' element={<AdminPanel />} />
            <Route index path='/AdminPanel/:categori/' element={<CategoryPage />} />
            <Route index path='/admin/login' element={<Login />} />
            <Route index path='/admin/posts/create/' element={<CreatePosts />} />
            <Route index path='/admin/posts/update/:id' element={<UpdatePost />} />
            <Route index path='/admin/posts/' element={<AllPost />} />
            <Route index path='/privacy' element={<Privacy />} />
            <Route index path='/Contact' element={<Contact />} />
            <Route index path='/faqs' element={<FAQs />} />
            <Route index path='/terms' element={<Terms />} />
            <Route index path='/:category/:slug' element={<Fullpost />} />
            <Route index path='/:category' element={<Category />} />
            <Route index path='/search/:search' element={<Search />} />
          </Routes>
        </>
      </BrowserRouter>
    </UserContext.Provider>
      )
}

      export default App