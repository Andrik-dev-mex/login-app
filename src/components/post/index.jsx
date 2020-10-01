import React from "react";
import ShareButton from "../shareButton";

const Post = () => {
  return (
    <div className="container">
      <h2 className="display-4"> Sample Post</h2>
      <p className="blog-post-meta">01/10/20</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        ratione eum velit eveniet dicta, a natus vero delectus quam sequi.
      </p>
      <span>Compartir Post</span>
      <div className="social">
        <ShareButton url={""} title="ejemplo de publicacion"></ShareButton>
      </div>
    </div>
  );
};

export default Post;
