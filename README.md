# Iron Lady Leadership Chatbot

A responsive and interactive chatbot interface created for the "Iron Lady Leadership Programs" website. This AI assistant is designed to provide users with instant answers about leadership programs, mentors, certification details, pricing, and more.

##  Features

-   **Interactive UI**: A clean, modern, and responsive chat interface built with HTML, CSS, and vanilla JavaScript.
-   **Instant Responses**: Provides quick answers to frequently asked questions about the leadership programs.
-   **Quick Suggestions**: Includes clickable buttons for common queries to guide the user.
-   **Typing Indicator**: A "typing" animation that simulates a real assistant and improves user experience.
-   **Standalone Frontend**: The `index.html` file works entirely on its own, with a pre-defined knowledge base in JavaScript.
-   **Node.js Backend**: A simple Express.js server (`server.js`) is included to demonstrate a basic backend implementation.

**Note**: The provided `index.html` (frontend) and `server.js` (backend) are not integrated. The frontend operates using a local JavaScript knowledge base, while the backend is a separate, functional server. See the "Future Improvements" section for how to connect them.

##  Technology Stack

-   **Frontend**: HTML5, CSS3, Vanilla JavaScript
-   **Backend**: Node.js, Express.js
-   **Dependencies**: `cors`, `express`

##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and `npm` installed on your system.

### Part 1: Running the Standalone Frontend

The frontend is self-contained and requires no installation steps.

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/ironlady-chatbot.git](https://github.com/your-username/ironlady-chatbot.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd ironlady-chatbot
    ```
3.  Simply open the `index.html` file in your favorite web browser.

### Part 2: Running the Node.js Backend

The backend server is a simple Express application.

1.  **Install dependencies**:
    From the root of the project directory, run:
    ```sh
    npm install
    ```

2.  **Start the server**:
    ```sh
    node server.js
    ```
    The server will start and listen for requests at `http://localhost:3000`.

3.  **Test the backend endpoint**:
    You can test the `/chat` endpoint using a tool like Postman, Insomnia, or `curl`:
    ```sh
    curl -X POST -H "Content-Type: application/json" -d '{"message": "tell me about program duration"}' http://localhost:3000/chat
    ```
    The server should respond with:
    ```json
    {"reply":"Programs range from 6 to 12 weeks depending on the program."}
    ```

## 🛠️ Project Structure

```
.
├── index.html        # Main frontend file with all UI and logic
├── server.js         # Node.js backend server
├── package.json      # Project dependencies and scripts
├── .env.example      # Example environment variables
├── .gitignore        # Files to be ignored by Git
└── README.md         # This documentation file
```

##Future Improvements

1.  **Integrate Frontend with Backend**:
    -   Modify the `sendMessage` function in `index.html` to make a `fetch` API call to the backend endpoint (`http://localhost:3000/chat`).
    -   Replace the client-side `generateResponse` function with logic to display the response from the server.

2.  **Enhance with OpenAI**:
    -   The project already includes the `openai` dependency and a setup for an `OPENAI_API_KEY` in the `.env` file.
    -   Modify `server.js` to initialize the OpenAI client using the API key.
    -   Update the `/chat` endpoint to send user queries to the OpenAI API, providing context from the knowledge base to generate more dynamic and intelligent responses.

3.  **Database Integration**:
    -   Connect the backend to a database (e.g., MongoDB, PostgreSQL) to store and retrieve program information, making the knowledge base dynamic and easier to manage.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
