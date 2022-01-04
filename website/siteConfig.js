/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true,
  },
];

const siteConfig = {
  title: "RecifeJs",
  tagline: "A powerful MVC Framework for GraphQL",
  url: "https://recifejs.github.io",
  baseUrl: "/",
  projectName: "recife",
  organizationName: "recifejs",
  headerLinks: [
    { doc: "about", label: "Docs" },
    { href: "https://github.com/recifejs", label: "Github" },
  ],

  users,

  headerIcon: "img/favicon.ico",
  footerIcon: "",
  favicon: "img/favicon.ico",

  colors: {
    primaryColor: "#062fa7",
    secondaryColor: "#042074",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  copyright: `Copyright © ${new Date().getFullYear()} RecifeJs`,

  highlight: {
    theme: "tomorrow-night-bright",
  },

  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-button.js",
  ],
  stylesheets: ["/css/code-block-button.css"],

  onPageNav: "separate",
  cleanUrl: true,

  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  docsSideNavCollapsible: false,

  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: "https://github.com/recifejs/recife",
};

module.exports = siteConfig;
