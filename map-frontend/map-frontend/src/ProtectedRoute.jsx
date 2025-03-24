import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // const isLoggedIn = window.localStorage.getItem("loggedIn")
    // return isLoggedIn ? <Outlet /> : <Navigate to="/api/login" />
    const isAuthenticated = false
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) navigate("/api/login")
    }, [])

    return (
        children
    )
}

export default ProtectedRoute