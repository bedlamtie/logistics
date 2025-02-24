import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '/@/views/home/Home.vue'
import DistributionDetailsView from '/@/views/distribution/Details.vue'
import DistributionColumnView from '/@/views/distribution/Column.vue'
import CompanyOverviewView from '/@/views/company/Overview.vue'
import NewsLayout from '/@/views/news/News.vue'
import NewsCenter from '/@/views/news/NewsCenter.vue'
import NewsDetails from '/@/views/news/NewsDetails.vue'
import HelpView from '/@/views/help/Help.vue'
import HelpView2 from '/@/views/help/Help2.vue'
import HelpView3 from '/@/views/help/Help3.vue'
import HelpView4 from '/@/views/help/Help4.vue'
import LogisticsTrackingOrderView from '/@/views/logistics/TrackingOrder.vue'
import FreightChargeView from '../views/logistics/FreightCharge.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/distribution-details', component: DistributionDetailsView },
  { path: '/distribution-column', component: DistributionColumnView },
  { path: '/company-overview', component: CompanyOverviewView },
  { path: '/help', component: HelpView },
  { path: '/help2', component: HelpView2 },
  { path: '/help3', component: HelpView3 },
  { path: '/help4', component: HelpView4 },
  {
    path: '/news',
    component: NewsLayout,
    redirect: '/news/center',
    children: [
      {
        path: 'center',
        component: NewsCenter,
      },
      {
        path: ':id',
        component: NewsDetails,
      },
    ],
  },
  {
    path: '/logistics',
    children: [
      { path: 'tracking-order', component: LogisticsTrackingOrderView },
      { path: 'freight-charge', component: FreightChargeView },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
