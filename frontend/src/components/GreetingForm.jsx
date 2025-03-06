import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GreetingForm = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const fetchGreeting = async () => {
        if (!name) {
            setError("Please enter a name.");
            return;
        }
        try {
            const response = await axios.get(`https://youngslab.onrender.com/api/greet?name=${name}`);
            navigate("/greeting", { state: { message: response.data.message } });
        } catch (error) {
            setError(error.response?.data?.error || "Error fetching greeting.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formBox}>
                <h2 style={styles.title}>Welcome to Greeting App</h2>
                <input
                    type="text"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <button onClick={fetchGreeting} style={styles.button}>Get Greeting</button>
                {error && <p style={styles.error}>{error}</p>}
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
    formBox: {
        background: "#2c2c2c",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
        width: "300px",
        textAlign: "center"
    },
    title: {
        fontSize: "18px",
        color: "#fff",
        marginBottom: "15px"
    },
    input: {
        padding: "8px",
        width: "85%",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #444",
        backgroundColor: "#333",
        color: "white",
        fontSize: "14px",
        textAlign: "center"
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
    },
    error: {
        color: "#ff4757",
        marginTop: "10px",
        fontSize: "12px"
    }
};

export default GreetingForm;
