export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "斯普拉遁 - 加鱿站",
    description: "加鱿站，一个让你身心舒畅的喷喷社区❤️用心思考，用爱运营",
    navItems: [
        {
            label: "活动",
            href: "/",
        },
        {
            label: "X榜单",
            href: "/docs",
        },
        {
            label: "大事记",
            href: "/pricing",
        },
        {
            label: "特别感谢",
            href: "/blog",
        },
        {
            label: "加入加鱿站！",
            href: "/about",
        }
    ],
    navMenuItems: [
        {
            label: "活动",
            href: "/profile",
        },
        {
            label: "X榜单",
            href: "/dashboard",
        },
        {
            label: "大事记",
            href: "/projects",
        },
        {
            label: "特别感谢",
            href: "/team",
        },
        {
            label: "加入加鱿站！",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"
    },
};
