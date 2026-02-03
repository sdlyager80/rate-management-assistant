import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', backgroundColor: '#FFF5F5' }}>
          <h1 style={{ color: '#D0021B' }}>Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
            <summary>Error Details (click to expand)</summary>
            <p style={{ color: '#666', marginTop: '10px' }}>
              {this.state.error && this.state.error.toString()}
            </p>
            <p style={{ color: '#666', marginTop: '10px', fontSize: '12px' }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </p>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
