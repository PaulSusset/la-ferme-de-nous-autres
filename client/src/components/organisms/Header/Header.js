import React, { useContext } from "react";
import { AppContext } from "../../FBContext/FBContext";

const Header = () => {
  const { signInWithGoogle, handleSignOut, appUser } = useContext(AppContext);

  return (
    <>
      <div>Header</div>

      {appUser.email ? (
        <>
          <div>Bonjour {appUser.displayName}</div>
          <button onClick={handleSignOut}>Déconnexion</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Connexion</button>
      )}
    </>
  );
};

export default Header;
