import React from "react";

export default function LoginButon() {
  const loginFacebook = () => {
    if(!window.FB) return;

    window.FB.getLoginStatus(response => { 
      if(response.status === "connected") { 
        loginFacebookHandler(response)
      } else {
        window.FB.login(loginFacebookHandler, {scope : 'public_profile, email'})
      }
    })
  };

  const loginFacebookHandler = (response) => { 
    console.log(response);
    if (response.status === "connected") { 
      window.FB.api('/me?fields=id,name,email,picture', userData => {
        console.log(userData);
      })
    }
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div
          className="col"
          style={{
            minHeight: 80 + "vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={() => {
              loginFacebook();
            }}
            className="btn btn-primary"
          >
            Iniciar Sesion Con Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
