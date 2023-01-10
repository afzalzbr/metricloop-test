import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }
  interface Palette {
    sideNav?: Palette["background"];
    header?: Palette["background"];
  }
  interface PaletteOptions {
    sideNav?: PaletteOptions["background"];
    header?: PaletteOptions["background"];
  }
}
