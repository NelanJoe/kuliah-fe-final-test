import { ThemeProvider } from "styled-components";
import theme from "../../../utils/constant/theme";

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
