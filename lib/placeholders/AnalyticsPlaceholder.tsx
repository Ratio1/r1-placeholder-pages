import { BorderedCard } from '@components/cards/BorderedCard';
import { SlateCard } from '@components/cards/SlateCard';

export function AnalyticsPlaceholder() {
    return (
        <div className="center-all min-h-screen p-8">
            <div className="col w-full max-w-2xl gap-6">
                <div className="col gap-3 text-center">
                    <h1 className="text-4xl font-bold text-body">Analytics Dashboard</h1>
                    <p className="text-lg text-slate-500">Coming Soon</p>
                </div>

                <BorderedCard>
                    <div className="col gap-3">
                        <h2 className="section-title">Advanced Analytics & Insights</h2>
                        <p className="text-slate-600">
                            Our analytics platform is being developed to provide you with deep insights into your AI
                            operations, compute usage, and performance metrics across the Ratio1 ecosystem.
                        </p>
                    </div>
                </BorderedCard>

                <SlateCard title="What to Expect">
                    <ul className="col gap-2 text-slate-600">
                        <li className="row gap-2">
                            <span className="text-primary">•</span>
                            <span>Real-time performance monitoring</span>
                        </li>
                        <li className="row gap-2">
                            <span className="text-primary">•</span>
                            <span>Resource utilization tracking</span>
                        </li>
                        <li className="row gap-2">
                            <span className="text-primary">•</span>
                            <span>Cost optimization insights</span>
                        </li>
                        <li className="row gap-2">
                            <span className="text-primary">•</span>
                            <span>Custom reporting and dashboards</span>
                        </li>
                    </ul>
                </SlateCard>

                <div className="row justify-center gap-4">
                    <a
                        href="https://ratio1.ai"
                        className="compact rounded-lg bg-primary px-4 py-2 text-white transition-opacity hover:opacity-80"
                    >
                        Back to Ratio1
                    </a>
                </div>
            </div>
        </div>
    );
}
