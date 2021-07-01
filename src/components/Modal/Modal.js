import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 900px;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  z-index: 2000;
`;

const CloseModal = styled.span`
  position: absolute;
  font-size: 30px;
  color: #fff;
  right: 50px;
  top: 85px;
  &:hover {
    cursor: pointer;
  }
`;

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscPress);
  }

  handleEscPress = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.props.onClose}>
        <CloseModal onClick={this.props.onClose}>
          <i className="fas fa-times"></i>
        </CloseModal>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>
    );
  }
}
