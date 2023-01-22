import React from "react";

function GoogleAuthPage() {
  //https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&access_type=offline
  //https://accounts.google.com/o/oauth2/v2/auth?
  // redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground
  // &prompt=consent&response_type=code
  // &client_id=407408718192.apps.googleusercontent.com
  // &scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive
  // &access_type=offline

  console.log(window.location);
  let url = `https://accounts.google.com/o/oauth2/v2/auth?`;
  const redirectUri = `${window.location.origin}/google-auth`;
  const prompt = "consent";
  const clientId =
    "127029116979-8vfa4jobi4p8t85obl4u05kg115g5qtn.apps.googleusercontent.com";
  const scope =
    "https://www.googleapis.com/auth/drive https://spreadsheets.google.com/feeds/";
  const accessType = "offline";

  url += `redirect_uri=${redirectUri}&prompt=${prompt}&response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scope
  )}&access_type=${accessType}`;
  console.log("URL: ", url);

  return (
    <div>
      <h1>GoogleAuthPage</h1>
      <div />
      <div />
      <div />
      <a href={url}>Authenticate</a>
    </div>
  );
}

export default GoogleAuthPage;
