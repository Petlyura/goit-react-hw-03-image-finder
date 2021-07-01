import React, { Component } from "react";
import Spinner from "react-loader-spinner";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SpinerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Loader extends Component {
  render() {
    return (
      <SpinerContainer>
        <Spinner
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={200}
        />
      </SpinerContainer>
    );
  }
}
