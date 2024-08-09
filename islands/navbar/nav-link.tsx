import { Signal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useRef } from "preact/hooks";
import { CursorState } from "../../common/types/cursor-state.ts";

export default function NavLink(
    props: {
        to: string;
        children: ComponentChildren;
        state: Signal<CursorState>;
    },
) {
    const ref = useRef<HTMLAnchorElement>(null);
    return (
        <a
            ref={ref}
            class="block relative z-10 py-1 px-3 text-lg uppercase mix-blend-difference data-[current]:underline data-[current]:decoration-2 data-[current]:underline-offset-2"
            href={props.to}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();

                props.state.value = {
                    width: `${width}px`,
                    opacity: 1,
                    left: `${ref.current.offsetLeft}px`,
                };
            }}
        >
            {props.children}
        </a>
    );
}
