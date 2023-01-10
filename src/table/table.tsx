import React, { useEffect, useState } from 'react';
import './table.css'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import Pagination from '../components/pagination/pagination';
import { mockData } from '../mockData'

const TableComponent = () => {
    const [numberOfLines, setNumberOfLines] = useState<number>(10)
    const [selectedRows, setSelectedRows] = useState<any>([])
    const [selectAll, setSelectAll] = useState<any>(false)
    const [navigateNum, setNavigateNum] = useState<number>(0)

    const PaginationData = (data: number) => {
        setNumberOfLines(data)
    }

    const handleRowSelection = (index: number) => {

        const copyData = [...selectedRows]

        if (copyData.includes(index)) {
            const selectedIndex = copyData.indexOf(index)
            copyData.splice(selectedIndex, 1)
        }
        else {
            copyData.push(index)
        }

        setSelectedRows(copyData)
    }

    //   const handleSelectAll = (selected : any) => {

    //     console.log('setSelectedRows')

    //     if(selectedRows.length === 0){
    //         setSelectAll(true)
    //         const tempArray : any = []
    //         mockData.rows.map((v: any, i: number)=>{
    //             tempArray.push(i)
    //         })

    //         setSelectedRows(tempArray)
    //     }else{
    //         setSelectAll(false)
    //         setSelectedRows([])
    //     }
    //   }

    const goTONextPage = () => {
        if (navigateNum !== mockData.rows.length - 1) {
            setNavigateNum(navigateNum + 1)
        }
    }

    const goToPrevPage = () => {
        if (navigateNum > 0) {
            setNavigateNum(navigateNum - 1)
        }
    }

    const goToLastPage = () => {
        if (navigateNum !== mockData.rows.length - 1) {
            setNavigateNum(mockData.rows.length - 1)
        }
    }

    const goToFirstPage = () => {
        if (navigateNum > 0) {
            setNavigateNum(0)
        }
    }

    return (
        <Box my={10}>
            <TableContainer>
                <Table variant='simple' w={'80%'} mx={'auto'} border='1px' borderColor='gray.200' borderRadius={'md'}>
                    <Thead borderTopLeftRadius={'md'} borderTopRightRadius={'md'}>
                        <Tr borderTopLeftRadius={'md'} borderTopRightRadius={'md'}>
                            <Th width={20}><Checkbox defaultChecked={selectAll} onChange={(e: any) => setSelectAll(e.target.checked)} ></Checkbox></Th>
                            {mockData.headers.map((value: any, index: number) => {
                                return <Th fontSize="md" py={8} key={index} isNumeric={value === 'LINK' && true}>{value}</Th>
                            })}
                        </Tr>
                    </Thead>
                    <Tbody className='table_body'>
                        {mockData.rows[navigateNum].map((val: any, i: number) => {
                            return (<>
                                {(i + 1) <= numberOfLines &&
                                    <Tr key={i} className={selectedRows.includes(i) || selectAll ? 'selectedRowColor' : ''}>
                                        <Td><Checkbox onChange={() => { handleRowSelection(i) }} isChecked={selectAll ? selectAll : selectedRows.includes(i)} ></Checkbox></Td>
                                        <Td fontSize="lg" width={10} py={5}>{val.title}</Td>
                                        <Td fontSize="lg" width={10} py={5}>{val.date}</Td>
                                        <Td fontSize="lg" py={5}><Button colorScheme={val.status === 'Pending' ? 'yellow' : 'green'} px={5} color='black' fontSize="sm">{val.status}</Button ></Td>
                                        <Td fontSize="lg" py={5} isNumeric>{val.link}</Td>
                                    </Tr>}
                            </>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            <Pagination
                PaginationData={PaginationData}
                goTONextPage={goTONextPage}
                goToPrevPage={goToPrevPage}
                goToLastPage={goToLastPage}
                goToFirstPage={goToFirstPage}
                navigateNum={navigateNum}
            />
        </Box>
    )
}

export default TableComponent;