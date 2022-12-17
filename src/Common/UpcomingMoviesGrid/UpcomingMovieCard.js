import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import moviesData from "../../Assets/MovieData";


function StandardImageList() {
  return (
    <ImageList cols={6}
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, min(16%)) !important",
        gridAutoColumns: "minmax(250px, 1fr)"
      }}
    >
     
      {moviesData.map((data) => (
        <ImageListItem>
          <img src={data.poster_url} alt='upcoming images' />
          <ImageListItemBar title={data.title}
           />
           <ImageListItemBar
            title={data.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default StandardImageList