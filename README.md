# Netflix Clone

This project is a Netflix clone built using ReactJS. It mimics the basic functionality of Netflix, including movie recommendations, new arrivals, and upcoming movies. The data is fetched from the TMDB API, and trailers are sourced from YouTube. Firebase is used for authentication and as the database.

## Features

- Movie recommendations
- New arrivals
- Upcoming movies
- Movie trailers
- User authentication
- Firebase database integration
- Toast notifications

## Technologies Used

- ReactJS
- React Router DOM
- TMDB API
- Firebase Authentication
- Firebase Database
- React Toastify

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Liladharithole/Netflix-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173`.

## API Keys

You will need to set up API keys for TMDB and Firebase. Create a `.env` file in the root of your project and add the following:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

## Folder Structure

```
Netflix-clone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is no licensed under the MIT License.

## Acknowledgements

This project was created with the help of various AI tools, browser resources, and YouTube tutorials.

## Note

Currently, the project is optimized for desktop and laptop screens. Plans are in place to make it more responsive for mobile screens in the future.
