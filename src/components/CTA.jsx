import React, { useContext } from "react";
import {
	Container,
	Wrapper,
	AvatarWrapper,
	HeaderWrapper,
	ImageWrapper,
	Text,
} from "./style/CTA.style.js";
import InputText from "./InputText.jsx";
import { BigHead } from "@bigheads/core";
import { GlobalState } from "../app";

const CTA = () => {
	const { colorHooks, fontHooks, textHooks, modeHooks, schemeHooks } = useContext(GlobalState);
	return (
		<Container backgroundColor={colorHooks.color} height={modeHooks.mode}>
			<InputText />
			<Wrapper height={modeHooks.mode} backgroundColor={colorHooks.color}>
				<HeaderWrapper>
					<Text font={fontHooks.fontFamily} color={schemeHooks.scheme}>
						"{textHooks.text}"
					</Text>
				</HeaderWrapper>
				<AvatarWrapper>
					<ImageWrapper>
						<BigHead/>
					</ImageWrapper>
				</AvatarWrapper>
			</Wrapper>
		</Container>
	);
};

export default CTA;
