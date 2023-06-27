import Link from 'next/link';

async function PostItem(data: FormData) {
  "use server"

  const color = data.get('color');
  const price = data.get('price');

  const body = JSON.stringify({ color, price });

  try {
    const baseUrl = process.env.API_URL || 'https://track-and-trace-api-v7gpzuhw2a-ew.a.run.app/';
    const res = await fetch(`${baseUrl}items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const result = await res.json();
  } catch (error) {
    console.log('====error ', error)
  }
}

export default async function ItemDataPage() {
  'use client'
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Link href='/'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Adding new item...
          </p>
        </Link>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By CK.CarltonK_unlimited{' '}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center justify-between before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>

          {/*  client-side-action-form */}
          <form action={PostItem} className="flex gap-2 flex-col-7">
            <label htmlFor="color">Item color </label>
            <input type="text" id="color" name="color" required />

            <label htmlFor="price">Price </label>
            <input type="number" id="price" name="price" required />

            <button type="submit">Add Item </button>
          </form>



          {/* server-side-action-form */}
          {/* <form onSubmit={postItem} className="flex gap-2 flex-col-7">
      <label htmlFor="color">Item color </label>
      <input type="text" id="color" name="color" required />
 
      <label htmlFor="price">Price </label>
      <input type="number" id="price" name="price" required />
 
      <button type="submit">Add Item </button>
    </form> */}
          {/* end of server-component */}






        </div>
      </div>

      <div className='container z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className="row relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          {' '}
          <div className='col'>
            <p> track-&-trace</p>
          </div>
        </div>

        <div className='row'>
          <Link href='/'>
            <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
              Back-arrow-here... Back to T-n-T home-icon-here
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}