import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import { statusInterface, typeInterface } from './interface';

export const STATUS_LIST: statusInterface[] = ['viewing', 'later', 'viewed'];
export const TYPE_LIST: typeInterface[] = ['anime', 'manga', 'lightnovel'];
export const HOME_PAGE_DISPLAY_TITLE: (string | number)[] = [
  'My Anime List',
  1500,
  'My Manga List',
  1500,
  'My Lightnovel List',
  1500,
];

export interface BarAction {
  to: string;
  icon: JSX.Element;
  text: string;
}
export const BAR_ACTIONS: BarAction[] = [
  {
    to: '/',
    icon: <HomeIcon />,
    text: 'Home',
  },
  {
    to: '/anime',
    icon: <TheatersIcon />,
    text: 'Anime',
  },
  {
    to: '/manga',
    icon: <MenuBookIcon />,
    text: 'Manga',
  },
  {
    to: '/lightnovel',
    icon: <BookIcon />,
    text: 'Lightnovel',
  },
];
