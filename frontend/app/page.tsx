import Link from 'next/link';
// import PostItem from '../app/submitData';

// ===== api-service:  to split later...
// create-item 
// read
// update 


// read/fetch-items
async function getData() {
  const baseUrl = process.env.API_URL || 'https://track-and-trace-api-v7gpzuhw2a-ew.a.run.app/';
	const res = await fetch(`${baseUrl}items`)
	// handle errors
	if (!res.ok) {
	  throw new Error('Failed to fetch data')
	}
	return res.json();
  }

  // update-items
// async function updateItem(id: number) {
// 	const res = await fetch(`https://track-and-trace-api-v7gpzuhw2a-ew.a.run.app/items/${id}`)
// 	// handle errors
// 	if (!res.ok) {
// 	  throw new Error('Failed to update data')
// 	}
// 	return res.json()
//   }

export default async function Home() {
  const items = await getData();
  const itemDestructured = items.items
  console.log('=========== loggin items === ', typeof items.items, items.items )


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Welcome to T-&-T
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By CK.CarltonK_unlimited{' '}
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center  lg:grid-cols-2 lg:text-left">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      
        <Link href='/items'>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Track and Trace your item here...
        </p>          
        </Link>
      </div>
      </div>
      {itemDestructured.map((item: any)=>{
        return <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {item.id} &nbsp; {item.color}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </div>

        
      </div>
      })}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </div>

        
      </div>
    </main>
  )
}
