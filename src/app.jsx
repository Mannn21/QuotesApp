import React from "react";
import { createContext } from "preact";
import CTA from "./components/CTA";
import Navigation from "./components/Navigation";
import InputText from "./components/InputText";
import "./app.css";
import useFont from "./utils/useFontHook";
import useColor from "./utils/useColorHook";
import useText from "./utils/useTextHook";
import useMode from "./utils/useModeHook";
import useScheme from "./utils/useSchemeHook";

export const GlobalState = createContext(undefined);

export function App() {
	const [fontFamily, handleFontFamily] = useFont();
	const [color, handleColor] = useColor();
	const [text, handleText] = useText();
	const [mode, handleMode] = useMode();
	const [scheme, handleScheme] = useScheme();

	const fontHooks = { fontFamily, handleFontFamily };
	const colorHooks = { color, handleColor };
	const textHooks = { text, handleText };
	const modeHooks = { mode, handleMode };
	const schemeHooks = { scheme, handleScheme };

	return (
		<GlobalState.Provider
			value={{ fontHooks, colorHooks, textHooks, modeHooks, schemeHooks }}>
			<CTA />
			<Navigation />
		</GlobalState.Provider>
	);
}
