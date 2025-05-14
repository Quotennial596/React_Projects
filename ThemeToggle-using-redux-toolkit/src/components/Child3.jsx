import React from "react";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Child3 = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Theme (Current: {theme})</button>
    </div>
  );
};

export default Child3;
