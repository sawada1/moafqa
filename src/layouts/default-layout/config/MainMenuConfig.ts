import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      // {
      //   heading: "layoutBuilder",
      //   route: "/builder",
      //   keenthemesIcon: "switch",
      //   bootstrapIcon: "bi-layers",
      // },
    ],
  },
  {
    // heading: "craft",
    // route: "/crafted",
    // pages: [
    //   {
    //     sectionTitle: "pages",
    //     route: "/pages",
    //     keenthemesIcon: "element-plus",
    //     bootstrapIcon: "bi-archive",
    //     sub: [
    //       {
    //         sectionTitle: "profile",
    //         route: "/profile",
    //         sub: [
    //           {
    //             heading: "profileOverview",
    //             route: "/crafted/pages/profile/overview",
    //           },
    //           {
    //             heading: "projects",
    //             route: "/crafted/pages/profile/projects",
    //           },
    //           {
    //             heading: "campaigns",
    //             route: "/crafted/pages/profile/campaigns",
    //           },
    //           {
    //             heading: "documents",
    //             route: "/crafted/pages/profile/documents",
    //           },
    //           {
    //             heading: "connections",
    //             route: "/crafted/pages/profile/connections",
    //           },
    //           {
    //             heading: "activity",
    //             route: "/crafted/pages/profile/activity",
    //           },
    //         ],
    //       },
    //       {
    //         sectionTitle: "wizards",
    //         route: "/wizard",
    //         sub: [
    //           {
    //             heading: "horizontal",
    //             route: "/crafted/pages/wizards/horizontal",
    //           },
    //           {
    //             heading: "vertical",
    //             route: "/crafted/pages/wizards/vertical",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     sectionTitle: "account",
    //     route: "/account",
    //     keenthemesIcon: "profile-circle",
    //     bootstrapIcon: "bi-person",
    //     sub: [
    //       {
    //         heading: "accountOverview",
    //         route: "/crafted/account/overview",
    //       },
    //       {
    //         heading: "settings",
    //         route: "/crafted/account/settings",
    //       },
    //     ],
    //   },
    //   {
    //     sectionTitle: "authentication",
    //     keenthemesIcon: "fingerprint-scanning",
    //     bootstrapIcon: "bi-sticky",
    //     sub: [
    //       {
    //         sectionTitle: "basicFlow",
    //         sub: [
    //           {
    //             heading: "signIn",
    //             route: "/sign-in",
    //           },
    //           {
    //             heading: "signUp",
    //             route: "/sign-up",
    //           },
    //           {
    //             heading: "passwordReset",
    //             route: "/password-reset",
    //           },
    //         ],
    //       },
    //       {
    //         heading: "multiStepSignUp",
    //         route: "/multi-step-sign-up",
    //       },
    //       {
    //         heading: "error404",
    //         route: "/404",
    //       },
    //       {
    //         heading: "error500",
    //         route: "/500",
    //       },
    //     ],
    //   },
    //   {
    //     sectionTitle: "modals",
    //     route: "/modals",
    //     keenthemesIcon: "design",
    //     bootstrapIcon: "bi-shield-check",
    //     sub: [
    //       {
    //         sectionTitle: "general",
    //         route: "/general",
    //         sub: [
    //           {
    //             heading: "inviteFriends",
    //             route: "/crafted/modals/general/invite-friends",
    //           },
    //           {
    //             heading: "viewUsers",
    //             route: "/crafted/modals/general/view-user",
    //           },
    //           {
    //             heading: "upgradePlan",
    //             route: "/crafted/modals/general/upgrade-plan",
    //           },
    //           {
    //             heading: "shareAndEarn",
    //             route: "/crafted/modals/general/share-and-earn",
    //           },
    //         ],
    //       },
    //       {
    //         sectionTitle: "forms",
    //         route: "/forms",
    //         sub: [
    //           {
    //             heading: "newTarget",
    //             route: "/crafted/modals/forms/new-target",
    //           },
    //           {
    //             heading: "newCard",
    //             route: "/crafted/modals/forms/new-card",
    //           },
    //           {
    //             heading: "newAddress",
    //             route: "/crafted/modals/forms/new-address",
    //           },
    //           {
    //             heading: "createAPIKey",
    //             route: "/crafted/modals/forms/create-api-key",
    //           },
    //         ],
    //       },
    //       {
    //         sectionTitle: "wizards",
    //         route: "/wizards",
    //         sub: [
    //           {
    //             heading: "twoFactorAuth",
    //             route: "/crafted/modals/wizards/two-factor-auth",
    //           },
    //           {
    //             heading: "createApp",
    //             route: "/crafted/modals/wizards/create-app",
    //           },
    //           {
    //             heading: "createAccount",
    //             route: "/crafted/modals/wizards/create-account",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     sectionTitle: "widgets",
    //     route: "/widgets",
    //     keenthemesIcon: "element-7",
    //     bootstrapIcon: "bi-layers",
    //     sub: [
    //       {
    //         heading: "widgetsLists",
    //         route: "/crafted/widgets/lists",
    //       },
    //       {
    //         heading: "widgetsStatistics",
    //         route: "/crafted/widgets/statistics",
    //       },
    //       {
    //         heading: "widgetsCharts",
    //         route: "/crafted/widgets/charts",
    //       },
    //       {
    //         heading: "widgetsMixed",
    //         route: "/crafted/widgets/mixed",
    //       },
    //       {
    //         heading: "widgetsTables",
    //         route: "/crafted/widgets/tables",
    //       },
    //       {
    //         heading: "widgetsFeeds",
    //         route: "/crafted/widgets/feeds",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    heading: "apps",
    route: "/apps",
    pages: [
      {
        sectionTitle: "clients",
        // heading: "clients",
        route: "/clients",
        keenthemesIcon: "people",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "clients",
            route: "/apps/customers/clients/clientsList",
          },
          {
            heading: "clientsScore",
            route: "/apps/customers/clients_score/clientsScoreList",
          },
        ],
      },
      {
        // sectionTitle: "brands",
        heading: "brands",
        route: "/apps/brands/brandsList",
        keenthemesIcon: "subtitle",
        bootstrapIcon: "bi-cart",
      },
      {
        sectionTitle: "models",
        // heading: "clients",
        route: "/models",
        keenthemesIcon: "scan-barcode",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "models",
            route: "/apps/models/modelsList",
          },
          {
            heading: "subModels",
            route: "/apps/subModels/modelsList",
          },
        ],
      },
      {
        sectionTitle: "requests",
        route: "/requests",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "requests",
            route: "/apps/requests/requestsList",
          },
          {
            heading: "requestsHistories",
            route: "/apps/requests/requestsHistoryList",
          },
        ],
      },
      {
        // sectionTitle: "brands",
        heading: "colors",
        route: "/apps/colors/colorsList",
        keenthemesIcon: "brush",
        bootstrapIcon: "bi-cart",
      },
      {
        // sectionTitle: "brands",
        heading: "offers",
        route: "/apps/offers/offerslist",
        keenthemesIcon: "package",
        bootstrapIcon: "bi-cart",
      },
      {
        sectionTitle: "agencies",
        route: "/agencies",
        keenthemesIcon: "shop",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "agencies",
            route: "/apps/agencies/agenciesList",
          },
          {
            heading: "branches",
            route: "/apps/agencies/branches",
          },
        ],
      },
      {
        sectionTitle: "fundCompanies",
        route: "/fund companies",
        keenthemesIcon: "shield",
        bootstrapIcon: "bi-cart",
        sub:[
          {
            heading: "fundCompanies",
            route: "/apps/fundCompanies/fundCompaniesList",
          },
          {
            heading: "branches",
            route: "/apps/fundCompanies/branches",
          },
        ]
      },
      {
        // sectionTitle: "brands",
        heading: "cities",
        route: "/apps/cities/citiesList",
        keenthemesIcon: "flag",
        bootstrapIcon: "bi-cart",
      },
      {
        // sectionTitle: "brands",
        heading: "cars",
        route: "/apps/cars/carsList",
        keenthemesIcon: "car-2",
        bootstrapIcon: "bi-cart",
      },
      // {
      //   heading: "calendarApp",
      //   route: "/apps/calendar",
      //   keenthemesIcon: "calendar-8",
      //   bootstrapIcon: "bi-calendar3-event",
      // },
    ],
  },
];

export default MainMenuConfig;
