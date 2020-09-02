import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";

const rootElement = document.querySelector("#root");

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-01",
    age: 22,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Sam",
  },
  {
    id: "id-4",
    age: 26,
    name: "Mack",
  },
  {
    id: "id-5",
    age: 65,
    name: "Tad",
  },
  {
    id: "id-6",
    age: 28,
    name: "Molly",
  },
  {
    id: "id-7",
    age: 33,
    name: "Dolly",
  },
  {
    id: "id-8",
    age: 25,
    name: "Jimm",
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
