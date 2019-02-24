import React from "react";

import "./Model.css";

const model = props => (
  <div className="model">
    <header className="model__header">
      <h1>{props.title}</h1>
    </header>
    <section className="model__content">{props.children}</section>
    <section className="model__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      )}
    </section>
  </div>
);

export default model;
