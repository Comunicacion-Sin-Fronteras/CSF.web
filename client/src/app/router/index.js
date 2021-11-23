import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { SeniasList, SeniasInsert, SeniasUpdate } from '../pages/Senias'
import { NotFoundError } from '../pages/Errors/'

// import 'bootstrap/dist/css/bootstrap.min.css'

function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/senia/list" exact element={<SeniasList/>} />
                <Route path="/senia/create" exact element={<SeniasInsert/>} />
                <Route
                    path="/senia/update/:id"
                    exact
                    element={<SeniasUpdate/>}
                />
                <Route path="/" element={<div>Home</div>} />
                <Route path="*" element={<NotFoundError/>} />
            </Routes>
        </Router>
    )
}

export default AppRouting