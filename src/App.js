import React from 'react';
import {Route} from 'react-router-dom';

import {Categories, Title, Describtion, Fridge} from './components' /* from index.js */

import {Home, Art, Biography, Blog, LoveStory, Contact, Wedding} from './pages'

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact/>
      <div style={{display:"flex"}}>
        <Fridge items={['BIOGRAPHY', 'LOVE STORY', 'CONTACT', 'ART', 'WEDDING', 'BLOG']}/>
        <Route path="/Art" component={Art} />
        <Route path="/Biography" component={Biography} />  
        <Route path="/Blog" component={Blog} />  
        <Route path="/LoveStory" component={LoveStory} />  
        <Route path="/Contact" component={Contact} />  
        <Route path="/Wedding" component={Wedding} /> 
      </div>
    </div>      
  )
}

export default App;
