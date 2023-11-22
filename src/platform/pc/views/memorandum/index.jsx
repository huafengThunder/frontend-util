import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import styles from './index.module.less'
import { getList, updateItem, addItem, delItem } from '@/api/memorandum'


export default function Memorandum() {
    const [noEdit, setNoEdit] = useState(true)
    const [list, setList] = useState([])
    const [curItem, setCurItem] = useState([])
    useEffect(() => {
        async function loadList(data) {
            const res = await getList(data)
            setList(res)
            setCurItem(res[0])
        }
        loadList('')
    }, [])
    return (
        <div className={styles.memorandum}>
            <section className={styles.title}>
                <FolderList list={list} setCurItem={setCurItem} setList={setList} />
            </section>
            <section className={styles.content}>
                {list.length > 0 && <Content item={curItem} noEdit={noEdit} setNoEdit={setNoEdit} setList={setList} />}
            </section>
        </div>
    );
}

const FolderList = React.memo((props) => {
    const { list, setCurItem, setList } = props;
    const handleClick = (item) => {
        setCurItem(item)
    };
    const handleDeleteClick = async (item) => {
        await delItem(item.id)
        setCurItem([])
        setList(await getList('') || [])
    }
    return (
        <Box sx={{ width: '300px', bgcolor: 'background.paper' }}>
            <List sx={{ padding: 0 }}>
                {Array.isArray(list) && list.map(item => (
                    <ListItem disablePadding
                        key={item.id}
                        onClick={() => handleClick(item)}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(item)}>
                                <DeleteIcon />
                            </IconButton>
                        }>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    );
});

function Content(prop) {
    const { item, noEdit, setNoEdit, setList } = prop;
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [content, setContent] = useState('');
    const autoHeightTextField = useRef()
    const [saveLoading, setSaveLoading] = useState(false);
    const [addLoading, setAddLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        setId(item.id || '');
        setTitle(item.title || '');
        setContent(item.content || '');
    }, [item]);

    useLayoutEffect(() => {
        // seLayoutEffect 在 DOM 更新后立即执行，而 setTimeout 设置了一个延迟，在下一次绘制之前执行.
        // 将下面代码放入 setTimeout 中，你可以确保在 DOM 更新后再执行样式修改，从而避免了可能的闪烁或不正确的布局。??
        autoHeightTextField.current.children[1].children[0].style.height = 'calc(100vh - 209px)'
    })
    const handleSubmit = async () => {
        if (noEdit === false) {
            if (id) {
                // 修改
                setSaveLoading(true)
                await updateItem(item.id, { title, content })
                const list = await getList('')
                setList(list)
                enqueueSnackbar('更新成功', { variant: 'success', autoHideDuration: 2000 });
                setSaveLoading(false)
            } else {
                // 新增
                setAddLoading(true)
                await addItem({ title, content })
                enqueueSnackbar('新增成功', { variant: 'success', autoHideDuration: 2000 });
                const list = await getList('')
                setList(list)
                setAddLoading(false)
            }
        }
        setNoEdit(!noEdit)
    };
    const handleAdd = () => {
        setId('')
        setTitle('')
        setContent('')
        setNoEdit(false)
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
                label="标题："
                variant="filled"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                InputProps={{
                    readOnly: noEdit,
                }}
            />
            <TextField
                ref={autoHeightTextField}
                label="内容："
                variant="filled"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                rows={10}
                InputProps={{
                    readOnly: noEdit,
                }}
            />
            <footer className={styles.footer}>
                <Button size="medium" variant="outlined" onClick={() => { handleAdd(noEdit) }}>
                    {addLoading && <CircularProgress
                        size={12}
                        color="inherit"
                        style={{ marginRight: '10px' }}
                    />}新增</Button>
                <Button
                    variant="contained"
                    size="medium"
                    disabled={saveLoading}
                    onClick={handleSubmit}
                >
                    {saveLoading && <CircularProgress
                        size={12}
                        color="inherit"
                        style={{ marginRight: '10px' }}
                    />}
                    {noEdit ? '编辑' : '保存'}
                </Button>
            </ footer>
        </form>
    );
}