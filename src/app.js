/*
 * File: app.js
 * Author: Vinkovits László
 * Copyright: 2023, Vinkovits László
 * Group: SZOFT I/II/N
 * Date: 2023-05-19
 * Github: https://github.com/VinLaszlo
 * Licenc: GNU GPL
 */

const doc = {
  tbody: document.querySelector("#tbody"),
};

const state = {
  host: "http://localhost:8000/",
  ships: [],
};

window.addEventListener("load", () => {
  init();
});

function init() {
  getShips();
}

function getShips() {
  let endpoint = "ships";
  let url = state.host + endpoint;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      state.ships = result;
      render();
    });
}

function render() {
  var rows = "";
  state.ships.forEach((ship) => {
    var row = `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
        </tr>
    `;
    rows += row;
    console.log(ship.name);
  });
  doc.tbody.innerHTML = rows;
}