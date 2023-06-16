import { useState } from "preact/hooks";

export default function useText() {
	const [text, setText] = useState("Ngoding Aja Dulu, Jagonya Belakangan");

	const handleText = textInput => {
		setText(textInput);
	};

	return [text, handleText];
}
