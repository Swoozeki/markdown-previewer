"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(TextEditor, null),
      React.createElement(
        "h1",
        { id: "title" },
        React.createElement(
          "span",
          null,
          "Markdown Previewer"
        )
      ),
      React.createElement(
        "h6",
        { id: "credit" },
        React.createElement(
          "span",
          null,
          "-Swoozeki"
        )
      )
    );
  };

  return App;
}(React.Component);

var TextEditor = function (_React$Component2) {
  _inherits(TextEditor, _React$Component2);

  function TextEditor() {
    _classCallCheck(this, TextEditor);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.state = {
      text: ""
    };
    return _this2;
  }

  TextEditor.prototype.update = function update(event) {
    this.setState({
      text: event.target.value
    });
  };

  TextEditor.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement("textarea", { id: "text-box", value: this.state.text, onChange: this.update.bind(this), resizable: "false" })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(Preview, { text: this.state.text })
      )
    );
  };

  return TextEditor;
}(React.Component);

var Preview = function (_React$Component3) {
  _inherits(Preview, _React$Component3);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Preview.prototype.createMarkup = function createMarkup(text) {
    return {
      __html: marked(text, { sanitize: true })
    };
  };

  Preview.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "preview-box" },
      React.createElement("span", { dangerouslySetInnerHTML: this.createMarkup(this.props.text) })
    );
  };

  return Preview;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("content"));