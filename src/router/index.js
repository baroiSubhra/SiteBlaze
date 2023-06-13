import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/utils/cookieHelper'
import { LOGGED_IN_KEY } from '@/utils/constants'
import LandingPage from '../views/LandingPage/LandingPageView.vue'
import TermsAndConditions from '../views/LandingPage/TermsAndConditions.vue'
import Signup from '../views/Auth/Signup.vue'
import Login from '../views/Auth/Login.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import ActiveSiteView from '../views/ActiveSite/ActiveSiteView.vue'
import HistorActiveSiteView from '../views/HistorySite/HistoryActiveSiteView.vue'
import MyTemplates from '../views/MyTemplates/MyTemplates.vue'
import TemplateStore from '../views/Templates/Templates.vue'
import MyActiveSite from '../views/MyActiveSite/MyActiveSite.vue'
import Projects from '../views/Projects/Projects.vue'
import Blogs from '../views/Blogs/Blogs.vue'
import AddContent from '../views/AddContent/AddContent.vue'
import Cta from '../views/CTA/CtaData.vue'
import EditCta from '../views/CTA/EditCtaData.vue'
import UserSettings from '../views/AccountSettings/Settings.vue'
import ChangePassword from '../views/ChangePassword/ChangePassword.vue'

import { CONTENT_TYPE_ENUM } from '@/utils/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/portfolio/:id',
      children: [
        {
          path: '',
          name: 'portfolio-view',
          component: ActiveSiteView,
          meta: {
            noOfPopsToBasePath: 0
          }
        },
        {
          path: 'blogs',
          name: 'blogs-portfolio-view',
          component: ActiveSiteView,
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'blogs/:doc',
          name: 'blog-portfolio-view',
          component: ActiveSiteView,
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'projects',
          name: 'projects-portfolio-view',
          component: ActiveSiteView,
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        },
        {
          path: 'projects/:doc',
          name: 'project-portfolio-view',
          component: ActiveSiteView,
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        }
      ]
    },
    {
      path: '/history/:id/:d',
      meta: {
        requires_auth: true
      },
      children: [
        {
          path: '',
          name: 'history-view',
          component: HistorActiveSiteView,
          meta: {
            noOfPopsToBasePath: 0
          }
        },
        {
          path: 'blogs',
          name: 'blogs-history-view',
          component: HistorActiveSiteView,
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'blogs/:doc',
          name: 'blog-history-view',
          component: HistorActiveSiteView,
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'projects',
          name: 'projects-history-view',
          component: HistorActiveSiteView,
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        },
        {
          path: 'projects/:doc',
          name: 'project-history-view',
          component: HistorActiveSiteView,
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requires_auth: true
      },
      children: [
        {
          path: '',
          name: 'all-portfolio',
          component: MyTemplates
        },
        {
          path: 'templates',
          name: 'templates',
          component: TemplateStore
        },
        {
          path: 'settings',
          name: 'settings',
          component: UserSettings
        },
        {
          path: 'cms/projects',
          name: 'projects',
          component: Projects
        },
        {
          path: 'cms/projects/add',
          name: 'projects-add',
          component: AddContent
        },
        {
          path: 'cms/blogs',
          name: 'blogs',
          component: Blogs
        },
        {
          path: 'cms/blogs/add',
          name: 'blogs-add',
          component: AddContent
        },
        {
          path: 'change-password',
          name: 'change-password',
          component: ChangePassword
        },
        {
          path: 'cms/cta',
          name: 'cta',
          component: Cta
        },
        {
          path: 'cms/cta/edit',
          name: 'cta-data-edit',
          component: EditCta
        },
        {
          path: 'active-portfolio',
          name: 'active-portfolio',
          component: MyActiveSite
        },
        {
          path: 'manage-portfolio/:id',
          name: 'manage-portfolio',
          component: MyActiveSite
        }
      ]
    },
    {
      path: '/portfolio-templates',
      name: 'portfolio-templates',
      children: [
        {
          path: 'template-1',
          meta: {
            isTemplate: true
          },
          children: [
            {
              path: '',
              name: 'template-1',
              component: () => import('../templates/template1/view/Page.vue'),
              meta: {
                noOfPopsToBasePath: 0
              }
            },
            {
              path: 'blogs',
              name: 'blogs-template-1',
              component: () => import('../templates/template1/view/ListView.vue'),
              meta: {
                noOfPopsToBasePath: 1,
                contentType: CONTENT_TYPE_ENUM.BLOG
              }
            },
            {
              path: 'blogs/:doc',
              name: 'blog-template-1',
              component: () => import('../templates/template1/view/IndividualView.vue'),
              meta: {
                noOfPopsToBasePath: 2,
                contentType: CONTENT_TYPE_ENUM.BLOG
              }
            },
            {
              path: 'projects',
              name: 'projects-template-1',
              component: () => import('../templates/template1/view/ListView.vue'),
              meta: {
                noOfPopsToBasePath: 1,
                contentType: CONTENT_TYPE_ENUM.PROJECT
              }
            },
            {
              path: 'projects/:doc',
              name: 'project-template-1',
              component: () => import('../templates/template1/view/IndividualView.vue'),
              meta: {
                noOfPopsToBasePath: 2,
                contentType: CONTENT_TYPE_ENUM.PROJECT
              }
            }
          ]
        },
        {
          path: 'template-2',
          name: 'template-2',
          component: () => import('../templates/template2/view/Page.vue'),
          meta: {
            isTemplate: true
          }
        },
        {
          path: 'blogs',
          name: 'blogs-template-2',
          component: () => import('../templates/template1/view/ListView.vue'),
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'blogs/:doc',
          name: 'blog-template-2',
          component: () => import('../templates/template1/view/IndividualView.vue'),
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.BLOG
          }
        },
        {
          path: 'projects',
          name: 'projects-template-2',
          component: () => import('../templates/template1/view/ListView.vue'),
          meta: {
            noOfPopsToBasePath: 1,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        },
        {
          path: 'projects/:doc',
          name: 'project-template-2',
          component: () => import('../templates/template1/view/IndividualView.vue'),
          meta: {
            noOfPopsToBasePath: 2,
            contentType: CONTENT_TYPE_ENUM.PROJECT
          }
        }
      ]
    }
  ]
})

// Route guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = getCookie(LOGGED_IN_KEY)
  if (to.matched.some((record) => record.meta.requires_auth)) {
    if (isLoggedIn) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (isLoggedIn && ['login', 'signup'].includes(to.name)) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
