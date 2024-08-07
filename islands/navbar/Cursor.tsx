import { Signal } from "@preact/signals";
import { gsap } from "gsap";
import { useEffect, useRef } from "preact/hooks";
import { useSignalEffect } from "@preact/signals";
import { CursorState } from "../../common/types/CursorState.ts";

export default function Cursor(
  props: { state: Signal<CursorState> },
) {
  const cursor = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const tween = gsap.set(cursor.current, {
      autoAlpha: 0,
      visibility: "hidden",
    });

    return () => tween.revert();
  }, []);

  useSignalEffect(() => {
    if (!cursor.current) return;

    gsap.to(cursor.current, {
      ...props.state.value,
      autoAlpha: 1,
      duration: 0.25,
    });
  });

  return (
    <li
      ref={cursor}
      class="absolute z-0 rounded-full bg-zinc-50 h-9"
    />
  );
}
