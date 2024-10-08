import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function App({ Component }: PageProps) {
    return (
        <html class="h-full">
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    rel="stylesheet"
                />
                <title>Karan Ahlawat</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body
                f-client-nav
                class="flex flex-col gap-y-10 py-4 px-12 mx-auto h-full bg-zinc-50 max-w-[90vw]"
            >
                <Header />
                <main class="my-2 h-full">
                    <Partial name="main">
                        <Component />
                    </Partial>
                </main>
                <Footer />
            </body>
        </html>
    );
}
