import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';
import React from 'react';


const Tabsbar = () => {
  const data = [
    { path:"/",
      filename:"home.html",
      icon:"/react_icon.svg"
    },
    { path:"/about",
      filename:"about.html",
      icon:"/html_icon.svg"
    },
    { path:"/contact",
    filename:"contact.html",
    icon:"/css_icon.svg"
    },
    { path:"/projects",
    filename:"projects.html",
    icon:"/js_icon.svg"
    },
    { path:"/articles",
    filename:"articles.html",
    icon:"/json_icon.svg"
    },
    { path:"/github",
    filename:"github.html",
    icon:"/markdown_icon.svg"
    },
  ]

  const tab = data.map((e,ix)=>(
    <Tab key={e.path} icon={e.icon} filename={e.filename} path={e.path} index={ix} />
  ))


  return (
    <div className={styles.tabs}> 
      {tab}
    </div>
  );
};

export default Tabsbar;
