import React from 'react'
import * as AiIcons from 'react-icons/ai'
import { GiHammerNails } from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'About',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <GiHammerNails/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    }
]
