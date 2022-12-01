import React from 'react';
import ReactDOM from 'react-dom/client';
import Loadable from '@docusaurus/react-loadable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const PanelGlowny = Loadable({
  loader: () => import('./panel_glowny'),
  loading: () => null
})

const BaseRouter = () => (
          <Routes>
            <Route path="/recepta" render={(props) => <PandelGlowny {...props}/>
            {/* <Route path="/bez_recepty">
              <Bez_recepty />
            </Route>
            <Route path="/dostepne_leki">
              <Dostepne_leki />
            </Route>
            <Route path="/edycja_admin">
              <Edycja_Admin />
            </Route>
            <Route path="/hurtownia">
              <Hurtownia />
            </Route>
            <Route path="/zamiennik">
              <Zamiennik />
            </Route>
            <Route path="/usuwanie_pracownika">
              <Usuwanie />
            </Route>
            <Route path="/sprzedaz">
              <Sprzedaz />
            </Route>
            <Route path="/">
              <Panel />
</Route> */}
          </Routes>
    );

 export default BaseRouter; 