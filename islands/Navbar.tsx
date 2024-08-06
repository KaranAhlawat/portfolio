import * as rive from "@rive-app/canvas";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";

export default function Navbar() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const links = {
        home: useRef<HTMLAnchorElement>(null),
        projects: useRef<HTMLAnchorElement>(null),
        blog: useRef<HTMLAnchorElement>(null),
    };

    function onPageChange(riveEvent: rive.Event) {
        const navigate: string = riveEvent.data?.name as string;
        if (navigate.startsWith("home")) {
            links.home.current?.click();
        } else if (navigate.startsWith("proj")) {
            links.projects.current?.click();
        } else if (navigate.startsWith("blog")) {
            links.blog.current?.click();
        }
    }

    useEffect(() => {
        if (!canvas.current) return;
        canvas.current.style.fontFamily = "Inter";
        const r = new rive.Rive({
            src: asset("/navbar.riv"),
            canvas: canvas.current,
            autoplay: true,
            stateMachines: "NavbarAnim",
            onLoad: () => r.resizeDrawingSurfaceToCanvas(),
        });
        r.on(rive.EventType.RiveEvent, onPageChange);

        return () => {
            r.off(rive.EventType.RiveEvent, onPageChange);
            r.cleanup();
        };
    }, []);

    return (
        <>
            <div class="hidden">
                <a ref={links.home} href="/">Home</a>
                <a ref={links.projects} href="/projects">Projects</a>
                <a ref={links.blog} href="/blog">Blog</a>
            </div>
            <canvas
                class="cursor-pointer"
                width={550}
                height={80}
                ref={canvas}
            >
            </canvas>
        </>
    );
}
