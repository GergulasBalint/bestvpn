import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section className="text-center py-12" role="alert" aria-live="polite">
          <div itemScope itemType="http://schema.org/WebPage">
            <h2 className="text-2xl text-cyber-blue mb-4" itemProp="name">
              Best VPN UK News - Temporary Service Interruption
            </h2>
            <p className="text-cyber-gray" itemProp="description">
              We're experiencing a temporary issue loading the latest VPN news and updates. 
              Please refresh the page to try again or check back shortly for the latest VPN service reviews and updates.
            </p>
            <meta itemProp="keywords" content="Best VPN UK, VPN News, UK VPN Services, VPN Updates" />
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 