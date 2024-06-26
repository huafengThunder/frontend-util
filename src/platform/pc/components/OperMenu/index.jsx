import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { addMenuApi } from '@/api/menu.js';
import { useNavigate } from 'react-router-dom'

export const EditMenuDialog = ({ open, handleClose, menuData, setMenuData }) => {
    const [formData, setFormData] = useState(menuData || {
        type: '',
        logo: '',
        href: '',
        title: '',
        describe: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await addMenuApi(formData)
            handleClose();
            // 体验不好，后面可以借助redux（eventBus容易产生魔法代码）
            useNavigate()(0)
        } catch (error) { }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{menuData ? '编辑菜单' : '新增菜单'}</DialogTitle>
            <DialogContent>
                <TextField name="type" label="类型" value={formData.type} onChange={handleInputChange} fullWidth margin="normal" />
                <TextField name="logo" label="Logo" value={formData.logo} onChange={handleInputChange} fullWidth margin="normal" />
                <TextField name="href" label="链接" value={formData.href} onChange={handleInputChange} fullWidth margin="normal" />
                <TextField name="title" label="标题" value={formData.title} onChange={handleInputChange} fullWidth margin="normal" />
                <TextField name="describe" label="描述" value={formData.describe} onChange={handleInputChange} fullWidth margin="normal" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                <Button onClick={handleSave} color="primary">保存</Button>
            </DialogActions>
        </Dialog>
    );
};