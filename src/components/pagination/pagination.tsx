
import React, { useState } from "react";
import { Stack, Select, Text, Box } from "@chakra-ui/react";
import '../../table/table.css'
import { mockData } from "../../mockData";

const Pagination = ({ PaginationData, goTONextPage, goToPrevPage, goToLastPage, goToFirstPage, navigateNum }: any) => {

    const [pageNum, setPageNum] = useState<any>(10)

    PaginationData(pageNum)

    return (
        <Box display='flex' flexDirection='row' py={7} className='pagination_container' w='80%' px={8} mx='auto' border={'1px'} borderColor='gray.200' justifyContent='end' alignItems='center'>
            <Text mr={3} display='flex' alignItems='center'> Page: </Text>
            <Select value={pageNum} onChange={(e: any) => setPageNum(e.target.value)} w='70px'>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </Select>
            <Text pl={3} mr={3} display='flex' alignItems='center' className="margin_0"> {navigateNum + 1}-{pageNum} of {mockData.rows.length} </Text>
            <Stack display='flex' me={5} flexDirection='row' alignItems='center' className="margin_0">
                <Text
                    className="cursor_pointer"
                    ml={5}
                    fontSize={28}
                    fontWeight={800}
                    onClick={goToFirstPage}
                >
                    {'<'}
                </Text>
                <Text
                    className="margin_0 cursor_pointer"
                    pl={5}
                    m={0}
                    fontSize={25}
                    onClick={goToPrevPage}
                >
                    {'<'}
                </Text>
                <Text
                    className="margin_0 cursor_pointer"
                    pl={5}
                    fontSize={25}
                    onClick={goTONextPage}
                >
                    {'>'}
                </Text>
                <Text
                    className="margin_0 cursor_pointer"
                    pl={5}
                    fontSize={28}
                    fontWeight={800}
                    onClick={goToLastPage}
                >
                    {'>'}
                </Text>
            </Stack>
        </Box>
    )
}

export default Pagination;