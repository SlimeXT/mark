import React from 'react';
import './App.css'; // Đảm bảo đã import file CSS

function App() {
  const handleGetStarted = () => {
    // Điều hướng đến trang danh sách sản phẩm (ProductList)
    // Nếu bạn đang sử dụng react-router-dom, hãy dùng navigate('/products')
    alert("Chào mừng bạn đến với Paradise Nursery! Chuyển hướng đến cửa hàng...");
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Nơi cung cấp những loại cây cảnh tốt nhất cho không gian sống của bạn.</p>
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default App;
