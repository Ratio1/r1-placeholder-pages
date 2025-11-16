import {
    AnalyticsPlaceholder,
    DashboardPlaceholder,
    DefaultPlaceholder,
    DrivePlaceholder,
} from '@lib/placeholders';

type PlaceholderComponent = () => React.JSX.Element;

// Map of service names to their placeholder components
const serviceMap: Record<string, PlaceholderComponent> = {
    drive: DrivePlaceholder,
    analytics: AnalyticsPlaceholder,
    dashboard: DashboardPlaceholder,
    // Add more services here as needed
};

export default function Page() {
    // Get the service name from environment variable
    const service = process.env.NEXT_PUBLIC_SERVICE?.toLowerCase();

    // Get the appropriate component or use default
    const PlaceholderComponent = service && serviceMap[service] ? serviceMap[service] : DefaultPlaceholder;

    return <PlaceholderComponent />;
}
