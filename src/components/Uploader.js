'use client'

export default function Uploader({ OnData, ...props }) {
    const handler = (e) => {
        if (!e.target.files.length) {
            return;
        }
        const reader = new FileReader()
        reader.onload = (e) => {
            if (OnData) {
                OnData(JSON.parse(e.target.result))
            }
        }
        reader.readAsText(e.target.files[0])
    };
    return <input onChange={handler} type='file' {...props} />
}

