import React, { useContext, useEffect } from "react";
import URLContext from "../../context/URLContext";
import axios from "axios";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	Text,
	HStack,
	Box,
	IconButton,
	useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
const Index = () => {
	const UrlContext = useContext(URLContext);
	const { urls, getAllUrls, deleteUrl } = UrlContext;

	useEffect(() => {
		getAllUrls();
	}, [urls]);

	const handleClick = async (e) => {
		console.log(e.target.innerText);
		const redirect = await axios.get(`/${e.target.innerText}`);
		window.location.replace(redirect.data);
	};

	const getUnique = (arr) => {
		let uniqueSet = new Set();

		arr.forEach((obj) => uniqueSet.add(obj.ipAddress))

		return uniqueSet.size
	};

	const toast = useToast();
	return (
		<div>
			<Table variant='simple'>
				<TableCaption>My URLs</TableCaption>
				<Thead>
					<Tr>
						<Th>Original URL</Th>
						<Th>Shortened </Th>
						<Th isNumeric>Total hits</Th>
						<Th isNumeric>Unique hits</Th>
					</Tr>
				</Thead>
				<Tbody>
					{urls.map((url) => (
						<Tr>
							<Td>
								<Text isTruncated>{url.fullURL}</Text>
							</Td>
							<HStack>
								<Box onClick={handleClick}>
									<Text>{url.shortURL}</Text>
								</Box>
								<Box>
									<IconButton
										onClick={() => deleteUrl(url.shortURL)}
										icon={<DeleteIcon />}></IconButton>
									<IconButton
										onClick={() => {
											deleteUrl(url.shortURL);
											toast({
												title: "Updation in progress",
												description: "Enter new URL in input box",
												status: "warning",
												duration: 5000,
												isClosable: true,
											});
										}}
										icon={<EditIcon />}></IconButton>
								</Box>
							</HStack>
							<Td isNumeric>{url.unique.length}</Td>
							<Td isNumeric>{getUnique(url.unique)}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</div>
	);
};

export default Index;
