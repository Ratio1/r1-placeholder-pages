import { BorderedCard } from '@components/cards/BorderedCard';
import { SlateCard } from '@components/cards/SlateCard';

export function DrivePlaceholder() {
    return (
        <div className="center-all min-h-screen p-8">
            <div className="col w-full max-w-2xl gap-6">
                <div className="col gap-3 text-center">
                    <h1 className="text-4xl font-bold text-body">R1 Drive</h1>
                    <p className="text-lg text-slate-500">Currently in Development</p>
                </div>

                <BorderedCard>
                    <div className="col gap-3">
                        <h2 className="section-title">We&apos;re Building Something Great</h2>
                        <p className="text-slate-600">
                            R1 Drive is currently under active development. Our team is working hard to deliver a
                            powerful, decentralized file storage solution built on the Ratio1 Protocol.
                        </p>
                    </div>
                </BorderedCard>

                <SlateCard title="Want to Try R1FS?">
                    <p className="text-slate-600">
                        Do you want to try our R1FS demo? You can check it out at{' '}
                        <a
                            href="https://r1fs-demo.ratio1.ai"
                            className="font-medium text-primary underline hover:opacity-80"
                        >
                            r1fs-demo.ratio1.ai
                        </a>
                    </p>
                    <div className="row gap-4">
                        <a
                            href="https://r1fs-demo.ratio1.ai"
                            className="compact rounded-lg bg-primary px-4 py-2 text-white transition-opacity hover:opacity-80"
                        >
                            Visit R1FS Demo
                        </a>
                        <a
                            href="https://ratio1.ai"
                            className="compact rounded-lg border-2 border-slate-150 bg-white px-4 py-2 text-body transition-opacity hover:opacity-70"
                        >
                            Learn More
                        </a>
                    </div>
                </SlateCard>

                <div className="col gap-2 text-center text-sm text-slate-500">
                    <p>Stay tuned for updates on our progress</p>
                </div>
            </div>
        </div>
    );
}
