"use client";
import { useSearchParams } from "next/navigation";

// fetch-items
async function getItemEvents(id: any) {
    const baseUrl = process.env.API_URL || 'https://track-and-trace-api-v7gpzuhw2a-ew.a.run.app';
    const res = await fetch(`${baseUrl}/items/${id}/events`)
    // handle errors
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

const Events = async () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const itemEventsCall = await getItemEvents(id);
    const events: Record<string, any>[] = itemEventsCall.events;

    return (
        <div style={{ padding: 50 }}>
            <h1>Events Page</h1>

            {events.map((event: any) => {
                return <div key={event} className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <div
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            {event.title} &nbsp; {event.createdAt}
                            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Event
                        </p>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Events;