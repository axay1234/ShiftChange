import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));
const ShiftReport = React.lazy(() => import('./App/components/ShiftReport'));
const ProductionSupervisor = React.lazy(() => import('./App/components/ProductionSupervisor'));
const NewReport = React.lazy(() => import('./App/components/NewReport'));
const AllReports = React.lazy(() => import('./App/components/AllReports'));
const MyReports = React.lazy(() => import('./App/components/MyReports'));
const AreaSupervisor = React.lazy(() => import('./App/components/AreaSupervisor'));
const AreaA = React.lazy(() => import('./App/components/AreaA'));
const ConsoleReport = React.lazy(() => import('./App/components/ConsoleReport'));
const Field = React.lazy(() => import('./App/components/Field'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    { path: '/shiftreport', exact: true, name: 'ShiftReport', component: ShiftReport },
    { path: '/productionsupervisor', exact: true, name: 'ProductionSupervisor', component: ProductionSupervisor },
    { path: '/newreport', exact: true, name: 'NewReport', component: NewReport },
    { path: '/allreports', exact: true, name: 'AllReports', component: AllReports },
    { path: '/myreports', exact: true, name: 'MyReports', component: MyReports },
    { path: '/areasupervisor', exact: true, name: 'AreaSupervisor', component: AreaSupervisor },
    { path: '/areaa', exact: true, name: 'AreaA', component: AreaA },
    { path: '/consolereport', exact: true, name: 'ConsoleReport', component: ConsoleReport },
    { path: '/field', exact: true, name: 'Field', component: Field },
];

export default routes;