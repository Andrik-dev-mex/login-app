import React, { useState } from "react";

const Post = ({ user }) => {
  const [link, setLink] = useState({ linkPost: "" });

  const handleChange = (e) => {
    setLink({ [e.target.name]: e.target.value });
    console.log(link);
  };

  const selectPost = () => {
    window.FB.ui(
      {
        method: "share",
        href: link.linkPost,
      },
      (response) => {
        console.log(response);
      }
    );
  };

  const selectMessenger = () => {
    window.FB.ui(
      {
        method: "send",
        link: link.linkPost,
      },
      (response) => {
        console.log(response);
      }
    );
  };

  const selectFeed = () => {
    window.FB.ui({
      method: "feed",
        link: link.linkPost,
    }, (response) => {
      console.log(response);
    })
  };

  const protectField = () => {
    if (link.linkPost === "") return true;
  };

  return (
    <div className="container">
      <h2 className="display-4">Bienvenido {user.name}</h2>
      <p className="blog-post-meta">{Date.now}</p>
      <p>
        Hola {user.name} hemos creado este mini cliente de facebook con el
        proposito de poder hacer mas facil la tarea de compartir cosas con las
        personas que te siguen en tu red social, solo agrega la url al
        formulario para compartir algo en segundos.
      </p>
      <div>
        <form className="form-inline">
          <label htmlFor="linkPost" className="mr-sm-2">
            Link a compartir:
          </label>
          <input
            type="text"
            name="linkPost"
            onChange={handleChange}
            className="form-control mr-sm-2"
          />
          <button
            type="button"
            onClick={selectPost}
            className="btn btn-primary mr-sm-2"
            disabled = {protectField()}
          >
            Publicar
          </button>
          <button
            type="button"
            onClick={selectMessenger}
            className="btn btn-primary mr-sm-2"
            disabled = {protectField()}
          >
            Enviar por Messenger
          </button>
          <button
            type="button"
            onClick={selectFeed}
            className="btn btn-primary mr-sm-2"
            disabled = {protectField()}
          >
            Compartir
          </button>
        </form>
      </div>
      <div className="social"></div>
    </div>
  );
};

export default Post;
