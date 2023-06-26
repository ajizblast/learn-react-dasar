import React from "react";

// import component Header
import Header from "./components/header";

function Component() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Create a new component here
function Content() {
  return (
    //   Code Here
    <div>
      <h1>This is a content</h1>
      <button>Click me</button>
    </div>
  );
}

export default Component;
