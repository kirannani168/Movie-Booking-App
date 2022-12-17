import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import moviesData from "../../Assets/MovieData";


function ReleasedMovies() {
    const result = moviesData.map((data, index) => {
        
        if (index >2) {
            return '';
        }

        return <div key={index} style={{width:300, margin:16}}>
            <ImageListItem>
          <img src={data.poster_url} alt='upcoming images' />
          <ImageListItemBar title={data.title}
          subtitle={<span>Released on: {data.release_date}</span>}
            position="below"
           />
        </ImageListItem>
        </div>;
    });
  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
      }}
    >
     {result}
      
    </ImageList>
  );
}
export default ReleasedMovies