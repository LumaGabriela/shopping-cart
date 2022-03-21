import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from './components/styles/themes/dark'
import light from './components/styles/themes/light'
import Global from './components/styles/global'
import Header from './components/Header/Header'
import Shop from './components/Body/Shop'
import ItemPage from './components/Body/ItemPage'
import Home from './components/Body/Home'
import Cart from './components/Body/Cart'
import usePersistedState from './utilities/usePersistedState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import notebook from './components/imgs/notebook.jpg'
import notebook1 from './components/imgs/notebook1.jpg'
import notebook2 from './components/imgs/notebook2.jpg'
import notebook3 from './components/imgs/notebook3.jpg'
import planer from './components/imgs/planer.jpg'
import photoalbum from './components/imgs/photoalbum.jpg'
import card from './components/imgs/card.jpg'

const App: React.FC = () => {
  const [shoppingCart, setShoppingCart] = usePersistedState<any>('ShopingCart', [])

  const addToCart = (e:any) => {
    let id =(e.target.nodeName === 'path') ? e.target.parentElement.parentElement.dataset.id : e.target.parentElement.dataset.id
    let cart = JSON.parse(JSON.stringify(shoppingCart))
    let item = products.find((item: { id: string }) => item.id === id)
    if(cart.find((obj:{item : any}) => obj.item.id === id)){
      let currentItem = cart.find((obj:{item : any}) => obj.item.id === id)
      currentItem.quantity = currentItem.quantity + 1
    }
    else {
      cart.push({item: item, quantity:1})
    }
    setShoppingCart(cart)
  }
  interface Item{
    id:string, price: string, key: string, img: string, description: string
  }
  type Items = Item[]
  const [products] = useState<Items>( [
    {id: 'Notebook', price: '8', key: uuidv4(), img: notebook, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},
    
    {id: 'Sketchbook', price: '5', key: uuidv4(), img: notebook1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},

    {id: 'Planer', price: '5', key: uuidv4(), img: notebook2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},

    {id: 'Agenda', price: '5', key: uuidv4(), img: notebook3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},

    {id: 'Watercolor Sketchbook', price: '15', key: uuidv4(), img: planer, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},

    {id: 'Penguin', price: '9', key: uuidv4(), img: card, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'},

    {id: 'Fluffy', price: '15', key: uuidv4(), img: photoalbum, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, diam eget sollicitudin tempor, tellus urna ultrices erat, quis commodo justo nunc in tortor. Etiam imperdiet nibh id libero dignissim, eget placerat tortor vulputate. Nulla consectetur eleifend sem, ac placerat magna rhoncus sit amet. Duis nisl lorem, molestie sit amet nulla nec, mollis posuere dui.'}
  ])
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  
  return(
    <ThemeProvider theme={theme} >
      <div className='App'>
        <Global />        
        <Router basename='/shopping-cart'>
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
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}/>}
            />
            <Route path='/shop/:id' 
            element={< ItemPage products={products}
            shoppingCart={shoppingCart}
            addToCart={addToCart}/>}
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
  setShoppingCart ?: any
}

export default App
