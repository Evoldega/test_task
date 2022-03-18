import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Test from '../components/Test/Test'
import HomePage from '../pages/HomePage/HomePage'
import Login from '../components/Login/Login'

const App = () => {

    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path='home' element={<HomePage />}>
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Route>
                </Routes>
            <Test />
        </BrowserRouter>
    )
}

export default App