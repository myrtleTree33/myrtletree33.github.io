import React, { Component } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";

class TypedText extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      startDelay: 350,
      strings: strings,
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1200,
      loop: false
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="type-wrap" {...this.props}>
        <h2>
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </h2>
      </div>
    );
  }
}

export default TypedText;
