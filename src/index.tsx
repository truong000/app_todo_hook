import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const DATA = [
  {id:"todo-0", name:"Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết" , level:"2" , content:"Chủ doanh nghiệp bán lẻ sở hữu 3 cây xăng tại Hà Nam cho biết, sáng 8/3 nhà cung cấp báo chiết khấu xăng 250 đồng một lít, dầu 150 đồng. So với cuối tuần trước, mức này đã hạ sâu. Chiết khấu duy trì được mức trên 1.000 đồng một lít được khoảng nửa tháng sau thời gian dài trồi sụt, giờ lại lao dốc, điệp khúc này chắc phá sản mất, bà lo lắng."},
  {id:"todo-1", name:"Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018" , level:"1" , content:"Ông Thiện, đại diện một đơn vị bán lẻ tại Hải Phòng, cũng nói mức chiết khấu ông nhận được hôm nay từ nhà cung ứng tại kho Hải Phòng là 400 đồng một lít dầu diesel, còn xăng không có. Hai ngày nay chiết khấu liên tục giảm, nhà phân phối thông báo xu hướng còn giảm nữa vì giá thế giới đang tăng"},
  {id:"todo-2", name:"Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo" , level:"0" , content:"Chiết khấu không đủ bù đắp chi phí kinh doanh khiến khâu bán lẻ chịu lỗ hơn một năm qua, cũng là câu chuyện gây tranh cãi kéo dài. Tại nhiều cuộc họp góp ý sửa Nghị định 95 và Nghị định 83 về kinh doanh xăng dầu, đại diện các doanh nghiệp bán lẻ cho hay hơn một năm cầm cự họ bị lỗ cả nghìn tỷ đồng."},
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
