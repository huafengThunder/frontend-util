import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './index.module.less'
import { getList, updateItem, addItem, delItem } from '@/api/memorandum'
export default function Memorandum() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function loadList(data) {
            const res = await getList(data)
            setList(res)
        }
        loadList('')
    }, [])
    // 滑动监听，后续可以做成hooks
    const startXRef = useRef(null);
    const handleTouchStart = (event) => {
        startXRef.current = event.touches[0].clientX;
    };
    const handleTouchEnd = async (event, item) => {
        const endX = event.changedTouches[0].clientX;
        const distance = endX - startXRef.current;
        if (distance < -50) {
            // console.log('左划事件', item)
            await delItem(item.id)
            setList(await getList('') || [])
        }
    };
    return (
        <section className={styles.memorandum}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <List sx={{ padding: 0 }}>
                    {list.map(item => (
                        <ListItemButton
                            key={item.id}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={(event) => handleTouchEnd(event, item)}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </section>
    );
}