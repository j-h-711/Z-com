import React, { ReactNode } from "react";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>에프터 로그인 레이아웃{children}</main>;
}
