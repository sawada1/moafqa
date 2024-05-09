import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/default-layout/DefaultLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "Layout Builder",
          breadcrumbs: ["Layout"],
        },
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        meta: {
          breadcrumbs: ["Pages", "Profile"],
        },
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
            meta: {
              pageTitle: "Projects",
            },
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () =>
              import("@/views/crafted/pages/profile/Campaigns.vue"),
            meta: {
              pageTitle: "Campaigns",
            },
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
            meta: {
              pageTitle: "Documents",
            },
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () =>
              import("@/views/crafted/pages/profile/Connections.vue"),
            meta: {
              pageTitle: "Connections",
            },
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
            meta: {
              pageTitle: "Activity",
            },
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () =>
          import("@/views/crafted/pages/wizards/HorizontalWizardPage.vue"),
        meta: {
          pageTitle: "Horizontal",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () =>
          import("@/views/crafted/pages/wizards/VerticalWizardPage.vue"),
        meta: {
          pageTitle: "Vertical",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        meta: {
          breadcrumbs: ["Crafted", "Account"],
        },
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
            meta: {
              pageTitle: "Settings",
            },
          },
        ],
      },
      // {
      //   path: "/apps/customers/getting-started",
      //   name: "apps-customers-getting-started",
      //   component: () => import("@/views/apps/customers/GettingStarted.vue"),
      //   meta: {
      //     pageTitle: "Getting Started",
      //     breadcrumbs: ["Apps", "Customers"],
      //   },
      // },
      // {
      //   path: "/apps/customers/customers-listing",
      //   name: "apps-customers-listing",
      //   component: () => import("@/views/apps/customers/CustomersListing.vue"),
      //   meta: {
      //     pageTitle: "Customers Listing",
      //     breadcrumbs: ["Apps", "Customers"],
      //   },
      // },
      // {
      //   path: "/apps/customers/customer-details",
      //   name: "apps-customers-details",
      //   component: () => import("@/views/apps/customers/CustomerDetails.vue"),
      //   meta: {
      //     pageTitle: "Customers Details",
      //     breadcrumbs: ["Apps", "Customers"],
      //   },
      // },
      // {
      //   path: "/apps/subscriptions/getting-started",
      //   name: "apps-subscriptions-getting-started",
      //   component: () =>
      //     import("@/views/apps/subscriptions/GettingStarted.vue"),
      //   meta: {
      //     pageTitle: "Getting Started",
      //     breadcrumbs: ["Apps", "Subscriptions"],
      //   },
      // },
      {
        path: "/apps/brands/brandsList",
        name: "apps-brands-brands-list",
        component: () => import("@/views/apps/brands/brandsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["brands", "brands-list"],
        },
      },
      {
        path: "/apps/brands/brand-show/:id",
        name: "apps-subscriptions-brand-show",
        props: true,
        component: () => import("@/views/apps/brands/brand-show.vue"),
        meta: {
          pageTitle: "brand Show",
          breadcrumbs: ["brands", "brand-show"],
        },
      },
      {
        path: "/apps/models/modelsList",
        name: "apps-models-list",
        component: () => import("@/views/apps/models/modelsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["models", "models-list"],
        },
      },
      {
        path: "/apps/models/model-show/:id",
        name: "apps-models-show",
        props: true,
        component: () => import("@/views/apps/models/model-show.vue"),
        meta: {
          pageTitle: "model Show",
          breadcrumbs: ["models", "models-show"],
        },
      },
      {
        path: "/apps/subModels/modelsList",
        name: "apps-subModels-list",
        component: () => import("@/views/apps/subModels/modelsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["subModels", "subModels-list"],
        },
      },
      {
        path: "/apps/subModels/model-show/:id",
        name: "apps-subModels-show",
        props: true,
        component: () => import("@/views/apps/subModels/model-show.vue"),
        meta: {
          pageTitle: "subModel Show",
          breadcrumbs: ["subModels", "subModel-show"],
        },
      },
      {
        path: "/apps/colors/colorsList",
        name: "apps-colors-list",
        component: () => import("@/views/apps/colors/colorsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["colors", "colors-list"],
        },
      },
      {
        path: "/apps/colors/color-show/:id",
        name: "apps-colors-show",
        props: true,
        component: () => import("@/views/apps/colors/color-show.vue"),
        meta: {
          pageTitle: "colors Show",
          breadcrumbs: ["colors", "color-show"],
        },
      },
      {
        path: "/apps/agencies/agenciesList",
        name: "apps-agencies-list",
        component: () => import("@/views/apps/agencies/agenciesList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["agencies", "agencies-list"],
        },
      },
      {
        path: "/apps/agencies/agency-show/:id",
        name: "apps-agencies-show",
        props: true,
        component: () => import("@/views/apps/agencies/agency-show.vue"),
        meta: {
          pageTitle: "colors Show",
          breadcrumbs: ["agencies", "agency-show"],
        },
      },
      {
        path: "/apps/agencies/branches",
        name: "apps-branches-list",
        component: () => import("@/views/apps/agencies/branches.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["branches", "branches-list"],
        },
      },
      {
        path: "/apps/agencies/branches-show/:id",
        name: "apps-branches-show",
        props: true,
        component: () => import("@/views/apps/agencies/branches-show.vue"),
        meta: {
          pageTitle: "branches Show",
          breadcrumbs: ["branches", "branches-show"],
        },
      },
      {
        path: "/apps/fundCompanies/branches",
        name: "apps-branches-fund-list",
        component: () => import("@/views/apps/fundCompanies/branches.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["branches", "branches-list"],
        },
      },
      {
        path: "/apps/fundCompanies/branches-show/:id",
        name: "apps-branches-fund-show",
        props: true,
        component: () => import("@/views/apps/fundCompanies/branches-show.vue"),
        meta: {
          pageTitle: "branches Show",
          breadcrumbs: ["branches", "branches-show"],
        },
      },
      {
        path: "/apps/customers/clients/clientsList",
        name: "apps-clients-list",
        component: () =>
          import("@/views/apps/customers/clients/clientsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["clients", "clients-list"],
        },
      },
      {
        path: "/apps/customers/clients/client-show/:id",
        name: "apps-clients-show",
        props: true,
        component: () =>
          import("@/views/apps/customers/clients/client-show.vue"),
        meta: {
          pageTitle: "client Show",
          breadcrumbs: ["clients", "client-show"],
        },
      },
      {
        path: "/apps/customers/clients_score/clientsScoreList",
        name: "apps-clients-score-list",
        component: () =>
          import("@/views/apps/customers/clients_score/clientsScoreList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["clients_score", "clients_score-list"],
        },
      },
      {
        path: "/apps/customers/clients_score/clientScore-show/:id",
        name: "apps-clients-score-show",
        props: true,
        component: () =>
          import("@/views/apps/customers/clients_score/clientScore-show.vue"),
        meta: {
          pageTitle: "client-score Show",
          breadcrumbs: ["clients-score", "clients-score-show"],
        },
      },
      {
        path: "/apps/fundCompanies/fundCompaniesList",
        name: "apps-fundCompanies-list",
        component: () =>
          import("@/views/apps/fundCompanies/fundCompaniesList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Fund Companies", "fundCompanies-list"],
        },
      },
      {
        path: "/apps/offers/offerslist",
        name: "apps-offersList",
        component: () => import("@/views/apps/offers/offerslist.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["offers", "offers-list"],
        },
      },
      {
        path: "/apps/offers/offer-show/:id",
        name: "apps-offer-show",
        props: true,
        component: () => import("@/views/apps/offers/offer-show.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["offer", "offer-show"],
        },
      },
      {
        path: "/apps/requests/requestsList",
        name: "apps-requests-list",
        component: () => import("@/views/apps/requests/requestsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["requests", "requests-list"],
        },
      },
      {
        path: "/apps/requests/reques-show/:id",
        name: "apps-request-show",
        props: true,
        component: () => import("@/views/apps/requests/request-show.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["request", "request-show"],
        },
      },
      {
        path: "/apps/requests/requestsHistoryList",
        name: "apps-requestsHistory-list",
        component: () => import("@/views/apps/requests/requestsHistoryList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["requests History", "requests-list"],
        },
      },
      {
        path: "/apps/requests/request-history-show/:id",
        name: "apps-request-history-show",
        props: true,
        component: () => import("@/views/apps/requests/request-history-show.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["request history", "request-history-show"],
        },
      },
      {
        path: "/apps/offers/AddOffer",
        name: "apps-add-offer",
        component: () => import("@/views/apps/offers/AddOffer.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["offer", "add offer"],
        },
      },
      {
        path: "/apps/offers/EditOffer/:id",
        name: "apps-edit-offer",
        props: true,
        component: () => import("@/views/apps/offers/EditOffer.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["offer", "offer-edit"],
        },
      },
      {
        path: "/apps/fundCompanies/fund-company-show/:id",
        name: "apps-fundCompanies-show",
        props: true,
        component: () =>
          import("@/views/apps/fundCompanies/fund-company-show.vue"),
        meta: {
          pageTitle: "fundCompany Show",
          breadcrumbs: ["fundCompanies", "fundCompany-show"],
        },
      },
      {
        path: "/apps/cities/citiesList",
        name: "apps-cities-list",
        component: () => import("@/views/apps/cities/citiesList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["cities", "cities-list"],
        },
      },
      {
        path: "/apps/cities/city-show/:id",
        name: "apps-cities-show",
        props: true,
        component: () => import("@/views/apps/cities/city-show.vue"),
        meta: {
          pageTitle: "city Show",
          breadcrumbs: ["cities", "city-show"],
        },
      },
      {
        path: "/apps/cars/carsList",
        name: "apps-cars-list",
        component: () => import("@/views/apps/cars/carsList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["cars", "cars-list"],
        },
      },
      {
        path: "/apps/cars/car-show/:id",
        name: "apps-cars-show",
        props: true,
        component: () => import("@/views/apps/cars/car-show.vue"),
        meta: {
          pageTitle: "car Show",
          breadcrumbs: ["cars", "car-show"],
        },
      },
      // {
      //   path: "/apps/subscriptions/view-subscription",
      //   name: "apps-subscriptions-view-subscription",
      //   component: () =>
      //     import("@/views/apps/subscriptions/ViewSubscription.vue"),
      //   meta: {
      //     pageTitle: "View Subscription",
      //     breadcrumbs: ["Apps", "Subscriptions"],
      //   },
      // },
      {
        path: "/apps/calendar",
        name: "apps-calendar",
        component: () => import("@/views/apps/Calendar.vue"),
        meta: {
          pageTitle: "Calendar",
          breadcrumbs: ["Apps"],
        },
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Private Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Group Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/apps/chat/DrawerChat.vue"),
        meta: {
          pageTitle: "Drawer Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/crafted/modals/general/invite-friends",
        name: "modals-general-invite-friends",
        component: () =>
          import("@/views/crafted/modals/general/InviteFriends.vue"),
        meta: {
          pageTitle: "Invite Friends",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
        meta: {
          pageTitle: "View User",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () =>
          import("@/views/crafted/modals/general/UpgradePlan.vue"),
        meta: {
          pageTitle: "Upgrade Plan",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () =>
          import("@/views/crafted/modals/general/ShareAndEarn.vue"),
        meta: {
          pageTitle: "Share And Earn",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/forms/new-target",
        name: "modals-forms-new-target",
        component: () => import("@/views/crafted/modals/forms/NewTarget.vue"),
        meta: {
          pageTitle: "New Target",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-card",
        name: "modals-forms-new-card",
        component: () => import("@/views/crafted/modals/forms/NewCard.vue"),
        meta: {
          pageTitle: "New Card",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
        meta: {
          pageTitle: "New Address",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () =>
          import("@/views/crafted/modals/forms/CreateApiKey.vue"),
        meta: {
          pageTitle: "Create Api Key",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () =>
          import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
        meta: {
          pageTitle: "Two Factory Auth",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
        meta: {
          pageTitle: "Create App",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () =>
          import("@/views/crafted/modals/wizards/CreateAccount.vue"),
        meta: {
          pageTitle: "Create Account",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/crafted/widgets/Lists.vue"),
        meta: {
          pageTitle: "Lists",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/crafted/widgets/Statistics.vue"),
        meta: {
          pageTitle: "Statistics",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/crafted/widgets/Charts.vue"),
        meta: {
          pageTitle: "Charts",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/crafted/widgets/Mixed.vue"),
        meta: {
          pageTitle: "Mixed",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/crafted/widgets/Tables.vue"),
        meta: {
          pageTitle: "Tables",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
        meta: {
          pageTitle: "Feeds",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // If the route has a hash, scroll to the section with the specified ID; otherwise, scroll to the top of the page.
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }
});

export default router;
