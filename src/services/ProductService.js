import axios from "axios";
import { axiosJWT } from "./UserService";

export const getAllProduct = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/product/get-all`
  );
  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/product/create`,
    data
  );
  return res.data;
};

export const getDetailsProduct = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/product/get-details/${id}`
  );
  return res.data;
};

export const updateProduct = async (id, access_token, data) => {
  // Kiểm tra xem id có phải là chuỗi hợp lệ hay không
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("Invalid product ID");
  }

  try {
    // Gọi API PUT với id và data
    const res = await axiosJWT.put(
      `${process.env.REACT_APP_API_URL}/product/update/${id}`,
      data,
      {
        headers: {
          Token: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    // Bắt và xử lý lỗi từ API
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id, access_token) => {
  const res = await axiosJWT.delete(
    `${process.env.REACT_APP_API_URL}/product/delete/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
