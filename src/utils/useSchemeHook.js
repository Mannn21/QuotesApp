import { useState } from "preact/hooks";
import convertColor from "./convertColor";

export default function useScheme() {
	const [scheme, setScheme] = useState("Light");

	const handleScheme = colorInput => {
		const color = convertColor(colorInput);
		color <= 50 ? setScheme("Dark") : setScheme("Light");
	};

	return [scheme, handleScheme];
}
