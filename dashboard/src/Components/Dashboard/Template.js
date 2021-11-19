import { useState } from 'react';
import { Layout } from 'antd';
import logo from '../../static/images/Logo.svg'
import WhiteButton from './WhiteButton';
import { EyeOutlined , UserOutlined , PoweroffOutlined } from '@ant-design/icons';
import {MdOutlineNotificationsActive , MdSyncAlt , MdDevicesOther} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import {GiPiggyBank , GiReceiveMoney} from 'react-icons/gi';
import {BsCreditCardFill} from 'react-icons/bs';
import {FaBusinessTime} from 'react-icons/fa';
import NavItem from './NavItem';

const { Header , Sider , Content } = Layout;

const menuItems = [
    {
        icon: <AiFillHome style={{fontSize: '1.5rem'}} />,
        text: "Эхлэл",
        path: '/home'
    },
    {
        icon: <GiPiggyBank style={{fontSize: '1.5rem'}} />,
        text: "Данс",
        path: '/accounts'
    },
    {
        icon: <MdSyncAlt style={{fontSize: '1.5rem'}} />,
        text: "Гүйлгээ",
        path: '/transactions'
    },
    {
        icon: <BsCreditCardFill style={{fontSize: '1.5rem'}} />,
        text: "Кард",
        path: '/card'
    },
    {
        icon: <GiReceiveMoney style={{fontSize: '1.5rem'}} />,
        text: "Зээл",
        path: '/credits'
    },
    {
        icon: <FaBusinessTime style={{fontSize: '1.5rem'}} />,
        text: "Төлбөр",
        path: '/payment'
    },
    {
        icon: <MdDevicesOther style={{fontSize: '1.5rem'}} />,
        text: "Үйлчилгээ",
        path: '/service'
    }
]

const Template = props => {
    const [dir , setDir] = useState(menuItems.find(item => item.path === window.location.pathname).text)
    const changeDir = text => {
        setDir(text)
    }
    return <>
        <Layout>
            <Header className="header fixed top-0 w-full bg-white flex justify-between shadow-sm z-30 items-center">
                <img src={logo} />
                <div className='flex items-center gap-8'>
                    <WhiteButton icon={<EyeOutlined />} />
                    <WhiteButton icon={<MdOutlineNotificationsActive/>} />
                    <WhiteButton icon={<UserOutlined />} />
                    <p className="m-0 uppercase">Narada</p>
                    <WhiteButton icon={<PoweroffOutlined />} />
                </div>
            </Header>
            <Layout>
                <Sider style={{top: '64px', height: 'calc(100vh - 64px)'}} className="left-0 fixed flex flex-col sider justify-between items-center border-r bg-white">
                    <div className="my-5 flex flex-col gap-4 w-44">
                        {
                            menuItems.map((menu, index) => <NavItem key={`menu_${index}`} path={menu.path} text={menu.text} icon={menu.icon}
                            link={props.link}
                            changeDir={changeDir}
                            pth={dir} />)
                        }
                    </div>
                </Sider>
                <Content className="bg-gray-50 pt-20 px-4 h-screen overflow-auto">
                    <div className="w-full px-12 py-8">
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    </>
}

export default Template