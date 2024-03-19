import ArrayStateVariable from './ArrayStateVariable';
import BooleanStateVariables from './BooleanStateVariables';
import ClickEvent from './ClickEvent';
import Counter from './Counter';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ParentStateComponent from './ParentStateComponent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunction';
import StringStateVariables from './StringStateVariables';
import React from "react";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
}
export default Assignment4;