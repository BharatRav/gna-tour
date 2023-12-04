import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPallete =
      mode === themeModes.dark
        ? {
            primary: {
              main: "#14357C",
              contrastText: "#ffffff",
              select: colors.blue['900'],
            },
            secondary: {
              main: "#ffffff",
              contrastText: "#ffffff",
              select: colors.blue['900'],
            },
            background: {
              default: "#000000",
              paper: "#131313",
            },
          }
        : {
            primary: {
              main: "#14357C",
              select: colors.blue['900'],
            },
            secondary: {
              main: "#f44336",
              select: colors.blue['900'],
            },
            background: {
              default: colors.grey["100"],
            },
          };
    return createTheme({
      palette: {
        mode,
        ...customPallete,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;