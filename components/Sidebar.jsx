import Link from 'next/link';
import React from "react"
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';
import { Context } from './ContextState';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
    index:0
  },
  {
    Icon: GithubIcon,
    path: '/github',
    index:5
  },
  {
    Icon: CodeIcon,
    path: '/projects',
    index:3
  },
  {
    Icon: PencilIcon,
    path: '/articles',
    index:4
  },
  {
    Icon: MailIcon,
    path: '/contact',
    index:2
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
    index:1
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
    index:6
  },
];

const Sidebar = () => {
  const router = useRouter();

  const {handleClick2} = React.useContext(Context)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, index }) => (
          <Link onClick={()=>handleClick2(index)} href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, index}) => (  
          <div key={path} className={styles.iconContainer}>
            <Link onClick={()=>handleClick2(index)} href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
