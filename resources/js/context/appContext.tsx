import React, { createContext, useContext } from 'react';

interface User {
    name: string;
}

// Define the type for your context value
interface AppContextType {
    user: User | null;
    setUser: (user: User) => void;
}

// Create context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the type for AppProvider props
interface AppProviderProps {
    children: React.ReactNode;
    value: AppContextType;
}

// AppProvider component
export const AppProvider: React.FC<AppProviderProps> = ({ children, value }) => (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

// Custom hook
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
