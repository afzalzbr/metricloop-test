import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import EqualizerSharpIcon from "@mui/icons-material/EqualizerSharp";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ButtonBase from "@mui/material/ButtonBase";
import TimelineIcon from "@mui/icons-material/Timeline";
import ModeSharpIcon from "@mui/icons-material/ModeSharp";
import MenuIcon from "@mui/icons-material/Menu";
// const Item = styled(Paper)(({ theme }) => ({
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F1F1F1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const IconButtonSquare = styled(Button)(({ theme }) => ({
  height: "20px",
  width: "20px",
  minWidth: "20px",
  borderRadius: "4px",
  background: "#F7F7F7",
  color: "#575757",
}));
// {
//   id: '4',
//   type: 'custom',
//   position: { x: 100, y: 200 },
//   data: {
//     selects: {
//       'handle-0': 'smoothstep',
//       'handle-1': 'smoothstep',
//     },
//   },
// },

const DefaultNode = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        borderRadius: "4px",

        // background: "white",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        borderRight: "9px solid #4E46DC",
        borderLeft: "9px solid #4E46DC",
      }}
    >
      {/* <Grid container spacing={0} sx={{ height: "auto", width: "100px" }}> */}
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <>Node 1</>
          <>
            <IconButtonSquare aria-label="delete" size="small">
              <EqualizerSharpIcon fontSize="inherit" />
            </IconButtonSquare>
            <IconButtonSquare aria-label="delete" size="small">
              <OpenInNewSharpIcon fontSize="inherit" />
            </IconButtonSquare>
            <IconButtonSquare aria-label="delete" size="small">
              <ZoomInIcon fontSize="inherit" />
            </IconButtonSquare>
            <IconButtonSquare aria-label="delete" size="small">
              <ArticleOutlinedIcon fontSize="inherit" />
            </IconButtonSquare>
          </>
        </Stack>
        {[1, 2, 3].map((item) => (
          <Item width="100%">
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 20, height: 20 }}>
                  <TimelineIcon fontSize="inherit" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography sx={{ fontSize: "10px" }} variant="body4">
                      Standard license
                    </Typography>
                  </Grid>
                  <Grid item direction={"row"}>
                    <Typography
                      sx={{ cursor: "pointer", fontSize: "10px" }}
                      variant="body6"
                    >
                      24%
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer", fontSize: "10px" }}
                      variant="body6"
                    >
                      {" < 4%"}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ModeSharpIcon fontSize="inherit" />
                  <MenuIcon fontSize="inherit" />
                </Grid>
              </Grid>
            </Grid>
          </Item>
        ))}
      </Stack>
      {/* </Grid> */}
    </Paper>
  );
};

export default DefaultNode;
