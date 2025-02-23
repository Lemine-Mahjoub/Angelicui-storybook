import React, { useState } from "react";
import { DataTable } from "./DataTable";
import { Search } from "./search";
import { SearchInput } from "./SearchInput";
import { Table } from "./Table";
import { Header } from "./header";
import { Hrow, Row } from "./Row";
import { HColumn, Column } from "./Column";
import { TableBody } from "./TableBody";
import { Paginator } from "./Paginator";
import { ActualPage } from "./ActualPage";
import { Navigation } from "./Navigation";
import { ActionButton, NextButton, PreviousButton } from "./ActionButton";

interface DefaultDatatableProps {
    dataDefault: Object[];
    headers: string[];
}

export function DefaultDatatable({ dataDefault, headers }: DefaultDatatableProps) {
    const [data, setData] = useState<Object[]>(dataDefault);
    return (
        <DataTable data={data} setData={setData}>
            <Table>
                <Header>
                    <Hrow>
                        {headers.map((header, index) => (
                            <HColumn key={index}>{header}</HColumn>
                        ))}
                    </Hrow>
                </Header>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <Row key={rowIndex}>
                            {Object.values(row).map((col, colIndex) => (
                                <Column key={colIndex}>{col}</Column>
                            ))}
                        </Row>
                    ))}
                </TableBody>
            </Table>
            <Paginator>
                <ActualPage />
                <Navigation />
                <ActionButton>
                    <PreviousButton />
                    <NextButton />
                </ActionButton>
            </Paginator>
        </DataTable>
    );
}