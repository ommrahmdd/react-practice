import React, { useState } from "react";

export default function FrontFormVm() {
  let sideBarItems = ["Your info", "select plan", "add-ons", "summary"];

  return {
    sideBarItems,
  };
}
