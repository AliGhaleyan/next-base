import React, {FC} from "react";
import Link, {LinkProps} from "next/link";

interface Props extends LinkProps {
    hasLocale?: boolean
}


const AppLink: FC<Props> = (props) => {
    return (
        <Link {...props} prefetch={false}>
            {props.children}
        </Link>
    )
};

export default AppLink;
