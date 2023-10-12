import "./app.css";
import * as React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { AppRouter } from "./router";
import { ICurrentUserInfoData, UserCtxProvider } from "@skzm/web-common";

export default function App(props: { userInfo: ICurrentUserInfoData }) {
  return (
    <ConfigProvider locale={zhCN}>
      <UserCtxProvider userInfo={props.userInfo}>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
      </UserCtxProvider>
    </ConfigProvider>
  );
}
