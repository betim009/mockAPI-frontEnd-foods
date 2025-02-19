import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataLanches, setDataLanches] = useState([]);
  const [dataBebidas, setDataBebidas] = useState([]);

  const contextValue = {
    data, setData,
    dataLanches, setDataLanches,
    dataBebidas, setDataBebidas
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
