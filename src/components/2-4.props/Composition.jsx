import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name="Jimmy"></Welcome>
      <Welcome name="Hojoon"></Welcome>
      <Welcome name="David"></Welcome>
      <Welcome name="Kim"></Welcome>
      <Welcome name="HanSol"></Welcome>
    </div>
  );
}
