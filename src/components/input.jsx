import React from "react";

const Input = ({ name, label, error, value, ...rest }) => {
  return (
    <div className="form-group">
      <label
        htmlFor={name}
        className={
          value.length ? "form-text u__animation--moveUp" : "form-text"
        }
      >
        {label}
      </label>
      <input
        {...rest}
        // autoFocus
        /*ref={this.username}*/
        name={name}
        id={name}
        className="form-control"
        autoComplete="off"
      />
      {error && (
        <div className="alert">{error.replace('"', "").replace('"', "")}</div>
      )}
    </div>
  );
};

export default Input;
