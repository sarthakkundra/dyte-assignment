import React, { useContext, useEffect } from "react";
import URLContext from '../../context/URLContext';
import axios from 'axios';
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
    IconButton
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
const Index = () => {

	const UrlContext = useContext(URLContext);
	const { urls, getAllUrls } = UrlContext;

	useEffect(() => {
		getAllUrls();
	}, [urls])

	const handleClick = async (e) => {
		console.log(e.target.innerText)
		await axios.get(`/${e.target.innerText}`)
	}
	return (
		<div>
			<Table variant='simple'>
				<TableCaption>My URLs</TableCaption>
				<Thead>
					<Tr>
						<Th>Original URL</Th>
						<Th>Shortened </Th>
						<Th isNumeric>Visitors</Th>
					</Tr>
				</Thead>
				<Tbody>
				{urls.map((url) =>
					<Tr>
						<Td><Text isTruncated>{url.fullURL}</Text></Td>
						<HStack>
							<Box onClick={handleClick}>
								<Text>{url.shortURL}</Text>
							</Box>
							<Box>
							<IconButton icon={<DeleteIcon />}></IconButton>
                            <IconButton icon={<EditIcon />}></IconButton>
							</Box>
						</HStack>
						<Td isNumeric>25</Td>
					</Tr>
				)}
					{/* <Tr>
						<Td>www.google.com</Td>
						<Td>
                        <HStack>
                        <Box>
                        https://goo.gl
                        </Box>
                        <Box>
                            <IconButton icon={<DeleteIcon />}></IconButton>
                            <IconButton icon={<EditIcon />}></IconButton>
                        </Box>
                        </HStack>
                        </Td>
						<Td isNumeric>25</Td>
					</Tr> */}
				</Tbody>
			</Table>
		</div>
	);
};

export default Index;
