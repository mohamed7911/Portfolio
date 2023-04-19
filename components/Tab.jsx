import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Tab.module.css';
import React from 'react';
import { Context } from './ContextState';

const Tab = ({ icon, filename, path,index}) => {
  const router = useRouter();
  const handle = (e)=>{
    console.log(e.target)
  }

  const {show,setShow,handleClick} = React.useContext(Context)
  const data = ["/","/about","/contact","/projects","/articles","/github",]


  return (
    <div>
{ show[index] && 
  <div className={`${styles.parent} ${router.pathname === path && styles.tactive}`}>
      <Link style={{textDecoration:"none"}} href={path}>
        <div
          className={`${styles.tab} ${router.pathname === path && styles.active}`}
        >
          <Image src={icon} alt={filename} height={18} width={18} />
          <p>{filename}</p>

        </div>
      </Link>
      <div onClick={()=>{handleClick(index)}} className={`${styles.close} ${router.pathname === path && styles.closeactive}`}>
        <Link style={{textDecoration:"none"}} href={"/"}>
        <p style={{fontSize:"1rem",color:"white"}}>x</p>
        </Link>
      </div>
      
      </div>}
    </div>
  );
};

export default Tab;
