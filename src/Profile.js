import React, { useState } from "react";
function Profile() {
  const [loggedIn, setloggedIn] = useState(33);
  return (
    <div>
      {loggedIn === 1 ? (
        <h1>Welcome User1</h1>
      ) : loggedIn === 2 ? (
        <h1>Welcome User2</h1>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
}
export default Profile;
