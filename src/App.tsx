// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';
import LoadingScreen from './components/LoadingScreen';

// ScrollToTop component to handle scroll behavior on route changes
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  // Navigation loading effect
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleEnd = () => setIsNavigating(false);

    // Add event listeners for route changes
    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleEnd);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleEnd);
    };
  }, []);

  // Show loading screen on initial load
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      {/* Navigation loading indicator */}
      {isNavigating && (
        <div className="fixed top-0 left-0 w-full h-1 bg-neon-blue animate-pulse z-50" />
      )}
      
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Main content */}
      <div className="min-h-screen bg-deep-space text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Error Boundary could be added here */}
      {/* <ErrorBoundary /> */}
    </Router>
  );
};

// Error Boundary Component (Optional)
class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-deep-space text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-neon-blue text-deep-space px-6 py-2 rounded-full hover:bg-white transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default App;
