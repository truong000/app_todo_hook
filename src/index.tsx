import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const DATA = [
  {id:"todo-0", name:"Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết" , level:"2" },
  {id:"todo-1", name:"Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018" , level:"1" },
  {id:"todo-2", name:"Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo" , level:"0" },
]

root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
