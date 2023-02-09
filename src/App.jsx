import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import HOC_index from "./HOC_index";


function App() {
    return (
        <div>
            <Header />
            <Button />
            <HOC_index/>
        </div>
    )
}

export default App