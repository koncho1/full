import React, {useMemo,useEffect, useState} from "react";
import { useTable,usePagination,useSortBy } from "react-table";
import "./Table.css"


const PagedTable=()=>{
    const [dat,setDat]=useState([]);
    useEffect(() => {
        if(dat.length==0)
            fetch('http://localhost:8080/club')
            .then(response => response.json())
            .then(data => setDat(data));
        },[]);
        console.log(dat)

    const col=[
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "City",
            accessor: "city"
        },
        {
            Header: "Year",
            accessor: "year"
        }
    ]

    const columns=useMemo(()=>col,[])
    const data=useMemo(()=>dat,[dat])


    const table=useTable({
        columns,
        data
    },
    useSortBy,
    usePagination
    )

    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow}=table


    if(dat===undefined) return <div>Loading...</div>


    return(
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column=>(
                                <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '':''):''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row=>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>{
                                            return(
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="buttons">
                <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </>
    )
}


export default PagedTable