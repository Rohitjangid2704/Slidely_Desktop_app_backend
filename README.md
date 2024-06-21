
# Backend Project

This is a backend server built with Express and TypeScript. It handles form submissions and allows viewing of saved submissions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/backend-project.git
   ```

2. **Navigate into the project directory**:
   ```sh
   cd backend-project
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

1. **Start the server**:
   ```sh
   npx ts-node src/index.ts
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Ping

- **URL**: `/ping`
- **Method**: `GET`
- **Description**: A simple endpoint to check if the server is running.
- **Response**:
  ```json
  true
  ```

### 2. Submit

- **URL**: `/submit`
- **Method**: `POST`
- **Parameters**:
  - `name` (string): The name of the person submitting the form.
  - `email` (string): The email of the person submitting the form.
  - `phone` (string): The phone number of the person submitting the form.
  - `github_link` (string): The GitHub repository link.
  - `stopwatch_time` (string): The time recorded by the stopwatch.
- **Description**: Submits a new form entry.
- **Example Request**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "github_link": "https://github.com/johndoe/repo",
    "stopwatch_time": "00:05:30"
  }
  ```

### 3. Read

- **URL**: `/read`
- **Method**: `GET`
- **Parameters**:
  - `index` (number): The 0-indexed position of the form entry to read.
- **Description**: Reads a specific form entry based on the index.
- **Response**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "github_link": "https://github.com/johndoe/repo",
    "stopwatch_time": "00:05:30"
  }
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
