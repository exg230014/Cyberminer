import React, { createContext, useContext, useState } from 'react';
const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/api/v1'

export const ResultContextProvider = ( { children } ) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('ELON MUSK');

    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch('${baseUrl}${type}', {
        method: 'GET',
        headers: {'x-rapidapi-host':'google-search74.p.rapidapi.com', 'x-rapidapi-key':'2decebd82amsh421fe27b5e37e6ap1500b5jsn27c6234da626'}
        });

        const data = await response.json();

        setResults(data);

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);