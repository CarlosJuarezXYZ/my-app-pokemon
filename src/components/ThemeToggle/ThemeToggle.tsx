import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import { themeToggleStyled } from "./ThemeToggle.styled";

const { ToggleButton} = themeToggleStyled;

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <ToggleButton onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? <BsMoonFill /> :  <BsSunFill />}
    </ToggleButton>
  );
};

export default ThemeToggle;
