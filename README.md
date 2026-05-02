# GraphQL Vue With Route

> 🌐 Language / Ngôn ngữ: **English** | [Tiếng Việt](README.vi.md)

A modern single-page application (SPA) built with **Vue.js 3** and **Vue Router** that demonstrates how to build interactive web applications without build tools. The application features a GraphQL-powered backend for managing users, cats, photos, and social interactions.

## 📚 Documentation Links
- **Screenshot documentation**: [screenshots/SCREENSHOTS_SUMMARY.md](screenshots/SCREENSHOTS_SUMMARY.md)
- **Screenshot documentation (Vietnamese)**: [screenshots/SCREENSHOTS_SUMMARY.vi.md](screenshots/SCREENSHOTS_SUMMARY.vi.md)

## 🎯 Project Overview

This project is designed to demonstrate:
- Vue.js 3 fundamentals with the Composition API
- Vue Router for client-side navigation and routing
- GraphQL queries and mutations for data management
- Building modern SPA without requiring build tools (webpack, vite, etc.)
- Dynamic component loading with vue3-sfc-loader
- State management with custom stores
- Authentication and authorization flows

The application simulates a social platform where users can:
- Browse and manage cats and photos
- Follow/unfollow other users
- Like and unlike cats and photos
- View user profiles and statistics
- Administrators can manage system content and user statuses

## 🔗 Backend Server
This frontend project is designed to work with the **[Fastify-Mercurius-GraphQL](https://github.com/dangkhoa2016/Fastify-Mercurius-GraphQL)** backend server. The backend provides all GraphQL APIs for user management, cats, photos, and social interactions. Make sure to have the backend server running before using this frontend application.

## ✨ Key Features

### User Features
- **User Management**: View user profiles, explore user followers/following
- **Cats Management**: Browse cats, view cat details, upload cat photos
- **Photos Management**: Browse and manage photos for each cat
- **Social Interactions**: 
  - Like/unlike cats and photos
  - Follow/unfollow users
  - View user statistics and top users
- **Authentication**: Login system with user token management
- **User Dashboard**: View personal statistics and interactions

### Admin Features
- **Content Moderation**: Enable/disable users, cats, and photos
- **User Status Management**: Toggle user account status
- **Content Management**: Manage all platform content

### UI/UX Features
- **Responsive Design**: Bootstrap 5 for mobile-friendly layouts
- **Dynamic Loading**: Smooth component transitions
- **Real-time Updates**: Toast notifications for user actions
- **Modal Dialogs**: For user summaries and status management
- **Pagination**: Browse large datasets efficiently
- **Error Handling**: Graceful error pages and error messages
- **Loading States**: Visual feedback during data fetching

## 🏗️ Project Architecture

### Folder Structure
```
src/
├── app.js              # Application entry point
├── router.mjs          # Vue Router configuration
├── components/         # Reusable Vue components
├── views/              # Page-level components
├── stores/             # State management modules
├── libs/               # Utility libraries and helpers
├── assets/             # Stylesheets and images
└── sample-data/        # Mock data for development
```

### Key Components
- **AppHeader/AppFooter**: Main layout components
- **CatsBlock/PhotosBlock/UsersBlock**: Content display components
- **Modal**: Modals for user summaries and status toggles
- **Toast**: Notification system
- **Pagination**: Pagination controls
- **Loading/Error Components**: State display components

### Stores (State Management)
- `authStore.mjs`: Authentication state and user info
- `catsStore.mjs`: Cats data and cache management
- `photosStore.mjs`: Photos data and cache
- `usersStore.mjs`: Users data and relationships
- `toggleLikesStore.mjs`: Like/unlike user interactions
- `toggleFollowsStore.mjs`: Follow/unfollow user interactions
- `toggleStatusesStore.mjs`: Admin status management
- `graphQLStore.mjs`: GraphQL query results caching

### Pages/Views
- **MainPage**: Homepage with featured content
- **CatsList**: Browse and filter cats
- **CatDetail**: Detailed view of a single cat with photos
- **UsersList**: Browse all users and their profiles
- **UserProfile**: Detailed user profile with statistics
- **Login**: Authentication page
- **About**: About page
- **Features**: Feature showcase
- **Pricing**: Pricing information
- **FAQs**: Frequently asked questions
- **NotFound**: 404 error page

## 🛠️ Technologies Stack

### Frontend Framework & Libraries
- **[Vue.js 3](https://v3.vuejs.org/)** - Progressive, reactive UI framework
- **[Vue Router](https://router.vuejs.org/)** - Official router for Single Page Applications
- **[vue3-sfc-loader v0.8.4](https://github.com/FranckFreiburger/vue3-sfc-loader)** - Dynamic Vue SFC loader without build tools
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for GraphQL requests
- **[Bootstrap 5](https://getbootstrap.com/)** - Popular CSS framework
- **[PhotoSwipe v5.4.3](https://photoswipe.com/)** - Responsive image gallery

### Development & Build Tools
- **No build tools required** - Everything runs directly in the browser using ES modules
- **CDN-based dependencies** - Bootstrap and PhotoSwipe from CDN

### GraphQL
- **GraphQL**: Query language for API communication
- **Mock Adapter**: Development mock server using sample data

## 📋 Prerequisites

- **Modern web browser** with ES Module support (Chrome, Firefox, Safari, Edge)
- **Internet connection** for CDN resources and GraphQL API
- **Local HTTP server** to serve files (required for CORS and ES Modules)

## 🚀 Getting Started

### Installation & Running

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd GraphQL-Vue-With-Route
   ```

2. **Serve the application** using any static file server:
   
   **Option 1: Using `serve` npm package**
   ```bash
   npm install -g serve
   serve
   # Open http://localhost:3000 in your browser
   ```

   **Option 2: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

   **Option 3: Using `zrok` (share publicly)**
   ```bash
   zrok share public --backend-mode web .
   ```

   **Option 4: Using any HTTP server**
   - Any web server that serves static files will work (nginx, Apache, Node.js http-server, etc.)

3. **Access the application**:
   - Open your browser and navigate to `http://localhost:8000` (or your server's port)
   - The application will load all dependencies from CDN and local files

### Development Notes
- The project uses mock GraphQL responses stored in `src/sample-data/` by default
- To connect to a real GraphQL backend, modify the `endpoint` variable in `src/libs/api.mjs`
- Components are dynamically loaded using `vue3-sfc-loader`, allowing you to edit `.vue` files without rebuilding
- All state is managed client-side using custom stores with reactive data

## 📝 Usage Examples

### Browsing Cats
1. Navigate to "Cats" from the main menu
2. Browse the list of available cats
3. Click on a cat to view detailed information and associated photos

### Following Users
1. Go to "Users" section
2. Click on any user to view their profile
3. Click "Follow" button to follow the user
4. Access your "Following list" to manage followed users

### Liking Content
1. Browse cats or photos
2. Click the heart icon to like content
3. The like count updates in real-time
4. Access your profile to see all liked items

### Admin Functions (requires admin account)
1. Login with admin credentials
2. Use the modal dialogs to enable/disable users, cats, or photos
3. Manage platform content directly

## 🎓 Learning Resources

This project is excellent for learning:
- Vue 3 Composition API and reactive data
- Client-side routing with Vue Router
- GraphQL fundamentals and query structures
- State management patterns without Vuex/Pinia
- Dynamic component loading techniques
- Building SPAs without build tools
- Bootstrap responsive design
- ES Modules and modern JavaScript

## 📦 Dependencies

### Production Dependencies
- **Vue 3** - UI framework
- **Vue Router** - Routing library
- **Axios** - HTTP client with mock adapter
- **Bootstrap 5** - CSS framework from CDN
- **PhotoSwipe** - Image gallery library from CDN

### Development
- No build tools required
- All development is done directly with .vue files
- Simple HTTP server needed for local development

## 🔧 Configuration

### API Configuration
Edit `src/libs/api.mjs` to configure:
- `endpoint` - GraphQL API endpoint (default: `/` for mock data)
- Mock data mappings for different GraphQL queries

### Router Configuration
Edit `src/router.mjs` to:
- Add new routes
- Configure route guards
- Set route metadata and authentication requirements

### Component Styles
- Global styles in `src/assets/style.css`
- Startup styles in `src/assets/start.css`
- Bootstrap classes for responsive design

## 🔗 Related Projects

- [github.com/dangkhoa2016/GraphQL-Vue-With-Route-Vite](https://github.com/dangkhoa2016/GraphQL-Vue-With-Route-Vite) - Vite version with routing
- [github.com/dangkhoa2016/GraphQL-Vue-Without-Route](https://github.com/dangkhoa2016/GraphQL-Vue-Without-Route) - Version without Vue Router

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

- **Dang Khoa** - [dangkhoa2016](https://github.com/dangkhoa2016)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests with improvements
- Improve documentation

## 📞 Support

For questions or issues:
1. Check the FAQs page in the application
2. Review the code comments and structure
3. Check the [Vue.js Documentation](https://v3.vuejs.org/)
4. Review [GraphQL Documentation](https://graphql.org/)

---

**Happy coding! 🚀**
