import "./app.css";
import * as React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { AppCtxProvider, GoodsCtxProvider } from "@skzm/web-store-common";
import { AppRouter } from "./router";
import OrderListCtxProvider from "./context/OrderListCtx";
import { ICurrentUserInfoData, UserCtxProvider } from "@skzm/web-common";

export default function App(props: { userInfo: ICurrentUserInfoData }) {
  return (
    <ConfigProvider locale={zhCN}>
      <UserCtxProvider userInfo={props.userInfo}>
        <AppCtxProvider>
          <GoodsCtxProvider>
            <OrderListCtxProvider>
              <React.StrictMode>
                <AppRouter />
              </React.StrictMode>
            </OrderListCtxProvider>
          </GoodsCtxProvider>
        </AppCtxProvider>
      </UserCtxProvider>
    </ConfigProvider>
  );
}
