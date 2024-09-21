/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Card, Input, Space, Table } from "antd";
import { imagePath } from "../../../Utils/Imgpath";

import { Link } from "react-router-dom";
import type { InputRef, TableColumnType } from "antd";
import { useRef, useState } from "react";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { CarbonSearch } from "../../../components/icons";
import { useGetDonorByAdminQuery } from "../../../redux/api/donorApi/donorApi";
import AddDonor from "./AddDonor";

const Donor = () => {
  const { data, isLoading } = useGetDonorByAdminQuery({});

  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    // @ts-expect-error skip
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: any
  ) => {
    confirm();

    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
  };

  const getColumnSearchProps = (dataIndex: any): TableColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        className="bg-white z-[999]"
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<CarbonSearch />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });

              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <CarbonSearch style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (text ? text.toString() : "") : text,
  });
  return (
    <div>
      <div>
        <Card
          title="Donor Data"
          extra={
            <div className="flex gap-4">
              <p className="text-xl font-bold text-red-500">
                Total {data?.length}
              </p>
              <AddDonor />
            </div>
          }
        >
          <Table
            loading={isLoading}
            columns={[
              {
                title: "Photo",
                dataIndex: "photo",
                key: "photo",
                render: (text) => {
                  return <Avatar src={imagePath.profile(text)}></Avatar>;
                },
              },
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
                ...getColumnSearchProps("name"),
              },
              {
                title: "Phone",
                dataIndex: "phone",
                key: "phone",
                ...getColumnSearchProps("phone"),
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
                ...getColumnSearchProps("address"),
              },
              {
                title: "Division",
                dataIndex: "division",
                key: "division",
                ...getColumnSearchProps("division"),
              },
              {
                title: "District",
                dataIndex: "district",
                key: "district",
                ...getColumnSearchProps("district"),
              },

              {
                title: "Details",
                dataIndex: "id",
                key: "status",
                render: (id) => (
                  <p className="capitalize font-bold">
                    <Link to={"/donor/" + id} target="_blank">
                      <Button>Details</Button>
                    </Link>
                  </p>
                ),
              },
            ]}
            dataSource={data || []}
            size="middle"
            scroll={{
              x: true,
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default Donor;
