import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Messages = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width="57" height="57" viewBox="0 0 53 67">
        <Rect width={54} height={54} fill="#5BC236" rx={15} />
        <Path
            fill="#F1EFEF"
            d="M23 26a.968.968 0 0 0 .713-.288A.964.964 0 0 0 24 25a.968.968 0 0 0-.288-.713A.964.964 0 0 0 23 24a.968.968 0 0 0-.713.288A.964.964 0 0 0 22 25c0 .283.096.521.288.713.192.192.43.288.712.287Zm4 0a.968.968 0 0 0 .713-.288A.964.964 0 0 0 28 25a.968.968 0 0 0-.288-.713A.964.964 0 0 0 27 24a.968.968 0 0 0-.713.288A.964.964 0 0 0 26 25c0 .283.096.521.288.713.192.192.43.288.712.287Zm4 0a.968.968 0 0 0 .713-.288A.964.964 0 0 0 32 25a.968.968 0 0 0-.288-.713A.964.964 0 0 0 31 24a.968.968 0 0 0-.713.288A.964.964 0 0 0 30 25c0 .283.096.521.288.713.192.192.43.288.712.287ZM17 37V19c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 19 17h16c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v12c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 35 33H21l-4 4Z"
        />
    </Svg>
)
export default Messages
