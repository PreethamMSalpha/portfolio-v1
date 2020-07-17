import React, { useState } from "react";

import "./skills-knowledge.styles.scss";
// import moon from "../../assets/nav-bar/moon.svg";

import { APP, UI, STATE, DATABASE, FRONTEND, BACKEND } from "../../skills.data";

function ImgTitle({ name, imageUrl }) {
  return (
    <div className="img-title">
      <img alt="icon" src={imageUrl} />
      <p>{name}</p>
    </div>
  );
}

function Knowledge() {
  const [image, setImage] = useState({ APP });
  const appItems = image.APP.items;

  const [ui, setUi] = useState({ UI });
  const uiItems = ui.UI.items;

  const [stateManagement, setStateMangament] = useState({ STATE });
  const stateItems = stateManagement.STATE.items;

  const [database, setDatabase] = useState({ DATABASE });
  const databaseItems = database.DATABASE.items;

  const [frontend, setFrontend] = useState({ FRONTEND });
  const frontendItems = frontend.FRONTEND.items;

  const [backend, setBackend] = useState({ BACKEND });
  const backendItems = backend.BACKEND.items;

  return (
    <div className="knowledge">
      <div className="heading">
        <h1>Skills</h1>
      </div>
      <div className="skills-col">
        <h3>App Development</h3>
        <div className="img-title-com">
          {appItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <h3>UI/UX Designing</h3>
        <div className="img-title-com">
          {uiItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <h3>State Management</h3>
        <div className="img-title-com">
          {stateItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <h3>Databases</h3>
        <div className="img-title-com">
          {databaseItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <h3>Frontend</h3>
        <div className="img-title-com">
          {frontendItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
        <h3>Backend</h3>
        <div className="img-title-com">
          {backendItems.map(({ id, name, imageUrl }) => (
            <ImgTitle key={id} name={name} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
