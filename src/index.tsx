import * as React from "react";
import * as ReactDOM from "react-dom";
import './style/style.scss';
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello name="Sean" mission="engineering" />,
    document.getElementById("example")
);