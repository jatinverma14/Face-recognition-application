import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../../CssStyle/homePage.css";

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }} className="optionCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="optionCardHeading">
            {props.head}
          </Typography>
          <Typography variant="body2">
            {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="exploreButton" size="small" color="primary">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}
