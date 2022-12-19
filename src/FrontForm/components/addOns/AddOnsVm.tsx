import React, { useState } from "react";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { context } from "../../app/context";
export default function AddOnsVm() {
  let contextValue = React.useContext(context);
  let handleChange = (checboxArray: CheckboxValueType[]) => {
    (contextValue as any).handleAddOns(checboxArray);
  };
  return {
    handleChange,
  };
}
