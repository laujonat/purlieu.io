import React, { Component, Fragment } from "react"
import { WELCOME_DESCRIPTION } from "../../assets/loading/constants"

export default class InputForm extends Component {
  constructor(props) {
    super(props)

    const addressInput = this.props.currentAddress
    this.state = {
      dollarInput: "",
      addressInput: addressInput,
      formSubmitted: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentAddress !== this.props.currentAddress) {
      this.setState({ addressInput: this.props.currentAddress })
    }
  }

  changeFormState = () => {
    this.refs.btn.removeAttribute("disabled")
  }

  submitForm = e => {
    e.preventDefault()
    this.refs.btn.setAttribute("disabled", "disabled")
    const { drawBoundaries } = this.props; 
    const { dollarInput, addressInput } = this.state;

    drawBroundaries ? drawBroundaries(dollarInput, addressInput) : null
  }

  updateInput = field => e => {
    this.setState({ [field]: e.target.value })
  }

  validateDollar = amt => {
    const regex = /^\$?[0-9]+(\.[0-9][0-9])?$/
    const bound = amt >= 9.99 && amt <= 400
    return regex.test(amt) && bound
  }

  validate = () => {
    const { dollarInput, addressInput } = this.state
    let checkValidDollar = this.validateDollar(dollarInput)
    return checkValidDollar && addressInput.length > 0
  }

  render() {
    if (!this.props.currentAddress) return null
    const isEnabled = this.validate()

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
              className={`dollar-input`}
              value={this.state.dollarInput}
              onChange={this.updateInput("dollarInput")}
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
              className={`address-input`}
              value={this.state.addressInput}
              onChange={this.updateInput("addressInput")}
            />
          </div>

          <button
            id={formName}
            disabled={!isEnabled}
            className="submit"
            ref="btn"
            onClick={this.submitForm}
          />
          {infoContainer}
        </form>
      </Fragment>
    )
  }
}
