import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import "./../../i18next";
export default function FuneralLayout() {
  return (
    <>
      <nav className="py-8">
        <Container></Container>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
