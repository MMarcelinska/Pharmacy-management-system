
import './panel.css';
import {useState, useEffect} from 'react';
import Routing from './route';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Panel() {
    const [user, setUser] = useState([]);
    const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");

    const fetchData = () => {
        const url = `http://127.0.0.1:8000/api/pharamcy/login?mail=${mail}&password=${password}`;
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          setUser(actualData);
          console.log(user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);


  return (
            <div>
                <header>
                    <h1>TwojaApteka: Panel Pracownika</h1>
                </header>


                <nav>
                    <Routing>
                        <Link to="/panel_glowny">Strona główna</Link> 
                        <br></br>
                        <hr></hr>
                        <Link to="/dostepne_leki">Dostępne leki</Link> 
                        <br></br>
                        <hr></hr>
                        <Link to="/zamiennik">Znajdź lek lub zamiennik</Link>
                        <br></br>
                        <hr></hr>                  
                        <Link to="/sprzedaz">Dokonaj sprzedaży</Link>
                        <br></br>
                        <hr></hr>
                        <a href="hurtownia.js">Zamów z hurtowni</a>
                        <br></br>
                        <hr></hr>
                        <a href="#">Generuj raport</a>
                        <br></br>
                        <hr></hr>
                        <a href="edycja.js">Zarządzaj kontem</a>
                        <br></br>
                        <hr></hr>
                        <a href="./App.js">Wyloguj</a>
                    </Routing>
                </nav>

                <article>
                    <p>
                        Zalogowałeś się jako: {user.name} {user.surname}
                        <br></br>
                        Pracujesz w filii: {user.filia}
                    </p>
                </article>
        </div>
  );

}

export default Panel;
