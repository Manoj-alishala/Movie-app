# Movie App 🎬

A modern, responsive movie discovery application built with **React** and **Vite**. Browse popular movies, search for your favorites, and curate your own personal watchlist. Data is powered by [The Movie Database (TMDB)](https://www.themoviedb.org/).

## ✨ Features

- **🏠 Home Feed**: Discover the latest popular movies instantly upon loading.
- **🔍 Search Functionality**: Easily find specific movies by title.
- **❤️ Favorites Management**: Add movies to your favorites list and remove them with a single click.
- **💾 Local Storage Support**: Your favorite movies are saved locally, so they persist even after you refresh the browser.
- **📱 Responsive Design**: Seamless experience across desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (v7)
- **State Management**: React Context API
- **Styling**: Vanilla CSS
- **API**: [TMDB API](https://developer.themoviedb.org/docs)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manoj-alishala/Movie-app.git
   cd Movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` (or the URL shown in your terminal) to view the app.

## 📂 Project Structure

```
Movie-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, icons)
│   ├── components/      # Reusable UI components (MovieCard, NavBar)
│   ├── contexts/        # React Context for state management
│   ├── css/             # Stylesheets for pages and components
│   ├── pages/           # Application pages (Home, Favorites)
│   ├── services/        # API service functions
│   ├── App.jsx          # Main application component with routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please feel free to fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Manoj Alishala](https://github.com/Manoj-alishala)
