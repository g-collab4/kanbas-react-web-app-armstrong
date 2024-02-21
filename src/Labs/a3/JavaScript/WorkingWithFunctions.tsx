import ArrowFunctions from "./Functions/ArrowFunctions"
import ES5Functions from "./Functions/ES5Functions"
import FunctionParenthesisAndParameters from "./Functions/FunctionParenthesisAndParameters"
import ImpliedReturn from "./Functions/ImpliedReturn"

function WorkingWithFunctions() {
    return (
        <div>
            <h1>Working With Functions</h1>
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
        </div>
    )
}
export default WorkingWithFunctions