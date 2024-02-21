import WorkingWithArrays from "./Arrays/WorkingWithArrays";
import IfElse from "./Conditionals/IfElse";
import FunctionDestructing from "./Functions/FunctionDestructing";
import Destructing from "./JSON/Destructing";
import House from "./JSON/House";
import JsonStringify from "./JSON/JsonStringify";
import Spreading from "./JSON/Spreading";
import TemplateLiterals from "./String/TemplateLiterals";
import BooleanVariables from "./Variables/BooleanVariables";
import VariablesAndConstants from "./Variables/VariablesAndConstants";
import VariableTypes from "./Variables/VariableTypes";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <JsonStringify />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}
export default JavaScript