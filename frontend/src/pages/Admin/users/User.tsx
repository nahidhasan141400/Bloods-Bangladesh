/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Card, Input, Space, Table } from "antd";
import { imagePath } from "../../../Utils/Imgpath";
import { useGetAllUserQuery } from "../../../redux/api/authApi/authApi";
import { Link } from "react-router-dom";
import type { InputRef, TableColumnType } from "antd";
import { useRef, useState } from "react";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { CarbonSearch } from "../../../components/icons";

const User = () => {
  const { data, isLoading } = useGetAllUserQuery({});

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
          title="Users"
          extra={
            <p className="text-xl font-bold text-red-500">
              Total {data?.length}
            </p>
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
                title: "Email",
                dataIndex: "email",
                key: "email",
                ...getColumnSearchProps("email"),
              },
              {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (text) => (
                  <p className="capitalize font-bold">{text}</p>
                ),
              },
              {
                title: "Information",
                dataIndex: "donor",
                key: "status",
                render: (_, value) => (
                  <p className="capitalize font-bold">
                    {value.donor ? <>YES</> : <>NO</>}
                  </p>
                ),
              },
              {
                title: "Details",
                dataIndex: "id",
                key: "status",
                render: (id) => (
                  <p className="capitalize font-bold">
                    <Link to={"/we/admin/dashboard/users/" + id}>
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

export default User;
