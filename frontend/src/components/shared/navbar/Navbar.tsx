import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import { Button, Select } from "antd";
import { useGetUserQuery } from "../../../redux/api/authApi/authApi";

const Navbar = () => {
  const { data, isLoading } = useGetUserQuery({});
  if (isLoading) {
    return <></>;
  }
  return (
    <Container className="w-full relative">
      <div className="w-full relative p-3 flex justify-between items-center container mx-auto ">
        <Link to={"/"}>
          {/* <div className="hidden md:block text-2xl font-bold text-primary">
            BLOODSBD.COM
          </div> */}
          <img src="/images/logo/logo-inline.png" className="w-80" />
        </Link>
        {/* right site of the website */}
        <div className="flex w-full justify-between md:justify-end items-center gap-4">
          {/* selected country */}

          <div>
            <Select
              className="w-[170px] "
              defaultValue={"bangladesh"}
              options={[
                {
                  value: "bangladesh",
                  label: (
                    <span className="flex items-center gap-2">
                      {" "}
                      <img
                        src="https://flagcdn.com/48x36/bd.png"
                        className="w-6"
                      />
                      <span>Bangladesh</span>
                    </span>
                  ),
                },
                {
                  value: "USA",
                  label: (
                    <span className="flex items-center gap-2">
                      {" "}
                      <img
                        src="https://flagcdn.com/48x36/us.png"
                        className="w-6"
                      />
                      <span>USA</span>
                    </span>
                  ),
                },
              ]}
            />
          </div>
          <details className="dropdown">
            <summary className="text-lg font-semibold text-gray-700 cursor-pointer custom-arrow flex gap-2 items-center"></summary>
            <ul className="menu dropdown-content bg-primary gap-2 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button className="btn glass btn-primary font-bold">
                  <img src="https://flagcdn.com/48x36/in.png" className="w-6" />
                  <span>India</span>
                </button>
              </li>
              <li>
                <button className="btn glass btn-primary font-bold">
                  <img src="https://flagcdn.com/48x36/us.png" className="w-6" />
                  <span>United State</span>
                </button>
              </li>
            </ul>
          </details>
          {/* cta */}
          {data ? (
            <Link to={"/dashboard"}>
              <Button type="primary" danger>
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to={"/auth/register"}>
              <Button type="primary" danger>
                Registration Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
