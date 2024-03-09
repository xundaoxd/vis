export default function Page() {
    return (
        <div className='flex flex-row bg-gray-400'>
            <div className='w-72 h-screen shrink-0 grow-0 bg-white pt-12 flex flex-col items-center' style={{ border: '1px red solid' }}>
                <h1>Echart 可视化</h1>
            </div>
            <div className='shrink grow' style={{ border: '1px blue solid' }}>
            </div>
        </div>
    );
}
