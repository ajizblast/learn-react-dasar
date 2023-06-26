import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <div>
      <h1>Please Sign In!</h1>
      <button onClick={props.login}>Login</button>
    </div>
  );
}

function ConditionRendering() {
  //init State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // Code Inside div
    <div>
      {/* conditional logic rendering */}
      {isLoggedIn ? (
        <PrivatePage logout={() => setIsLoggedIn(!isLoggedIn)} />
      ) : (
        <GuestPage login={() => setIsLoggedIn(!isLoggedIn)} />
      )}

      <p>{isLoggedIn ? "true" : "false"}</p>
    </div>
  );
}

export default ConditionRendering;
