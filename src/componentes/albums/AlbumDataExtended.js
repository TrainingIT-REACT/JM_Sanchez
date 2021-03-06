import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CancionData from "../canciones/CancionData";

const AlbumDataExtended = ({ album }) => {
  const urlImagen = `../../../static${album.cover}`;

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={album.name} subheader={album.artist} />
        <CardMedia
          image={urlImagen}
          title={album.name}
          className={classes.media}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Duracion total: {album.duracion}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Despliega para ver las canciones.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {album.cancionesDelAlbum.map(cancion => (
              <CancionData
                key={cancion.id}
                cancion={cancion}
                albumDataExtended={true}
              />
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default AlbumDataExtended;
