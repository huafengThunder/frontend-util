import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

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

    const handleSave = () => {
        setMenuData(formData);
        handleClose();
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