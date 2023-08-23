import { createContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/constants";
import PropTypes from "prop-types";

const initialState = {
  isSidebarOpen: false,
};

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => dispatch({ type: OPEN_SIDEBAR });
  const closeSidebar = () => dispatch({ type: CLOSE_SIDEBAR });

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
