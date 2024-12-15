import React from "react";

function Article({ title, imgSrc, imgAlt }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={`${process.env.PUBLIC_URL}/assets/${imgSrc}`} alt={imgAlt} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        ligula vitae urna consectetur vulputate.
      </p>
      <a href="#">Continue reading...</a>
    </article>
  );
}

export default Article;
