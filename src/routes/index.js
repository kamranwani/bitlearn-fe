import { lazy } from "react";

// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/eCommerce/EcommerceDashboard"));
const ElearningDashboard = lazy(() =>
  import("../pages/elearning/ElearningDashboard")
);
const SuperAdminDashboard = lazy(() =>
  import("../pages/superAdmin/SuperAdminDashboard")
);
const EngagementDashboard = lazy(() =>
  import("pages/engagement/EngagementDashboard")
);
const Attributes = lazy(() => import("../pages/eCommerce/Attributes"));
const ChildAttributes = lazy(() =>
  import("../pages//eCommerce/ChildAttributes")
);
const Menu1 = lazy(() => import("pages/superAdmin/Menu1"));
const Menu2 = lazy(() => import("pages/superAdmin/Menu2"));
const SubMenuA = lazy(() => import("pages/superAdmin/Menu3/SubMenuA"));
const SubMenuB = lazy(() => import("pages/superAdmin/Menu3/SubMenuB"));
const Products = lazy(() => import("../pages/eCommerce/Products"));
const ProductDetails = lazy(() => import("../pages/eCommerce/ProductDetails"));
const Category = lazy(() => import("../pages/eCommerce/Category"));
const ChildCategory = lazy(() => import("../pages/eCommerce/ChildCategory"));
const Staff = lazy(() => import("../pages/global/Staff"));
const Customers = lazy(() => import("../pages/eCommerce/Customers"));
const CustomerOrder = lazy(() => import("../pages/eCommerce/CustomerOrder"));
const Orders = lazy(() => import("../pages/eCommerce/Orders"));
const OrderInvoice = lazy(() => import("../pages/eCommerce/OrderInvoice"));
const Coupons = lazy(() => import("../pages/eCommerce/Coupons"));
// const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import("../pages/global/404"));
const ComingSoon = lazy(() => import("../pages/global/ComingSoon"));
const EditProfile = lazy(() => import("../pages/global/EditProfile"));
const Languages = lazy(() => import("../pages/global/Languages"));
const Currencies = lazy(() => import("../pages/global/Currencies"));
const Setting = lazy(() => import("../pages/eCommerce/Setting"));
/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: "/ecommerce-dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/attributes",
    component: Attributes,
  },
  {
    path: "/attributes/:id",
    component: ChildAttributes,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/categories",
    component: Category,
  },
  {
    path: "/languages",
    component: Languages,
  },
  {
    path: "/currencies",
    component: Currencies,
  },

  {
    path: "/categories/:id",
    component: ChildCategory,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/our-staff",
    component: Staff,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  { path: "/settings", component: Setting },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/coming-soon",
    component: ComingSoon,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/elearning-dashboard",
    component: ElearningDashboard,
  },
  {
    path: "/engagement-dashboard",
    component: EngagementDashboard,
  },
  {
    path: "/superadmin-dashboard",
    component: SuperAdminDashboard,
  },
  {
    path: "/menu1",
    component: Menu1,
  },
  {
    path: "/menu2",
    component: Menu2,
  },
  {
    path: "/submenua",
    component: SubMenuA,
  },
  {
    path: "/submenub",
    component: SubMenuB,
  },
];

export default routes;
