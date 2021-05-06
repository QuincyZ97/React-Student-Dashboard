import React, { useState } from "react";
import { useSelector } from "react-redux";
import SmartDataTable from "react-smart-data-table";
import "react-smart-data-table/dist/react-smart-data-table.css";
import "./Overview.css";

function Overview() {
  const studentState = useSelector((state) => state.studentData);
  const [filterInput, setFilterInput] = useState("");
  const [perPage, setPerPage] = useState(studentState.length);

  const onChangeHandler = (event) => {
    setFilterInput(event.target.value);
  };

  const onChangeValue = (event) => {
    setPerPage(parseInt(event.target.value));
  };

  return (
    <div className="overview__container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Filter by
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="W4D3-4"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={onChangeHandler}
          value={filterInput}
        />

        <div className="input-group-prepend">
          <label className="input-group-text" for="inputGroupSelect01">
            results per page
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={onChangeValue}
        >
          <option value={studentState.length} selected>
            All
          </option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <SmartDataTable
        data={studentState}
        name="student-dashboard-table"
        className="ui compact selectable table"
        sortable={true}
        withToggles={true}
        dynamic={true}
        filterValue={filterInput}
        perPage={perPage}
      />
    </div>
  );
}
export default Overview;
