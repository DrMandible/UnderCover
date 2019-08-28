import React from "react";
import MaterialDatatable from "material-datatable";
import LocationDetailsModal from "./components/Modal.js";

const tblTransform = require("./Transform.json");

const columns = [
  { name: "Location", field: "Location" },
  { name: "Center/Mall", field: "Center/Mall" },
  { name: "City", field: "City" },
  { name: "State/Province", field: "State/Province" },
  { name: "Landlord/Developer", field: "Landlord/Developer" },
  { name: "A&G Negotiator", field: "A&G Negotiator" },
  { name: "Brand", field: "Brand" },
  { name: "Final LED", field: "Final LED" },
  { name: "A&G Scope of Work", field: "A&G Scope of Work" },
  { name: "3rd Party Interest?", field: "3rd Party Interest?" },
  { name: "LL Interest?", field: "LL Interest?" },
  { name: "Proxy Value", field: "Proxy Value" },
  { name: "Highest Current Offer", field: "Highest Current Offer" },
  { name: "# of Offers", field: "# of Offers" }
  // {
  //   name: "Strategy",
  //   field: "Strategy",
  //   options: {
  //     filter: false
  //   }
  // }
];

const options = {
  filterType: "multiselect",
  responsive: "scroll",
  selectableRows: "false",
  size: "small"
};

const TransformTable = props => {
  return (
    <MaterialDatatable
      title={"Transform Report - Fake News Edition"}
      data={tblTransform}
      columns={columns}
      options={options}
    />
  );
};

export default TransformTable;
