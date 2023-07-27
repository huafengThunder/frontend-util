import React, { useEffect, useState } from 'react';
import { getBookList } from '@/api/ebook'
import styles from './index.module.less'
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
        <div className={styles.pdfview}>
            {
                pdfFile.map(i =>
                    <p key={i.path}> <a href={i.path} target="_blank">{i.name}</a> </p>
                )
            }
        </div>
    );
}

