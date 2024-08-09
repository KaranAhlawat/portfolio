import { useSignal } from "@preact/signals";
import { CursorState } from "../../common/types/cursor-state.ts";
import Cursor from "./cursor.tsx";
import NavLink from "./nav-link.tsx";

export default function Navbar() {
    const cursorState = useSignal<CursorState>({
        left: "0px",
        width: "0px",
        opacity: 0,
    });

    return (
        <div
            class="flex relative items-center p-1 mx-auto text-lg rounded-full bg-zinc-900 text-zinc-50"
            onMouseLeave={() => {
                cursorState.value = {
                    ...cursorState.value,
                    opacity: 0,
                };
            }}
        >
            <NavLink state={cursorState} to="/">Home</NavLink>
            <NavLink state={cursorState} to="/projects">Projects</NavLink>
            <NavLink state={cursorState} to="/blog">Blog</NavLink>
            <Cursor state={cursorState} />
        </div>
    );
}
