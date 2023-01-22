// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Boards',
    path: '/dashboard/app',
    icon: icon('ic_boards'),
  },
  {
    title: 'Links',
    path: '/dashboard/links',
    icon: icon('ic_links'),
  },
  {
    title: 'Graphs',
    path: '/dashboard/graphs',
    icon: icon('ic_graphs'),
  },
  {
    title: 'Google',
    path: '/dashboard/google',
    icon: icon('ic_google'),
  },
];

export default navConfig;
