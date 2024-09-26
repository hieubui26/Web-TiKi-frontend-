import { Menu, Spin } from "antd";
import React, { useState } from "react";
import { getItem } from "../../utils";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";

const AdminPage = () => {
  const items = [
    getItem("Người dùng", "user", <UserOutlined />),
    getItem("Sản phẩm", "product", <AppstoreOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");
  const [loading, setLoading] = useState(false);

  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "product":
        return <AdminProduct />;
      default:
        return <></>;
    }
  };

  const handleOnClick = ({ key }) => {
    setLoading(true); // Bắt đầu trạng thái loading
    setKeySelected(key);

    // Mô phỏng quá trình tải dữ liệu (bạn có thể thay bằng API thực)
    setTimeout(() => {
      setLoading(false); // Kết thúc trạng thái loading khi dữ liệu đã sẵn sàng
    }, 2000);
  };

  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: "flex" }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: "1px 1px 2px #ccc",
            height: "100vh",
          }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1, padding: "15px" }}>
          {loading ? (
            <div style={{ textAlign: "center", paddingTop: "50px" }}>
              <Spin size="large" />
            </div>
          ) : (
            renderPage(keySelected)
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
