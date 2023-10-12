import {
  SettingOutlined,
  BankOutlined,
  ApartmentOutlined,
  MenuOutlined,
  TrademarkOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useUserCtx, getAccountUrl, PageHeader } from "@skzm/web-common";

export default function Header() {
  const { userInfo } = useUserCtx();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const selectedKeys = useMemo(() => {
    const keys = [pathname];
    if (pathname.includes("/order/")) keys.push("/order");
    return keys;
  }, [pathname]);

  return (
    <PageHeader
      selectedKeys={selectedKeys}
      items={[
        {
          key: "/liquor",
          icon: <MenuOutlined />,
          label: <Link to={{ pathname: "/liquor" }}>酒</Link>,
        },
        {
          key: "/smoke",
          icon: <MenuOutlined />,
          label: <Link to={{ pathname: "/smoke" }}>烟</Link>,
        },
        {
          key: "/tea",
          icon: <MenuOutlined />,
          label: <Link to={{ pathname: "/tea" }}>茶叶</Link>,
        },
        {
          key: "/",
          icon: <MenuOutlined />,
          label: <Link to={{ pathname: "/otherGoods" }}>其它商品</Link>,
        },
        {
          key: "/order",
          icon: <ProfileOutlined />,
          label: <span onClick={() => navigate("/order/list")}>订单</span>,
          children: [
            {
              key: "/order/list",
              label: <Link to={{ pathname: "/order/list" }}>订单列表</Link>,
            },
            {
              key: "/order/add",
              label: <Link to={{ pathname: "/order/add" }}>开单</Link>,
            },
          ],
        },
        {
          key: "/category",
          icon: <ApartmentOutlined />,
          label: <Link to={{ pathname: "/category" }}>分类</Link>,
        },
        {
          key: "/brand",
          icon: <TrademarkOutlined />,
          label: <Link to={{ pathname: "/brand" }}>品牌</Link>,
        },
        {
          key: "/warehouse",
          icon: <BankOutlined />,
          label: <Link to={{ pathname: "/warehouse" }}>仓库</Link>,
        },
        userInfo.isSuperAdmin || userInfo.enterprise_admin
          ? {
              key: "/setting",
              icon: <SettingOutlined />,
              label: (
                <a target="_blank" href={getAccountUrl()} rel="noreferrer">
                  系统管理
                </a>
              ),
            }
          : null,
      ]}
    />
  );
}
