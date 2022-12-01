import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Authorization/Rejestracja/Register';
import Sprzedaz from './sprzedaz';
import Panel from './panel_glowny';
import Dostepne_leki from './dostepne_leki';
import reportWebVitals from './reportWebVitals';
import Bez_recepty from './bez_recepty';
import Zamiennik from './zamiennik';
import Recepta from './recepta';
import Hurtownia from './hurtownia';
import Edycja from './edycja';
import Edycja_Admin from './edycja_admin';
import Usuwanie from './usuwanie_pracownika';
import Edytowanie_pracownika from './edytowanie_pracownika';
import Zmiana from './zmiana_hasla';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Routing() {
    return (
      <Router>
          <Routes>
            <Route path="/recepta.js">
              <Recepta />
            </Route>
            <Route path="/bez_recepty.js">
              <Bez_recepty />
            </Route>
            <Route path="/dostepne_leki">
              <Dostepne_leki />
            </Route>
            <Route path="/edycja_admin.js">
              <Edycja_Admin />
            </Route>
            <Route path="/hurtownia">
              <Hurtownia />
            </Route>
            <Route path="/zamiennik.js">
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
            </Route>
          </Routes>
      </Router>
    );
  }
  