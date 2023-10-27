import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Background1 = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M-19-48h1141v958H-19z" />
        <Path fill="#000" fillOpacity={0.5} d="M-19-48h1141v958H-19z" />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="matrix(.00058 0 0 .0007 -.06 0)" />
            </Pattern>
            <Image
                id="b"
                width={1920}
                height={1437}
            />
        </Defs>
    </Svg>
)
export default Background1