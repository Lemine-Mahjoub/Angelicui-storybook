import React, { useState } from "react";
import { useDataTable } from "./DataTable";

export function SearchInput() {
    const { data, setData } = useDataTable();
    const [query, setQuery] = useState("");
    const [originalData, setOriginalData] = useState(data);

    // Sauvegarder les données originales et réappliquer le filtre si nécessaire
    React.useEffect(() => {
        setOriginalData(data);
        if (query.trim()) {
            const filteredData = data.filter((item) =>
                Object.values(item).some((value) =>
                    String(value).toLowerCase().includes(query.toLowerCase())
                )
            );
            setData(filteredData);
        }
    }, [data]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("data =",data);
        console.log("originalData =",originalData);
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (!searchQuery.trim()) {
            setData(originalData);
            return;
        }

        const filteredData = originalData.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setData(filteredData);
    };
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
        />
    );
}