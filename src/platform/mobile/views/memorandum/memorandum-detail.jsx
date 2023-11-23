import React, { useRef, useState, useLayoutEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SaveIcon from "@mui/icons-material/Save";
import SpeedDial from '@mui/material/SpeedDial';
import { updateItem, addItem } from '@/api/memorandum'

export default function MemorandumDetail() {
    const location = useLocation();
    const navigate = useNavigate()
    const params = location.state;
    const [item, setItem] = useState(params || {})
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
    const autoHeightTextField = useRef()
    useLayoutEffect(() => {
        // seLayoutEffect 在 DOM 更新后立即执行，而 setTimeout 设置了一个延迟，在下一次绘制之前执行.
        // 将下面代码放入 setTimeout 中，你可以确保在 DOM 更新后再执行样式修改，从而避免了可能的闪烁或不正确的布局。??
        setTimeout(() => {
            autoHeightTextField.current.children[1].children[0].style.height = 'calc(100vh - 148px)'
        })
    })
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
                    rows={10}
                />
            </form>
            <SpeedDial
                ariaLabel="保存"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SaveIcon openIcon={<SaveIcon />} />}
                onClick={() => handleSubmit(item)}
            >
            </SpeedDial>
        </section>
    )
}