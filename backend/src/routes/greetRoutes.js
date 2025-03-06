import express from "express";

const router = express.Router();

router.get("/greet", (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

export default router;
