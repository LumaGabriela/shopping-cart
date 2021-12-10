import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from './components/styles/themes/dark'
import light from './components/styles/themes/light'
import Global from './components/styles/global'
import Header from './components/Header/Header'
import Shop from './components/Body/Shop'
import Home from './components/Body/Home'
import Cart from './components/Body/Cart'
import usePersistedState from './utilities/usePersistedState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import notebook from './components/imgs/notebook.png'

const App: React.FC = () =>  {
  const [shoppingCart, setShoppingCart] = useState<any>([])

  const addToCart = (e:any) => {
    const id = e.target.parentElement.dataset.id
    let cart = JSON.parse(JSON.stringify(shoppingCart))
    let item = products.find((item: { id: any }) => item.id === id)
    if(cart.find((obj:{item : any}) => obj.item.id === id)){
      let currentItem = cart.find((obj:{item : any}) => obj.item.id === id)
      currentItem.quantity = currentItem.quantity + 1
    }
    else {
      cart.push({item: item, quantity:1 })
    }
    setShoppingCart(cart)
    console.log(cart)
  }
  const [products] = useState<any>([
    {id: 'Notebook', price: '8', key: uuidv4(), img: notebook},
    {id: 'Sketchbook', price: '5', key: uuidv4(), img: notebook},
    {id: 'Planer', price: '5', key: uuidv4(), img: notebook},
    {id: 'Agenda', price: '5', key: uuidv4(), img: notebook},
    {id: 'Watercolor Sketchbook', price: '15', key: uuidv4(), img: notebook},
    {id: 'Penguin', price: '9', key: uuidv4(), img: notebook},
    {id: 'Fluffy', price: '15', key: uuidv4(), img: notebook},
    {id: 'Dino', price: '7', key: uuidv4(), img: notebook},
    {id: 'Duck', price: '4', key: uuidv4(), img: notebook},
    {id: 'Squirrel', price: '5', key: uuidv4(), img: notebook},
    {id: 'Gecko', price: '3', key: uuidv4(), img: notebook}
  ])
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  
  return(
    <ThemeProvider theme={theme} >
      <div className='App'>
        <Global />        
        <Router>
          <Header 
          shoppingCart={shoppingCart} 
          toggleTheme={toggleTheme}
          setShoppingCart={setShoppingCart}
           />
          <Routes>
            <Route path='/' element={<Home products={products} />} />
            <Route path='/shop' 
            element={<Shop products={products} 
            shoppingCart={shoppingCart} 
            addToCart={addToCart}/>} 
            />
            <Route path='/cart' 
            element={<Cart products={products} 
            shoppingCart={shoppingCart}/>}
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
)}

export interface Props {
  products ?: any, 
  shoppingCart ?: any, 
  addToCart ?: any,
}

export default App
