// import React, { useEffect, useState } from 'react';
// import { getBookList } from '@/api/ebook'
// import styles from './index.module.less'
// import { Document, Page, pdfjs } from 'react-pdf';
// function PDFComp(props) {
//     const url =
//         "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
//     pdfjs.GlobalWorkerOptions.workerSrc =
//         `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//     const [numPages, setNumPages] = useState(1);
//     const [pageNumber, setPageNumber] = useState(1);
//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//         setPageNumber(1);
//     }
//     return (
//         <div className={styles.pdfview}>
//             <div className={styles.book}>
//                 <Document
//                     file={props.cover}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                     style={{ width: '120px', height: '200px' }}
//                 >
//                     <Page width={props.width} height={props.height} pageNumber={pageNumber} />
//                 </Document>
//             </div>
//         </div>
//     );
// }
// export default function Ebook() {
//     async function laodBookList() {
//         const res = await getBookList()
//         setPdfFile(res)
//     }
//     const [pdfFile, setPdfFile] = useState([]);
//     useEffect(() => {
//         laodBookList()
//     }, [])
//     return (
//         <div className={styles.pdfview}>
//             {
//                 pdfFile.map(i =>
//                     <PDFComp width={'120'} height={'200'} cover={i.cover?.replace('http://localhost:3001', '')} />
//                 )
//             }
//             {
//                 pdfFile.map(i =>
//                     <PDFComp width={'120'} height={'200'} cover={i.cover?.replace('http://localhost:3001', '')} />
//                 )
//             }
//             {
//                 pdfFile.map(i =>
//                     <PDFComp width={'120'} height={'200'} cover={i.cover?.replace('http://localhost:3001', '')} />
//                 )
//             }
//             {
//                 pdfFile.map(i =>
//                     <PDFComp width={'120'} height={'200'} cover={i.cover?.replace('http://localhost:3001', '')} />
//                 )
//             }
//             {JSON.stringify(pdfFile)}
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
export default function Ebook() {
    return <div>暂无完善，后续上线</div>
}
