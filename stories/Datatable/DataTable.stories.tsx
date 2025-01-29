import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTable } from './DataTable';
import { Paginator } from './Paginator/Paginator';


const meta = {
  component: DataTable,
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const DataColumns = [
    [
        "Rayan",
        "Bouraoui",
        "20",
        "rayan@gmail.com",
        "0606060606",
        <></>
    ],
    [
        "Rayan",
        "Bouraoui",
        "20",
        "rayan@gmail.com",
        "0606060606",
        <></>
    ]
]

const HeaderData = [
    "Nom",
    "Prénom",
    "Age",
    "Email",
    "Téléphone",
    <></>
]


function DefaultChildren() {
    return (
        <>
            <DataTable.Header>
                {HeaderData}
            </DataTable.Header>
            <DataTable.Body>
            {DataColumns.map((colData, index) => (
                <DataTable.Column key={index}>
                    {colData.map((data, index) => (
                        <DataTable.Row key={index}>
                            {data}
                        </DataTable.Row>
                    ))}
                </DataTable.Column>
            ))}
            </DataTable.Body>
            <DataTable.Footer>
                <Paginator>
                    <Paginator.Actual/>
                    <Paginator.NavigationPage/>
                    <Paginator.ActionButton/>
                        <Paginator.PrecedentBtn/>
                        <Paginator.NextBtn/>
                    <Paginator.ActionButton/>
                </Paginator>
            </DataTable.Footer>
        </>
    )
}

export const Default: Story = {
  args: {
    children: <DefaultChildren />,
  },
};




