import { Table } from "antd";
import React from "react";
import Loading from "../LoadingComponent/Loading";

const TableComponent = (props) => {
  const {
    selectionType = "checkbox",
    data = [],
    // products = [],
    isPending = false,
    columns = [],
  } = props;

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "price",
  //   },
  //   {
  //     title: "Rating",
  //     dataIndex: "rating",
  //   },
  //   {
  //     title: "Type",
  //     dataIndex: "type",
  //   },
  //   {
  //     title: "Action",
  //     dataIndex: "action",
  //     render: (text) => <a>{text}</a>,
  //   },
  // ];
  // const data =
  //   products?.length &&
  //   products?.map((product) => {
  //     return { ...product, key: product._id };
  //   });

  console.log("data", data);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <Loading isLoading={isPending}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </Loading>
  );
};

export default TableComponent;
