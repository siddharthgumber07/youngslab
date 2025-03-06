import { useLocation, useNavigate } from "react-router-dom";

const GreetingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <p style={styles.message}>{location.state?.message || "Hello! Welcome to Younglabs."}</p>
                <button onClick={() => navigate("/")} style={styles.button}>Go Back</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1e1e1e"
    },
    box: {
        background: "#2c2c2c",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
        width: "300px",
        textAlign: "center"
    },
    message: {
        fontSize: "16px",
        color: "#fff",
        marginBottom: "15px"
    },
    button: {
        background: "#ff4757",
        color: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "5px",
        fontSize: "14px",
        cursor: "pointer",
        transition: "0.3s"
    }
};

export default GreetingPage;
