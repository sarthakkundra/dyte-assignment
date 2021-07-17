import React from "react";
import { Text } from "@chakra-ui/react";

const Homepage = () => {
	return (
		<div>
			<Text
				bgGradient='linear(to-l, #7928CA,#FF0080)'
				bgClip='text'
				fontSize='6xl'
				fontWeight='extrabold'>
				URL Shortener
			</Text>
            <Text fontSize="3xl">Shorten your URLs and keep track of them all at one place!</Text>
		</div>
	);
};

export default Homepage;
