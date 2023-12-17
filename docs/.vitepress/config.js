export default {
    description: "An awesome static website builder",
    themeConfig: {
        logo: "https://vitepress.dev/vitepress-logo-mini.svg",
        siteTitle: "MySite",
        nav: [
            { text: "Github", link: "https://github.com/" },
            { text: "Library", link: "https://vitepress.dev/" },
            {
                text: "1.0.0-rc.32",
                items: [
                 { text: "Repository", link: "https://github.com/vuejs/vitepress" },
                ],
              }
          ],
        socialLinks: [
            { icon: "github", link: "https://github.com/wolf-77" },
            { icon: "twitter", link: "https://twitter.com/" },
            { icon: "instagram", link: "", target: "_blank" },
        ],
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()}-present MySite`,
        },
      }
  };