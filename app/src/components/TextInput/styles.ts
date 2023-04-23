import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ typePassword?: boolean }>`
  position: relative;
  padding: 20px 0 0;
  margin-top: 4px;
  display: flex;

  .form_field {
    font-family: inherit;
    width: 100%;
    border: 1px solid #666;
    outline: 0;
    font-size: 16px;
    color: #212121;
    padding: 12px;
    background: transparent;
    transition: border-color 0.2s;
    height: 16px;
    border-radius: 20px;

    ${(props) =>
      props.typePassword &&
      css`
        border: 1px solid #666;
        border-right: none;
        border-radius: 20px 0 0 20px;
      `}
  }

  .form_field::placeholder {
    color: transparent;
  }

  .form_label {
    pointer-events: none;
  }

  .form_field:placeholder-shown ~ .form_label {
    font-size: 16px;
    cursor: text;
    top: 29px;
    left: 8px;
  }

  label,
  .form_field:focus ~ .form_label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }

  .form_field:focus ~ .form_label {
    color: #0074CA;
  }

  .form_field:focus {
    border: 1px solid #0074CA;

    ${(props) =>
      props.typePassword &&
      css`
        border-right: none;
      `}
  }

  & button {
    width: 10%;
    min-width: 50px;
    border-radius: 0 20px 20px 0;
    border: 1px solid #666;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .form_field:focus ~ button {
    border: 1px solid #0074CA;
    border-left: none;
  }
`;
