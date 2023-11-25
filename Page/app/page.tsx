import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import {RiArrowRightDoubleFill, RiEmotionLine} from "react-icons/ri";
import React from "react";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title({color: "green"})}>加鱿站</h1>
                <h2 className={subtitle({class: "mt-4"})}>
                    对萌新和大佬都很友好的喷喷社区
                </h2>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    href={siteConfig.links.docs}
                    className={buttonStyles({color: "success", radius: "full", variant: "shadow"})}
                >
                    <RiEmotionLine size="1.2rem"/>
                    加入加鱿站
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({color: "warning", variant: "shadow", radius: "full"})}
                    href={siteConfig.links.github}
                >
                    <RiArrowRightDoubleFill size="1.2rem"/>
                    激流杯回顾
                </Link>
            </div>
        </section>
    );
}
