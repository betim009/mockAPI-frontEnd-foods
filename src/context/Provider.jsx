import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [anyValue, setAnyValue] = useState("");

  useEffect(() => {}, []);

  const contextValue = {
    anyValue,
    setAnyValue,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
