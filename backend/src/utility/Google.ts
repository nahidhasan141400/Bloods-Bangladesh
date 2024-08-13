export const GetGoogleOauthURL = (redirect_uri, client_id) => {
  const rootUrl = "https://accounts.google.com/o/oauth2/auth";
  const options = {
    redirect_uri,
    client_id,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  const QueryString = new URLSearchParams(options);
  return `${rootUrl}?${QueryString.toString()}`;
};
