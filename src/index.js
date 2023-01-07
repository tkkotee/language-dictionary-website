import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage/homepage';
import ErrorPage from './components/ErrorPage/errorpage';
import AboutPage from './components/AboutPage/aboutblurb';

// Set up router for the app to use
// Everything is wrapped in the App component
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        // For base path. show home page inside app
        path: "/language-dictionary-website",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
      },
      {
        // For about path, show about page
        path: "/language-dictionary-website/about",
        element: <AboutPage/>,
        errorElement: <ErrorPage/>,
      },
    ]
  },
]);

// Wrap the main app component in chakra provider so that we can use chakra ui
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
);


