import Echart from '@/components/Echart';

export default function Page() {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    return (
        <main>
            <Echart option={option} className='mx-auto w-96 h-72' />
        </main>
    );
}
