import * as React from 'react';
import classNames from 'classnames';
import {Tooltip} from 'antd';


export interface HintProps {
    className?: string;
    onClick?: any;
    title?: string;
    children?: React.ReactNode;
    placement?;
    onChange?;
    getPopupContainer?;
    style?;
    width?: string;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
}

const prefix = 'hint';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<HintProps & React.RefAttributes<HTMLElement>> {}

const InternalSelect: React.ForwardRefRenderFunction<unknown, HintProps> = (props) => {
    const {
        className,
        children,
    } = props;


    const classes = classNames(
        className,
        prefix
    );

    return <div className={classes}
    ><Tooltip
        {...props}
        title={props.title}
        placement={props.placement ? props.placement : "bottomLeft"}
        overlayStyle={{maxWidth:props.width}}
        mouseEnterDelay={props.mouseEnterDelay}
        mouseLeaveDelay={props.mouseLeaveDelay}
    ><div>{children}</div></Tooltip></div>
}

const NeoHint = React.forwardRef<unknown, HintProps>(InternalSelect) as CompoundedComponent;

NeoHint.displayName = 'NeoHint';

NeoHint.defaultProps = {
};

export default NeoHint


