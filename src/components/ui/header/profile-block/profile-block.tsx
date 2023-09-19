import {ResponseUserType} from "@/services/auth";
import {FC} from "react";
import {Typography} from "@/components";
import {AvatarHeader} from "@/components/ui/avatar/avatar.tsx";
import s from './profile-block.module.scss'

type PropsType = {
    data?: ResponseUserType | null
}
export const ProfileBlock: FC<PropsType> = ({ data }) => {
    return (
        <div className={s.infoBlock}>
            <AvatarHeader src={data?.avatar} name={data?.name} />
            <div className={s.info}>
                <Typography variant={'subtitle2'}>{data?.name}</Typography>
                <Typography variant={'caption'} className={s.email}>
                    {data?.email}
                </Typography>
            </div>
        </div>
    )
}
