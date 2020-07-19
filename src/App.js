import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AlbumList } from 'pages/AlbumList'
import { ArtistDetail } from 'pages/ArtistDetail'
import { Link } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
        <Route path="/artists/:artistId">
                     <ArtistDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
