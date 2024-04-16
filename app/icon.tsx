import { ImageResponse } from 'next/server'
import { IoCarSportOutline } from "react-icons/io5";

export const runtime = "edge";
export const size = {
    width: 32,
    height: 32,
}

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (<div
            style={{
                fontSize: 24,
                background: "#267dff",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                borderRadius: 15,
            }}
        >
            C
        </div >
        ),
        { ...size })
}