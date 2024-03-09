'use client'
import { useState } from 'react';

import merge from 'deepmerge';

import Echart from '@/components/Echart';
import Uploader from '@/components/Uploader';

const customRender = {
}

const charts = [
    {
        name: 'Custom',
        option: {
            xAxis: {},
            yAxis: {},
            series: [],
        }
    }
]

export default function Page() {
    const [curIdx, setCurIdx] = useState(0)
    const [option, setOption] = useState({})

    const OnUpload = (data) => {
        (data.series || []).map((se) => {
            if ((se.renderItem || '') in customRender) {
                se.renderItem = customRender[se.renderItem];
            }
        })
        const option = merge(charts[curIdx].option, data)
        setOption(option)
    }

    return (
        <div className='flex flex-row bg-gray-100'>
            <div className='w-72 h-screen shrink-0 grow-0 bg-white'>
                <div className='my-14'>
                    <h1 className='text-center'>Echart 可视化</h1>
                </div>
                <ul>
                    {charts.map((chart, idx) => {
                        return (
                            <li
                                key={idx}
                                onClick={() => { setCurIdx(idx); }}
                                className={'p-4 hover:cursor-pointer hover:bg-gray-200' + (curIdx === idx ? ' bg-gray-200' : '')}
                            >
                                <span>{chart.name}</span>
                            </li>)
                    })}
                </ul>
            </div>
            <div className='shrink grow'>
                <div className='mx-auto w-fit h-fit bg-white py-20 px-8'>
                    <Uploader OnData={OnUpload} />
                    <Echart option={option} style={{
                        minWidth: '1200px',
                        minHeight: '600px'
                    }} />
                </div>
            </div>
        </div>
    );
}
