import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white,
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows.md,
    },

    width: '14rem',
    height: '24rem',
    marginTop: '1rem',
  },

  discount: {
    position: 'absolute',
    top: '9px',
    left: rem(10),
    pointerEvents: 'none',
  },

  action_favorite: {
    position: 'absolute',
    top: '1px',
    right: '5px',
    padding: '0px',
    height: '3rem',
    width: '2rem',
    '&:hover': {
      transform: 'scale(1.05)',
      fill: 'red',
    },
  },
  favorite_on: {
    fill: 'crimson',
    '&:hover': {
      transform: 'scale(1.05)',
      fill: 'cadetblue',
    },
  },
  favorite_off: {
    fill: 'cadetblue',
    '&:hover': {
      transform: 'scale(1.05)',
      fill: 'crimson',
    },
  },

  buy: {
    position: 'absolute',
    bottom: '10px',
    margin: '0px',
  },

  text: {
    position: 'absolute',
    bottom: '55px',
    margin: '0px',
    left: '30px',
  },
  flex: {
    position: 'relative',
  },
  title: {
    display: 'block',
    marginTop: rem(0),
    marginLeft: rem(0),
    marginBottom: rem(5),
  },

  grid: {
    [theme.fn.smallerThan('xs')]: {
      cols: 1,
    },
  },
  gridCol: {
    display: 'flex',
    justifyContent: 'center',
  },

  slider_lable: {
    height: rem(28),
    lineHeight: rem(28),
    width: rem(150),
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    backgroundColor: 'transparent',
  },

  slider_thumb: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    height: rem(10),
    width: rem(15),
    border: 'none',
  },

  slider_dragging: {
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
  },
}));
