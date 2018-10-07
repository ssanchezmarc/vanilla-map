import { Component } from "../common/Component";

export class Input extends Component {
  constructor(props) {
    super();

    this.props = { onChange: props.onChange };

    this.state = {
      target: props.target,
      label: props.label,
      value: props.value
    };
  }

  render() {
    return `<label for="input_${this._id}">${this.state.label}</label>
            <input type="text" id="input_${this._id}"
            value="${this.state.value ? this.state.value : ""}"
            onchange="document.componentRegistry[${
              this._id
            }].onChange(this.value)"/>`;
  }

  onChange(value) {
    this.props.onChange({ target: this.state.target, value });
  }
}
