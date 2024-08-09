import { Signal } from "@preact/signals";
import { animate } from "motion";
import { useRef } from "preact/hooks";
import { useSignalEffect } from "@preact/signals";
import { CursorState } from "../../common/types/cursor-state.ts";

export default function Cursor(
    { state }: { state: Signal<CursorState> },
) {
    const cursor = useRef<HTMLDivElement>(null);

    useSignalEffect(() => {
        if (!cursor.current) return;

        animate(cursor.current, {
            ...state.value,
        }, {
            duration: 0.25,
        });
    });

    return (
        <div
            ref={cursor}
            class="absolute z-0 h-10 rounded-full bg-zinc-50"
        />
    );
}
