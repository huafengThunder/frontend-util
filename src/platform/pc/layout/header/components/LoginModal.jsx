import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Dialog, DialogTitle, DialogContent, Snackbar } from '@mui/material';
import { loginApi } from '@/api/login.js';
import { isSuccess } from '@/utils/judge-http-code';

const LoginDialog = ({ type, title, open, handleClose }) => {
    const navigate = useNavigate()
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        // 使用 FormData 获取表单数据
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        try {
            const res = await loginApi(data);
            if (isSuccess(res)) {
                // 登录成功
                setSnackbarMessage('登录成功');
                setSnackbarOpen(true);
                // 使用replace刷新当前页面
                navigate('.');
                handleClose(false)
            } else {
                // 登录失败
                setSnackbarMessage('登录失败: ' + res.message);
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="账号"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        id="password"
                    />
                    <Button
                        type={type || "submit"}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        登录
                    </Button>
                </form>
            </DialogContent>
            {/* 提示语 */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Dialog>
    );
}

export default LoginDialog;