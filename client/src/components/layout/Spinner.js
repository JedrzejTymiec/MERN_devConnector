import spinner from "../../img/spinner.gif";
import { Fragment } from "react";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
