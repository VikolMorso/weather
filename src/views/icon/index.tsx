import {FC} from "react";
import {ReactSVG} from "react-svg";
import {Props as IconProps} from "react-svg/dist/types";

interface IIcon extends IconProps{
    ref?: any
}

const Icon: FC<IIcon> = (props) =>{
    return (
        <ReactSVG {...props} />
    )
}


export default Icon
