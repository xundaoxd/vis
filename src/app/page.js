import Link from 'next/link'

const links = [
    { title: 'asd', link: '' },
    { title: 'asd', link: '' },
]

export default function Page() {
    return (
        <div className='min-w-full min-h-screen bg-zinc-900'>
            <div className='mx-auto container'>
                <div className='py-8'></div>
                <h1 className='text-white text-4xl font-medium'>Applications</h1>
                <div className='py-4'></div>
                <div className='flex flex-row flex-wrap space-x-6'>
                    {links.map((item, idx) => {
                        return <Link key={idx} href={item.link}>
                            <div className='group min-w-52 min-h-16 rounded-lg border-2 border-zinc-500 hover:border-zinc-200 border-solid p-2'>
                                <h2 className='text-zinc-500 group-hover:text-zinc-200'>{item.title}</h2>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    );
}
