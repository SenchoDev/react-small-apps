import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles
} from "@material-ui/core";
import { AddBoxOutlined, Link } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  urlInput: {
    margin: theme.spacing(1)
  },
  addSongButton: {
    margin: theme.spacing(1)
  },
  dialog: {
    textAlign: 'center',
  },
  thumbnail: {
    width: '90%'
  }

}))

function AddSong() {
  const classes = useStyles();
  const [dialog, setDialog] = React.useState(false);

  function handleCloseDialog() {
    setDialog(false);
  }
  return (
    <div className={classes.container}>
      <Dialog className={classes.dialog} open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img className={classes.thumbnail} src="http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg" alt="Song thumbnail" />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
        <DialogActions onClick={handleCloseDialog}>
          <Button color="secondary">Cancel</Button>
        </DialogActions>
        <DialogActions>
          <Button variant="outlined" color="primary">Add Song</Button>
        </DialogActions>
      </Dialog>
      <TextField
        className={classes.urlInput}
        placeholder="Add youtube or soundcloud Url"
        fullWidth
        margin="normal"
        type="url"
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant="contained"
        color="primary"
        endIcon={<AddBoxOutlined />}
      >
        button
      </Button>
    </div>
  );
}
export default AddSong;
