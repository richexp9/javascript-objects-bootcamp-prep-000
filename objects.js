var playlist = {
  Kanye: "Gold Digger"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Kanye
  return playlist
}
