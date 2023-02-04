import React from "react";

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome{" "}
      {props.count && `It's ${props.count}`} times
    </h1>
  );
}

function GuestGreeting() {
  return <h1>plese sign up</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="jimmy" count={0} />;
  // }
  // return <GuestGreeting></GuestGreeting>;

  return props.isLoggedIn ? (
    <UserGreeting name="jimmy" count={0} />
  ) : (
    <GuestGreeting></GuestGreeting>
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}></Greeting>
    </div>
  );
}
