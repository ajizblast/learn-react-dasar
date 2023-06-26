import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "Fullstack Developer";
  }

  //Create a variable here
  let companyName = "DumbWays.ID";

  return (
    // Code Inside div
    <div>
      Welcome to {companyName} class {/* Then how about using function? */}
      {getMajor()}
    </div>
  );
}

export default EmbedExpression;
