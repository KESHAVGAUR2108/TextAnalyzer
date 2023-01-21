import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
    <b>{props.alert.type}</b> :: {props.alert.message}
    </div>
  );
};