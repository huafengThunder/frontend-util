import React, { useEffect, useState } from 'react';
import { getBookList } from '@/api/ebook'
export default function Ebook() {
    async function laodBookList() {
        const res = await getBookList()
        setPdfFile(res)
    }
    const [pdfFile, setPdfFile] = useState([]);
    useEffect(() => {
        laodBookList()
    }, [])
    return (
        <div className="pdf-view">
            {
                pdfFile.map(i =>
                    <p key={i.path}>{i.name}</p>
                )
            }
        </div>
    );
}

