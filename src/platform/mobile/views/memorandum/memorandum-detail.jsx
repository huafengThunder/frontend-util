import React, { useRef, useState, useLayoutEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SaveIcon from "@mui/icons-material/Save";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SpeedDial from '@mui/material/SpeedDial';
import Snackbar from '@mui/material/Snackbar';
import { updateItem, addItem } from '@/api/memorandum'

export default function MemorandumDetail() {
    const location = useLocation();
    const navigate = useNavigate()
    const params = location.state;
    const [item, setItem] = useState(params || {})
    const [copyTip, setCopyTip] = useState('')
    const handleCopy = async () => {
        const text = item?.content || ''
        try {
            await navigator.clipboard.writeText(text)
            setCopyTip('复制成功')
        } catch (err) {
            setCopyTip('复制失败')
        }
    }
    const handleSubmit = async (item) => {
        const { title, content } = item
        if (item?.id) {
            // 修改
            await updateItem(item.id, { title, content })
            navigate('/memorandum')
        } else {
            // 新增
            await addItem({ title, content })
            navigate('/memorandum')
        }
    }

    // 设置高度
    const autoHeightTextField = useRef(null)
    useLayoutEffect(() => {
        if (autoHeightTextField.current) {
            // 直接设置 textarea 的高度和 box-sizing
            const textarea = autoHeightTextField.current;
            textarea.style.height = 'calc(100vh - 148px)';
            textarea.style.boxSizing = 'border-box';
        }
    }, []) // 空依赖数组确保只在挂载时运行一次
    return (
        <section>
            <form onSubmit={() => handleSubmit(item)}>
                <TextField
                    label="标题："
                    variant="filled"
                    value={item?.title}
                    onChange={(e) => setItem({ ...item, title: e.target.value })}
                    fullWidth
                />
                <TextField
                    ref={autoHeightTextField}
                    label="内容："
                    variant="filled"
                    value={item?.content}
                    onChange={(e) => setItem({ ...item, content: e.target.value })}
                    fullWidth
                    multiline
                />
            </form>
            <SpeedDial
                ariaLabel="全复制"
                sx={{ position: 'fixed', bottom: 80, right: 16 }}
                icon={<ContentCopyIcon />}
                onClick={handleCopy}
            >
            </SpeedDial>
            <SpeedDial
                ariaLabel="保存"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SaveIcon />}
                onClick={() => handleSubmit(item)}
            >
            </SpeedDial>
            <Snackbar
                open={!!copyTip}
                autoHideDuration={1500}
                onClose={() => setCopyTip('')}
                message={copyTip}
            />
        </section>
    )
}
