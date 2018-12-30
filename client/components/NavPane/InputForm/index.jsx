import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  background-color: red;
  height: 100px;
`

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

    return (
      <Container>
        <div className="question">WHERE CAN I GO WITH</div>

        <div className="dollar-input-div">
          <img
            className="dollar-input-icon"
            src="https://i.imgur.com/um4yd7D.png"
          />
          <input
            type="number"
            className="dollar-input"
            value={dollarInput}
            onChange={this.onInputChange("dollarInput")}
          />
        </div>

        <div className="question">&nbsp;FROM&nbsp;</div>

        <div className="address-input-div">
          <img
            className="address-input-icon"
            src="https://i.imgur.com/UFHf4wX.png"
          />
          <input
            type="text"
            className="address-input"
            value={addressInput}
            onChange={this.onInputChange("addressInput")}
          />
        </div>

        <button
          disabled={!isButtonEnabled}
          className="submit"
          onClick={this.onSubmitClicked}
        />
      </Container>
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
