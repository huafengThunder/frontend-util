import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

export default function MouseOverPopover(props) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
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
        <Typography sx={{ p: 1 }} onClick={() => navigate('/blog')}>
          随笔
        </Typography>
        <Typography sx={{ p: 1 }}>
          <a
            href={'https://juejin.cn/creator/content/column?status=all'}
            target="_blank"
            style={{ color: '#3d3d3d' }}
          >
            博客
          </a>
        </Typography>
      </Popover>
    </div>
  )
}
