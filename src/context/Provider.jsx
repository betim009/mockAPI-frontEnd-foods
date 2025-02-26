import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataLanches, setDataLanches] = useState([]);
  const [dataBebidas, setDataBebidas] = useState([]);
  const [errorCart, setErrorCart] = useState(false);
  const [userValidate, setUserValidate] = useState({
    email: "",
    name: "",
    status: "",
    start: false
  })

  const contextValue = {
    data, setData,
    dataLanches, setDataLanches,
    dataBebidas, setDataBebidas,
    errorCart, setErrorCart,
    userValidate, setUserValidate
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
