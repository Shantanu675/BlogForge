import React from "react";
import process from 'process';
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header } from './components'
import { Footer } from './components'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return !loading ? (
    <div className='w-full min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header className="m-100"/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
