import React, { useState, useContext } from "react";
import {
	BoxPicker,
	Container,
	Wrapper,
	InputColor,
	InputFont,
	InputText,
	InputHeader,
	FontOption,
} from "./style/Navigation.style";
import fontList from "../utils/fontList.json";
import { CiEdit } from "react-icons/ci";
import { GlobalState } from "../app";
import { useEffect } from "preact/hooks";

const Navigation = () => {
	const { colorHooks, fontHooks, modeHooks, schemeHooks } = useContext(GlobalState);

	const mode = modeHooks.mode; 

	return (
		<Container>
			<Wrapper>
				<BoxPicker>
					<InputHeader>Change Color</InputHeader>
					<InputColor
						type="color"
						value={colorHooks.color}
						onBlur={({ target }) => colorHooks.handleColor(target.value)}
						onChange={({ target }) => schemeHooks.handleScheme(target.value)}
					/>
				</BoxPicker>
				<BoxPicker>
					<InputHeader>Change Font</InputHeader>
					<InputFont
						value={fontHooks.fontFamily}
						onChange={({ target }) => fontHooks.handleFontFamily(target.value)}>
						{fontOptions}
					</InputFont>
				</BoxPicker>
				<BoxPicker>
					<InputHeader>Change Text</InputHeader>
					<InputText>
						<CiEdit onClick={() => modeHooks.handleMode(!mode)} />
					</InputText>
				</BoxPicker>
			</Wrapper>
		</Container>
	);
};

const fontOptions = fontList.map(item => (
	<FontOption
		key={item.id}
		value={item["font-family"]}
		font={item["font-family"]}>
		{item["font-family"]}
	</FontOption>
));

export default Navigation;
