import {FC} from 'react';
import s from './header.module.scss'
import {Button, DropDownMenu, Typography} from "@/components";
import { Logo } from "@/assets/icons/logo.tsx";
import {ResponseUserType} from "@/services/auth";
import {Link} from "react-router-dom";
import {ProfileBlock} from "@/components/ui/header/profile-block";
import {Logout, Profile} from "@/assets";
import {AvatarHeader} from "@/components/ui/avatar/avatar.tsx";



type HeaderProps = {
    data?: ResponseUserType | null
}



export const Header: FC<HeaderProps> = ({data}) => {

    const dropDownMenu = [
        { id: 1, component: <ProfileBlock data={data} /> },
        {
            id: 2,
            component: (
                <Button as={Link} to={'/profile'} variant={'link'} className={s.buttonDrop}>
                    <Profile />
                    <Typography variant={'caption'}>My Profile</Typography>
                </Button>
            ),
        },
        {
            id: 3,
            component: (
                <Button variant={'link'} className={s.buttonDrop}>
                    <Logout />
                    <Typography variant={'caption'}>Sign Out</Typography>
                </Button>
            ),
        },
    ]

    return (
        <div className={s.headerBlock}>
            <div className={s.contentHeader}>
                <Button as={Link} to="/" variant={'link'} className={s.logo}>
                    <Logo />
                </Button>
                {!data && <Button variant={'primary'}>Sign In</Button>}
                {data && (
                    <div className={s.avatar_menu}>
                        <Link to={`/profile`} className={s.link}>
                            <Typography variant={'subtitle1'} className={s.menu_name}>
                                {data.name}
                            </Typography>
                        </Link>
                        <DropDownMenu
                            items={dropDownMenu}
                            trigger={<AvatarHeader src={data.avatar} name={data.name} />}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

