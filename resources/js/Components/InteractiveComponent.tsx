import { useState, useEffect } from 'react';

type DataType = string[]; // Assuming the data is an array of strings

export default function InteractiveComponent() {
    const [data, setData] = useState<DataType | null>(null);

    // Simulated fetch function - replace with your actual data fetching logic
    const fetchSomeData = async (): Promise<DataType> => {
        // Simulate a fetch call
        return new Promise(resolve => {
            setTimeout(() => resolve(["Item 1", "Item 2", "Item 3"]), 3000); // Simulate a network request after a 3 seconds delay
        });
    };

    useEffect(() => {
        fetchSomeData().then(setData);
    }, []);

    return (
        <div>
            {data
                ? <ul>
                    {
                        data.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul> // Display data as a list
                : 'Loading...'}
        </div>
    );
}
