import style from '../Style/Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../Assets/logo.png'

const Header = () => {
  return (
    <div className={style.navbar}>
        <div className="container">
            <div className={style.root_1}>
                <div className={style.root_logo}>
                    <div className={style.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style.logo_title}>Bekastan's blog</div>
                </div>
                <div className={style.root_nav}>
                    <div className={style.search}>
                        <SearchIcon className={style.nic}/>
                    </div>
                    <div className={style.bg_color}><WbSunnyIcon className={style.nic}/></div>
                    <div className={style.logout}>
                        <KeyboardArrowDownIcon className={style.nic}/>
                    </div>
                </div>
            </div>
            <div className={style.root_2}>
                <div className={style.nav_icons}>
                <GitHubIcon />
                <PublicIcon className={style.icon} />
                <i className={`fa-brands fa-hashnode fa-lg ${style.fa}`}></i>
                <LinkedInIcon className={style.icon} />
                <RssFeedIcon className={style.icon} />
                </div>
            </div>
            <div className={style.root_3}>
                <div className={style.links}>
                    <span className={style.home}>Home</span>
                    <span className={style.badges}>Badges</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
