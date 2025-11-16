import { BorderedCard } from '@components/cards/BorderedCard';
import { SlateCard } from '@components/cards/SlateCard';

export function DefaultPlaceholder() {
    return (
        <div className="center-all min-h-screen p-8">
            <div className="col w-full max-w-2xl gap-6">
                <div className="col gap-3 text-center">
                    <h1 className="text-4xl font-bold text-body">Service Not Implemented</h1>
                    <p className="text-lg text-slate-500">This service is currently under development</p>
                </div>

                <BorderedCard>
                    <div className="col gap-3">
                        <h2 className="section-title">What does this mean?</h2>
                        <p className="text-slate-600">
                            The service you&apos;re trying to access hasn&apos;t been implemented yet. We&apos;re working
                            hard to bring this feature to you soon.
                        </p>
                    </div>
                </BorderedCard>

                <SlateCard title="Need Help?">
                    <p className="text-slate-600">
                        If you have questions or need assistance, please contact our support team or visit our
                        documentation.
                    </p>
                    <div className="row gap-4">
                        <a
                            href="https://ratio1.ai"
                            className="compact rounded-lg bg-primary px-4 py-2 text-white transition-opacity hover:opacity-80"
                        >
                            Visit Ratio1.ai
                        </a>
                        <a
                            href="https://docs.ratio1.ai"
                            className="compact rounded-lg border-2 border-slate-150 bg-white px-4 py-2 text-body transition-opacity hover:opacity-70"
                        >
                            Documentation
                        </a>
                    </div>
                </SlateCard>
            </div>
        </div>
    );
}
