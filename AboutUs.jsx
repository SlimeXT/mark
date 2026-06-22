import React from 'react';
import './AboutUs.css'; // Nếu bạn có file CSS riêng

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>Về Paradise Nursery</h1>
      <p>
        Paradise Nursery được thành lập với sứ mệnh mang không gian xanh đến gần hơn với mọi người. 
        Chúng tôi cung cấp các loại cây cảnh chất lượng cao, từ cây trồng trong nhà đến cây ngoại thất, 
        giúp làm đẹp không gian sống và cải thiện sức khỏe tinh thần của bạn.
      </p>
      <p>
        Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng 
        những sản phẩm cây trồng bền bỉ và dịch vụ chăm sóc tận tâm nhất.
      </p>
    </div>
  );
}

export default AboutUs;
