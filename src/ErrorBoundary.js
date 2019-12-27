import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {

    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidMount(error, info) {
        console.error("errorBoundary", error, info);
    }
    render() {

    }
}


export default ErrorBoundary;