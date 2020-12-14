import {Col, Row} from "antd";
import * as React from "react";
import {NeoTypography} from "../index";
import {getTextWidth} from "./fontSizeUtils";

interface Props {
    width: string,
    title: string,
    titleOrientation: string,
    children
}

export function Title(props:Props) {
    const width = parseInt(props.width, 10);
    const textWidth = getTextWidth(props.title, "bold 12pt Roboto");
    const typographyWidth = 150;
    if (props.titleOrientation === "Left" || props.titleOrientation === "Right") {
        return <Row className={"neo-title-container"} style={{minWidth: typographyWidth + 80 + "px",maxWidth: width + 150, display: "flex", alignItems: textWidth > typographyWidth ? "center" : "baseline"}}>
            <Col span={props.titleOrientation === "Left" ? 6 : 18}>
                {props.titleOrientation === "Left" ? <NeoTypography style={{padding: "4px 12px 4px 0", wordBreak: "break-word", textAlign: "right"}}>{props.title}</NeoTypography> : props.children}
            </Col>
            <Col span={props.titleOrientation === "Right" ? 6 : 18}>
                {props.titleOrientation === "Right" ? <NeoTypography style={{padding: "4px 0 4px 12px", wordBreak: "break-word"}}>{props.title}</NeoTypography> : props.children}
            </Col>
        </Row>
    }

    if (props.titleOrientation === "Top" || props.titleOrientation === "Bottom") {
        return <>
            <Col span={24}>{props.titleOrientation === "Top" ? <NeoTypography style={{width: width, wordBreak: "break-word", paddingBottom: "4px", textAlign: "center"}}>{props.title}</NeoTypography> : props.children}</Col>
            <Col span={24}>{props.titleOrientation === "Bottom" ? <NeoTypography style={{width: width,wordBreak: "break-word", paddingTop: "4px", textAlign: "center"}}>{props.title}</NeoTypography> : props.children}</Col>
        </>
    }

    return null
}