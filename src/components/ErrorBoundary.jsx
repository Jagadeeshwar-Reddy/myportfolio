import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service here
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
                >
                    <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">
                            Oops! Something went wrong
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                        </p>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg overflow-auto">
                                <p className="text-sm font-mono text-red-500 mb-2">
                                    {this.state.error && this.state.error.toString()}
                                </p>
                                <details className="text-sm text-gray-600">
                                    <summary className="cursor-pointer hover:text-gray-900">
                                        Component Stack Trace
                                    </summary>
                                    <pre className="mt-2 whitespace-pre-wrap">
                                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                                    </pre>
                                </details>
                            </div>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Refresh Page
                        </button>
                    </div>
                </motion.div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 