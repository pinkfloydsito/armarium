"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Componente de ejemplo que sirve como base para server rendering


var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            click: false
        };
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: "handleOnClick",
        value: function handleOnClick() {
            this.setState({ click: true });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.click) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "p",
                        null,
                        "Clicked"
                    )
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        { className: "btn", onClick: this.handleOnClick },
                        "Click me"
                    )
                );
            }
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = Form;