import { useReducer } from "react";

type State = {
	value: string;
	isTouched: boolean;
};

type Action =
	| { type: "INPUT"; value: string }
	| { type: "BLUR" }
	| { type: "RESET" };

const initialInputState = {
	value: "",
	isTouched: false,
};

function inputStateReducer(state: State, action: Action) {
	if (action.type === "INPUT") {
		return { value: action.value, isTouched: state.isTouched };
	} else if (action.type === "BLUR") {
		return { value: state.value, isTouched: true };
	} else if (action.type === "RESET") {
		return { value: "", isTouched: false };
	}
	return initialInputState;
}

export default function useInput(validateValue: (value: string) => boolean) {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	function valueChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "INPUT", value: event.target.value });
	}

	function inputBlurHandler() {
		dispatch({ type: "BLUR" });
	}

	function reset() {
		dispatch({ type: "RESET" });
	}

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
}
