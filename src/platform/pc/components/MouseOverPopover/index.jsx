import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { EditMenuDialog } from '../OperMenu/index';
import { isLoggedIn, logout } from '@/api/login'
import { isSuccess, noLogin } from '@/utils/judge-http-code';
import { useSnackbar } from 'notistack';
import LoginDialog from '../../layout/header/components/LoginModal';

export default function MouseOverPopover(props) {
  const { enqueueSnackbar } = useSnackbar();
  // const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const handleClick = async (event) => {
    try {
      const res = await isLoggedIn();
      if (isSuccess(res)) {
        setIsLogged(true)
      }
    } catch (error) {
    } finally {
      setAnchorEl(event.target);
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutClick = async () => {
    try {
      const res = await logout();
      if (isSuccess(res)) {
        enqueueSnackbar('退出成功', { variant: 'success' });
      }
    } catch (error) {
      if (noLogin(error)) {
        enqueueSnackbar('未登录，无需退出', { variant: 'error' });
      } else {
        enqueueSnackbar('Error: Forbidden', { variant: 'error' });
      }
    }
  }
  // 登录弹窗
  const [loginOpen, setLoginOpen] = useState(false);
  const loginOpenClick = () => setLoginOpen(true);
  const loginCloseClick = () => setLoginOpen(false);

  // 打开弹窗，
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [menuData, setMenuData] = useState(null);

  return (
    <React.Fragment>
      <div aria-describedby={id} variant="contained" onClick={handleClick}>
        {props.children}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {/* <Typography sx={{ p: 1 }} onClick={() => navigate('/blog')}>
          随笔
        </Typography> */}
        <Typography sx={{ p: 1 }}>
          <a
            href={'https://juejin.cn/creator/content/column?status=all'}
            target="_blank"
            style={{ color: '#3d3d3d' }}
          >
            博客
          </a>
        </Typography>
        {isLogged === false && (
          <>
            <Typography sx={{ p: 1 }} style={{ cursor: 'pointer' }} onClick={() => loginOpenClick()} >
              登录
            </Typography>
          </>
        )}
        {isLogged && (
          <>
            <Typography sx={{ p: 1 }} style={{ cursor: 'pointer' }} onClick={() => { setOpenEditMenu(true); handleClose() }}>
              菜单
            </Typography>
            <Typography sx={{ p: 1 }} style={{ cursor: 'pointer' }} onClick={() => logoutClick()} >
              登出
            </Typography>
          </>
        )}
      </Popover>
      <EditMenuDialog
        open={openEditMenu}
        handleClose={() => setOpenEditMenu(false)}
        menuData={menuData}
        setMenuData={setMenuData}
      />
      <LoginDialog
        open={loginOpen}
        handleClose={loginCloseClick}
        title="Login"
      />
    </React.Fragment >
  )
}
