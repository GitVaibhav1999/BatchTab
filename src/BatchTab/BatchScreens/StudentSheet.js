import ReactDataSheet from "react-datasheet";
import React, { Component, useContext, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import "react-datasheet/lib/react-datasheet.css";
import "./StudentSheet.css";
import { Grid, Checkbox } from "@material-ui/core";
import { CalendarTodayOutlined, UpdateRounded } from "@material-ui/icons";
import { DataContext } from "../batchData/batchCONTEXT";

export default function DataSheet() {
  const { value_student_list } = useContext(DataContext);
  const [studentList, setStudentList] = value_student_list;

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 2,
      backgroundColor: "rgba(35, 49, 86, 0.8)",
      height: "700%",
      opacity: "50%",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const CustomScrollbars = (props) => (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );

  function handleChange(event) {
    console.log(event);
  }

  const onChange = (event) => {};

  return (
    <div className="grid-div">
      <CustomScrollbars style={{ width: "100%", height: "100%" }}>
        <section>
          <ReactDataSheet
            style={{ borderRadius: "50" }}
            onCellsChanged={handleChange}
            className="grid"
            data={studentList.grid}
            valueRenderer={(cell) => cell.value}
            width="1000"
            rowRenderer={function checkBoxes(props) {
              if (props.row != 0) {
                return (
                  <tr>
                    <td classNam e="action-cell">
                      <Checkbox
                        indeterminate
                        // checked={false}
                        // defaultChecked
                        size="small"
                        value={props.row}
                        onChange={onChange}
                      />
                    </td>
                    {props.children}
                  </tr>
                );
              }
              return (
                <tr>
                  <td style={{ width: "4%" }} className="action-cell"></td>
                  {props.children}
                </tr>
              );
            }}
          />
        </section>
      </CustomScrollbars>
    </div>
  );
}
