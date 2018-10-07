import { Component } from "../common/Component";
import { Input } from "../components/Input";

export class Sidebar extends Component {
  constructor(props) {
    super();

    this.props = { onAction: props.onAction };

    this.state = {
      fillInput: new Input({
        target: "background-color",
        label: "Fill",
        onChange: change => this.applyChange(change)
      }),
      borderColorInput: new Input({
        target: "border-color",
        label: "Border",
        onChange: change => this.applyChange(change)
      }),
      sizeInput: new Input({
        target: "height",
        label: "Size",
        onChange: change => this.applyChange(change)
      })
    };
  }

  applyChange({ target, value }) {
    this.props.onAction({ value, target });
  }

  render() {
    return `<div class="m-editor">
              ${this.state.fillInput.render()}
              ${this.state.borderColorInput.render()}
              ${this.state.sizeInput.render()}
            </div>`;
  }
}
