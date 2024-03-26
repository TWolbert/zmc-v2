import Image from "next/image";
import fh5logo from "@/public/fh5-logo.png";
import cs2logo from "@/public/cs2logo.png";
import thefinals from "@/public/thefinals.png";
import channelscreenshot from "@/public/channel_screenshot.png";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between px-[20%] pt-[10rem]">
            <div className=" grid-cols-4 grid-rows-2 grid gap-4 h-fit">
                <Link
                    href={"/"}
                    className=" bg-gradient-to-tl from-accent-500 to-accent-700 rounded-xl flex items-center justify-center col-span-4 p-3"
                >
                    <h1 className="text-6xl font-bold">We are ZMC.</h1>
                </Link>
                <Link href={'/finals'} className=" bg-gradient-to-tl from-primary-500 to-primary-700 rounded-xl flex items-center justify-center aspect-square p-3 hover:scale-125 transition-all active:scale-110 shadow-sm hover:shadow-xl">
                    <Image
                        src={thefinals}
                        alt="The Finals"
                        className="h-[10vh] aspect-video object-contain w-fit"
                    />
                </Link>
                <Link
                    href={"/forza"}
                    className=" bg-gradient-to-tl from-accent-500 to-accent-700 rounded-xl flex items-center justify-center aspect-square p-3 hover:scale-125 transition-all active:scale-110 shadow-sm hover:shadow-xl"
                >
                    <Image
                        src={fh5logo}
                        alt="The Finals"
                        className="h-[10vh] aspect-video object-contain w-fit invert"
                    />
                </Link>{" "}
                <Link
                    href={"/cs2"}
                    className=" bg-gradient-to-tl from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center aspect-square p-3 hover:scale-125 transition-all active:scale-110 shadow-sm hover:shadow-xl"
                >
                    <Image
                        src={cs2logo}
                        alt="The Finals"
                        className="h-[10vh] aspect-video object-contain w-fit"
                    />
                </Link>
                <Link
                    href={"/zmc"}
                    className=" bg-gradient-to-tl from-text-500 to-text-700 rounded-xl flex items-center justify-center aspect-square p-3 hover:scale-125 transition-all active:scale-110 shadow-sm hover:shadow-xl"
                >
                    <p>ZMC</p>
                </Link>
            </div>
            <div>
                <h1 className=" text-3xl mt-[10vh] font-bold">Our mission</h1>
                <div className="flex gap-2">
                    <p>
                        We are a group of Software engineering students that
                        enjoy playing video games. Our mission is to entertain
                        others with our shenanigans. We upload the things we do
                        to our YouTube channel.
                        <br />
                        <br />
                        We upload a variety of content, from CS2 compilations to
                        clips from out private minecraft server. We highly
                        recommend you check out{" "}
                        <a
                            className=" text-secondary-400"
                            href="https://www.youtube.com/@ZMC-CS2/featured"
                        >
                            our channel
                        </a>
                        !
                    </p>
                    <Image
                        src={channelscreenshot}
                        alt="Channel Screenshot"
                        className="w-[30vw] object-contain border-accent-500 border-2 rounded-xl"
                    />
                </div>
                <h1 className=" text-3xl mt-5 font-bold">What we create</h1>
                <div className="flex gap-5">
                    <Image
                        src={channelscreenshot}
                        alt="Channel Screenshot"
                        className="w-[10vw] aspect-square object-cover border-accent-500 border-2 rounded-xl mt-2"
                    />
                    <p className="mt-2">
                        We as develops also create stuff you can play with. For
                        example we have a Minecraft modpack called{" "}
                        <a
                            className=" text-secondary-400"
                            href="https://www.curseforge.com/minecraft/modpacks/zmc-modpack"
                        >
                            ZMC Modpack
                        </a>{" "}
                        that you can download and play with your friends. This
                        pack was developed in anticipation of the next season of
                        ZestMC. It contains a bunch of cool zombie related mods
                        and even some custom mods made by the team!
                    </p>
                </div>

                <h1 className=" text-3xl mt-5 font-bold">Our future</h1>
                <div className="flex gap-5 mb-[20vh]">
                    <p>
                        We are always looking to expand our horizons. We are
                        currently working on a new project called ZMC: The
                        Finals. This is part of our current roadmap to expand to
                        different games and content. We are also working on a
                        new season of ZestMC, our Minecraft server. We are
                        always looking for new ways to entertain our audience,
                        if you have suggestions, let us know!
                    </p>
                    <Image
                        src={channelscreenshot}
                        alt="Channel Screenshot"
                        className="w-[30vw] object-contain border-accent-500 border-2 rounded-xl"
                    />
                </div>
            </div>
        </main>
    );
}
