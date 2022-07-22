import { useState } from 'react';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import Input from '../common/Input';
import {
  ThemeProvider,
  Typography,
  createTheme,
  Modal,
  Box,
  Avatar,
  Grid,
} from '@mui/material';
import { PillButton } from '../common/PillButton';

let theme = createTheme({
  shape: {
    pillRadius: 50,
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'black',
  'border-radius': '20px',
  boxShadow: 24,
  p: 7,
};

export default function Main({ user }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createPost = async (value) => {
    const newPostRef = doc(collection(db, 'posts'));
    console.log(user);
    await setDoc(newPostRef, {
      content: value,
      user: user.user,
      avatar: user.avatar,
      alias: user.alias,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div>
      <Typography variant='h4'>Create Post</Typography>

      <ThemeProvider theme={theme}>
        <PillButton
          onClick={handleOpen}
          style={{
            backgroundColor: '#1d9bf0',
            paddingLeft: 50,
            paddingRight: 50,
            'text-transform': 'none',
            'font-weight': 'bold',
          }}
          variant='contained'
          pill
          size='large'
        >
          Tweet
        </PillButton>
      </ThemeProvider>
      <Modal open={open} onClose={handleClose}>
        <Grid container>
          <Box sx={style}>
            <Grid item container xs={12}>
              <Grid item xs={1}>
                <Avatar
                  style={{
                    'border-color': 'white',
                    'border-width': '1px',
                    'border-style': 'solid',
                  }}
                  src={user.avatar}
                ></Avatar>
              </Grid>
              <Grid item xs={11}>
                <Input
                  multiline={true}
                  rows={6}
                  handleSetValue={createPost}
                  placeholder="What's happening"
                  displayButton={true}
                  buttonText='Tweet'
                  close={handleClose}                
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Modal>
    </div>
  );
}
