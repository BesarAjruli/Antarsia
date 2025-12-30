import Icon from "@mdi/react";
import { mdiPlus, mdiPrinter } from "@mdi/js";
import "./Add.css";

function Add() {
  return (
    <>
      <div className="add">
        <div className="icon-wrapper">
          <Icon className="icon" path={mdiPlus} size={1.6} />
        </div>
        <div className="divider"></div>
        <div className="icon-wrapper">
          <Icon className="icon" path={mdiPrinter} size={1.6} />
        </div>
      </div>
    </>
  );
}

export default Add;
