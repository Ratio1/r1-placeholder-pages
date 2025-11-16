import { BorderedCard } from '@components/cards/BorderedCard';
import { SlateCard } from '@components/cards/SlateCard';

export function DashboardPlaceholder() {
    return (
        <div className="center-all min-h-screen p-8">
            <div className="col w-full max-w-2xl gap-6">
                <div className="col gap-3 text-center">
                    <h1 className="text-4xl font-bold text-body">Dashboard</h1>
                    <p className="text-lg text-slate-500">Under Construction</p>
                </div>

                <BorderedCard>
                    <div className="col gap-3">
                        <h2 className="section-title">Your Command Center</h2>
                        <p className="text-slate-600">
                            The Ratio1 Dashboard will be your central hub for managing AI deployments, monitoring
                            resources, and controlling your entire AI infrastructure from one unified interface.
                        </p>
                    </div>
                </BorderedCard>

                <SlateCard title="Coming Features">
                    <div className="col gap-2 text-slate-600">
                        <p className="font-medium text-body">Unified Control Panel</p>
                        <p>Manage all your AI services, deployments, and resources in one place</p>
                    </div>
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
