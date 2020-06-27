import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import songReducer from './reducer'

export const SongContext = React.createContext({
  song: {
    id: "c59af37e-7cde-4df5-af1e-e577466abca8",
    title: "Bye, Bye",
    artist: "Raf Camora",
    thumbnail: "http://img.youtube.com/vi/ocklz56E0GI/0.jpg",
    url: "https://youtu.be/ocklz56E0GI?list=RDocklz56E0GI",
    duration: 224,

  },
  isPlaying: false,
})

function App() {
  const initalSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(() => songReducer, initalSongState);
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <SongContext.Provider value={{state, dispatch}}>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? 80 : 10
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: 70
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
