import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [datas, setDatas] = useState(items);
  const cates = ["Give me a random meal","all",...new Set( datas.map((data) => {
    return data.category;
  }))];
  const [display, setDisplay] = useState(datas);
  const handleClick = (category) => {
    if(category==="all"){
      setDisplay(datas);
    }else if(category==="Give me a random meal"){
      const number = Math.floor(Math.random() * datas.length);
      setDisplay([datas[number]]);
    }else{
      setDisplay(datas.filter((item) => item.category === category));
    }
  }
  return <>
    <main>
      <section className="menu section">
        <div className ="title">
          <h2>Our menu</h2>
          <div className = "underline"></div>
        </div>
        <div className="btn-container">
          {cates.map((cate, index) => {
            return <Categories key = {index} cate={cate} handleClick ={handleClick}/>
          })}
        </div>
        <div className="section-center">
          {display.map((item)=> {
            return <>
              <Menu key = {item.id} {...item} />
            </>
          })}
        </div>
      </section>
    </main>
  </>;
}

export default App;
 