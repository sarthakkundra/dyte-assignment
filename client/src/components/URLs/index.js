import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
    HStack,
    Box,
    IconButton
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
const Index = () => {
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
					<Tr>
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
					</Tr>
				</Tbody>
			</Table>
		</div>
	);
};

export default Index;
