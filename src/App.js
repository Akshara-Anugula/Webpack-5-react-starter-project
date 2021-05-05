import React from 'react';
import style from "./app.module.scss";
function App() {
  return (
    <div className={style['foo-container']}>
    <input type='text'></input>
    <button type="button" className={style['my-apricot']}>Black</button>
    </div>
  );
}

export default App;
