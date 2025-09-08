const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// FAQ knowledge base
const faqs = {
  "program": "We offer Executive Leadership, Emerging Leaders, Women in Leadership, and Digital Leadership Transformation programs.",
  "duration": "Programs range from 6 to 12 weeks depending on the program.",
  "certification": "Yes, you will receive an internationally recognized certificate upon completion.",
  "mentor": "Our mentors include Fortune 500 CEOs, Harvard faculty, leadership coaches, and industry experts.",
  "pricing": "Program fees range from $1,499 to $2,999 with group discounts and installment options."
};

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Iron Lady Chatbot Backend is Running!");
});

// Chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let reply = "I’m not sure about that. Please ask about programs, duration, certification, mentors, or pricing.";

  for (let key in faqs) {
    if (userMessage.includes(key)) {
      reply = faqs[key];
      break;
    }
  }

  res.json({ reply });
});

// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
