import  React from "react";
import MainPage from "./componts/firstPage";
import "./App.css";


function App() {
    const styles = {
        backgroundColor: "#FFF8E7",
        color: "white",
        padding: "10px",
        width: "65%",
        textAlign: "center",
        marginBottom: "10px",
        fontSize: "20px"
    };
    return (
        <div style={styles}>
        <MainPage />
        </div>
    )
}

export default App;
