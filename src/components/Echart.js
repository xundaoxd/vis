'use client'
import { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export default function Echart({ option, ...props }) {
    const ref = useRef()
    useEffect(() => {
        echarts.init(ref.current).setOption(option || {})
    }, [option])
    return <div ref={ref} {...props}></div>
}
