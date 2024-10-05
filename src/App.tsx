import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { Routes, Route } from 'react-router-dom'
import ForMen from './components/Body/ForMen/ForMen'
import ForWomen from './components/Body/ForWomen/ForWomen'
import Branchs from './components/Body/Branchs/Branchs'
import AboutUs from './components/Body/AboutUs/AboutUs'
import LogIn from './components/Body/LogIn/LogIn'
import CardDetail from './components/Products/ProductsDetailCard/CardDetail'
 
function App() {


  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='' element={<Body/>}/>
      <Route path='Hombres'     element={<ForMen/>}/>
      <Route path='Mujeres'     element={<ForWomen/>}/>
      <Route path='Marcas'     element={<Branchs/>}/>
      <Route path='SobreNosotros'     element={<AboutUs/>}/>
      <Route path='Login'     element={<LogIn/>}/>
      <Route path={"/CardDetail/:id"} element={<CardDetail/>}/>
    </Routes>

    


    </>
  )
}

export default App
