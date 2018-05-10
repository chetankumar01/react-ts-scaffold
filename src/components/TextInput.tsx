import React from 'react';

class TextInput extends React.Component<{}, {}> {
  public render() {
    let { props } = this;
    return (
      <div
        className={`${
          props.meta && props.meta.touched && props.meta.error
            ? 'uk-form-danger'
            : ''
        }`}
      >
        <label className="uk-form-label">{props.label}</label>
        <input
          placeholder={props.placeholder}
          autoFocus={props.autofocus}
          className={`uk-input ${
            props.meta && props.meta.touched && props.meta.error
              ? 'uk-form-danger'
              : ''
          }`}
          type={props.type}
          {...props.input}
        />
        <label
          className="uk-text-small"
          style={
            !(props.meta && props.meta.touched && props.meta.error)
              ? { color: 'transparent' }
              : {}
          }
        >
          {(props.meta && props.meta.error) || props.placeholder || props.label}
        </label>
      </div>
    );
  }
}

export { TextInput };
