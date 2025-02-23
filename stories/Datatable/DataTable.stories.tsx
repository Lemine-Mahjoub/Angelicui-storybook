
import { DataTable } from "./DataTable";
import { DefaultDatatable } from "./DefaultDatatable";
import { DataTableSearch } from "./DataTableSearch";
import React from "react";
export default {
  title: "Components/DataTable",
  component: DataTable,
};

const dataDefault = [
    { name: "John", age: 30, gender: "Male" },
    { name: "Jane", age: 25, gender: "Female" },
    { name: "Jim", age: 35, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
    { name: "Jill", age: 28, gender: "Female" },
    { name: "Jack", age: 32, gender: "Male" },
];

const headersDefault = ["Name", "Age", "Gender"];


export const Default = () => {
    return <DefaultDatatable dataDefault={dataDefault} headers={headersDefault} />;
};




const headersComplex = ["Name", "Age", "Gender", "City", "Component"];

const dataComplex = [
    { name: "John", age: 30, gender: "Male", city: "New York", component: <button onClick={() => alert("Click me")}>Click me</button> },
    { name: "Jane", age: 25, gender: "Female", city: "Los Angeles", component: <button onClick={() => alert("Click me")}>Click me</button> },
    { name: "Jim", age: 35, gender: "Male", city: "Chicago", component: <button onClick={() => alert("Click me")}>Click me</button> },
    { name: "Jill", age: 28, gender: "Female", city: "Houston", component: <button onClick={() => alert("Click me")}>Click me</button> },
];

export const Complex = () => {

    return <DefaultDatatable dataDefault={dataComplex} headers={headersComplex} />;
};

export const Search = () => {
    return <DataTableSearch headers={headersDefault} data={dataDefault} />;
};
