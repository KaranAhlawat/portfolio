import { asset } from "$fresh/runtime.ts";
import Navbar from "../islands/navbar/navbar.tsx";

export default function Header() {
    return (
        <header class="flex justify-between items-center px-2">
            <div />
            <nav>
                <Navbar />
            </nav>
            <a
                href={asset("/resume.pdf")}
                download="Resume/KaranAhlawat"
                target="_blank"
                rel="noopener noreferrer"
                class="pl-4 rounded-full border-2 border-black border-solid h-fit"
            >
                <div class="flex gap-4 items-center">
                    <span class="font-semibold">CV</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="p-2 rounded-full icon icon-tabler icon-tabler-download bg-zinc-900"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#f1f1f1"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        transform="scale(0.8)"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 11l5 5l5 -5" />
                        <path d="M12 4l0 12" />
                    </svg>
                </div>
            </a>
        </header>
    );
}
