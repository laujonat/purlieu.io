import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default class InputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dollarInput: "",
      addressInput: this.props.currentAddress,
      formSubmitted: false,
      isButtonEnabled: true
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentAddress !== this.props.currentAddress) {
      this.setState({ addressInput: this.props.currentAddress })
    }
  }

  onSubmitClicked = e => {
    e.preventDefault()
    this.setState(
      {
        formSubmitted: true
      },
      () => {
        const { onSubmit } = this.props
        const { dollarInput, addressInput } = this.state

        onSubmit ? onSubmit(dollarInput, addressInput) : null
      }
    )
  }

  onInputChange = field => e => {
    this.setState({ [field]: e.target.value }, this.validateInputs)
  }

  validateDollar = amt => {
    const regex = /^\$?[0-9]+(\.[0-9][0-9])?$/
    const bound = amt >= 9.99 && amt <= 400
    return regex.test(amt) && bound
  }

  validateInputs = () => {
    const { dollarInput, addressInput } = this.state
    return (
      this.validateDollar(dollarInput) &&
      (addressInput && addressInput.length > 0)
    )
  }

  render() {
    if (!this.props.currentAddress) return null
    const { dollarInput, addressInput, isButtonEnabled } = this.state

    let formClassName, formName, infoContainer

    if (this.state.formSubmitted) {
      formName = "submitted"
      formClassName = "user-submitted-form"
    } else {
      formClassName = "user-input-form"
      infoContainer = (
        <div className="info-container">
          <p>{WELCOME_DESCRIPTION}</p>
        </div>
      )
    }

    return (
      <Fragment>
        <form className={formClassName}>
          <div id={formName} className="question">
            WHERE CAN I GO WITH
          </div>

          <div id={formName} className="dollar-input-div">
            <img
              className="dollar-input-icon"
              src="https://i.imgur.com/um4yd7D.png"
            />
            <input
              type="number"
              id={formName}
              className="dollar-input"
              value={dollarInput}
              onChange={this.onInputChange("dollarInput")}
            />
          </div>

          <div id={formName} className="question">
            &nbsp;FROM&nbsp;
          </div>

          <div id={formName} className="address-input-div">
            <img
              className="address-input-icon"
              src="https://i.imgur.com/UFHf4wX.png"
            />
            <input
              type="text"
              id={formName}
              className="address-input"
              value={addressInput}
              onChange={this.onInputChange("addressInput")}
            />
          </div>

          <button
            id={formName}
            disabled={!isButtonEnabled}
            className="submit"
            onClick={this.onSubmitClicked}
          />
          {infoContainer}
        </form>
      </Fragment>
    )
  }
}

InputForm.propTypes = {
  currentAddress: PropTypes.string,
  onSubmit: PropTypes.func
}

InputForm.defaultProps = {
  currentAddress: null,
  onSubmit: null
}
