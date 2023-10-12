import "./index.css";
import { Layout as AntdLayout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <AntdLayout>
      <Header />

      <AntdLayout.Content style={{ padding: "0 24px", marginTop: 24 }}>
        <Outlet />
      </AntdLayout.Content>
    </AntdLayout>
  );
}
