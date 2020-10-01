import React from "react";

export default function NavBar(props) {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div>
        <a class="navbar-brand" href="/">
          Facebook Login App
        </a>
      </div>
      {props.children}
    </nav>
  );
}
