import "./App.css";
import logo from "./logo.png"; // with import
import { Icon } from "@iconify/react";

const schedule = require("./schedule.json");
const gameData = schedule["games"];

function toggleDropdown() {
  if (document.getElementById("dropdownMenu-wrapper").style.display == "none") {
    document.getElementById("dropdownMenu-wrapper").style.display = "flex";
  } else {
    document.getElementById("dropdownMenu-wrapper").style.display = "none";
  }
}
function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="sfs baseball"></img>
        <nav className="navbar-wrapper">
          <div className="navbar-item item-1">Varsity</div>
          <div className="navbar-item item-2">J.V.</div>
          <div className="navbar-item item-3">Flordia</div>
          <div className="navbar-item item-4">Records</div>
          <div className="navbar-item item-5">History</div>
          <div className="navbar-item item-6">Info</div>
        </nav>
        <div id="dropdownMenu-toggle" onClick={toggleDropdown}>
          =
        </div>
      </header>
      <div id="dropdownMenu-wrapper">
        <div className="dropdownMenu-item dropdownitem-1">Varsity</div>
        <div className="dropdownMenu-item dropdownitem-2">J.V.</div>
        <div className="dropdownMenu-item dropdownitem-3">Flordia</div>
        <div className="dropdownMenu-item dropdownitem-4">Records</div>
        <div className="dropdownMenu-item dropdownitem-5">History</div>
        <div className="dropdownMenu-item dropdownitem-6">Info</div>
      </div>
      <div className="featuredPages-wrapper">
        <div className="featuredPage girditem-1">
          <h1>Schedule:</h1>
          <div>
            {gameData.map((a) => {
              if (a.field == "Sidwell Friends") {
                return (
                  <h2>
                    <Icon icon="ci:home-alt-fill" className="icon" />
                    <span className="date">{a.date}</span> - {a.opponent}
                  </h2>
                );
              }
              return (
                <h2>
                  <Icon icon="fa-solid:car-side" className="icon" />
                  <span className="date">{a.date}</span> - {a.opponent}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="featuredPage girditem-2"></div>
        <div className="featuredPage girditem-3"></div>
        <div className="featuredPage girditem-4"></div>
        <div className="featuredPage girditem-5"></div>
        <div className="featuredPage girditem-6"></div>
        <div className="featuredPage girditem-7"></div>
        <div className="featuredPage girditem-8"></div>
        <div className="featuredPage girditem-9"></div>
      </div>
    </>
  );
}

export default App;
