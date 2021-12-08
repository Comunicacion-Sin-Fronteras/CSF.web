// import { Spinner } from "@blueprintjs/core"
import { Spinner } from "reactstrap"
import React from "react"

const Loader = () => {
    return (
        <div className="loader">
            Loading... 
            <Spinner type="border" color="warning" />
        </div>
    )
}

export default Loader