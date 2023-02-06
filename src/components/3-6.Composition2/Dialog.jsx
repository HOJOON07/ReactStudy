import React, { useState } from "react";

export default function Dialog(props) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <button onClick={() => setisOpen(true)}>open</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          {typeof props.description === "string" ? (
            <h5>{props.description}</h5>
          ) : (
            props.description
          )}
          <button
            onClick={() => setisOpen(false)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            close
          </button>
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightgray",
          }}
        ></div>
      )}
    </>
  );
}
