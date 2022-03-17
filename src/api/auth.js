import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import HomePageUtils from '../api/HomePageUtils'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = ({ username, password }) => {

        let body = {
            user: username,
            password: password
        };


        console.log("Login finished");
    }

    const logout = async () => {
        setLoading(true);
        console.log("Start logout fetch");
        await fetch("http://localhost:80/api/logout", { method: "POST", credentials: 'include' })
            .then(res => {
                setUser(null);
                setRole(null);
                setIsAuthenticated(false, isAuthenticated);
                setError('');
                setLoading(false);
            });
    };

    return (
        <AuthContext.Provider value={{ user, role, error, loading, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

