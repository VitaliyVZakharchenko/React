import React from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  pickColor = (text) => {
    this.setState({
      color: text,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onPointerEnter={() => this.pickColor("coral")}
            onPointerLeave={() => this.pickColor("")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onPointerEnter={() => this.pickColor("aqua")}
            onPointerLeave={() => this.pickColor("")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onPointerEnter={() => this.pickColor("bisque")}
            onPointerLeave={() => this.pickColor("")}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
