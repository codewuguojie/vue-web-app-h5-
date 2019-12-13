import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: () => import("@/views/index/index"),
      redirect:'/index/recommend',
      meta: {
        title: "资讯",
      },
      children:[
        {
          path: "recommend",
          component: () => import("@/views/index/recommend/recommend"),
          meta: {
            title: "推荐",
          },
        },
        {
          path: "yunding",
          component: () => import("@/views/index/yunding/yunding"),
          redirect:'/index/yunding/goast',
          meta: {
            title: "云顶",
          },
          children:[
            {
              path: "goast",
              component: () => import("@/views/index/yunding/goast/goast"),
              meta: {
                title: "英雄",
              },
            },
            {
              path: "zhenrong",
              component: () => import("@/views/index/yunding/zhenrong/zhenrong"),
              meta: {
                title: "阵容",
              },
            },
            {
              path: "goods",
              component: () => import("@/views/index/yunding/goods/goods"),
              meta: {
                title: "物品",
              },
            },
            {
              path: "rank",
              component: () => import("@/views/index/yunding/rank/rank"),
              meta: {
                title: "排行版",
              },
            },
          ]
        },
        {
          path: "competition",
          component: () => import("@/views/index/competition/competition"),
          meta: {
            title: "赛事",
          },
        },
        {
          path: "strategy",
          component: () => import("@/views/index/strategy/strategy"),
          meta: {
            title: "攻略",
          },
        },
        {
          path: "event",
          component: () => import("@/views/index/event/event"),
          meta: {
            title: "活动",
          },
        },
      ]
    },
    {
      path: "/cart",
      meta: {
        title: "盟友圈"
      },
      component: () => import("@/views/cart/index")
    },
    {
      path: "/tv",
      meta: {
        title: "电视台"
      },
      component: () => import("@/views/tv/index")
    },
    {
      path: "/shop",
      meta: {
        title: "电视台"
      },
      component: () => import("@/views/shop/index")
    },
    {
      path: "/my",
      component: () => import("@/views/my/index"),
      redirect: "/my/center",
      children: [
        {
          path: "center",
          meta: {
            title: "个人中心"
          },
          component: () => import("@/views/my/children/center")
        },
        {
          path: "set",
          meta: {
            title: "设置"
          },
          component: () => import("@/views/my/children/set")
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/login/index"),
      meta: {
        title: "登陆"
      }
    },
    {
      path: "/register",
      component: () => import("@/views/register/index"),
      meta: {
        title: "注册"
      }
    },
    {
      path: "/reset",
      component: () => import("@/views/reset/index"),
      meta: {
        title: "重置密码"
      }
    },
    {
      path: "/area",
      component: () => import("@/views/area/index"),
      meta: {
        title: "绑定大区"
      }
    },
    {
      path: "/messageSet",
      component: () => import("@/views/messageSet/messageSet"),
      meta: {
        title: "消息推送设置"
      }
    },
    {
      path: "/privacy",
      component: () => import("@/views/privacy/privacy"),
      meta: {
        title: "隐私设置"
      }
    },
    {
      path: "/operate",
      component: () => import("@/views/operate/operate"),
      meta: {
        title: "意见反馈"
      }
    },
    {
      path: "/attention",
      component: () => import("@/views/attention/attention"),
      meta: {
        title: "关注"
      }
    },
    {
      path: "/fans",
      component: () => import("@/views/fans/fans"),
      meta: {
        title: "粉丝"
      }
    },
    {
      path: "/friends",
      component: () => import("@/views/friends/friends"),
      meta: {
        title: "好友"
      }
    },
    {
      path: "/announce",
      component: () => import("@/views/announce/announce"),
      redirect: "/announce/dynamic",
      meta: {
        title: "发表"
      },
      children: [
        {
          path: "dynamic",
          meta: {
            title: "动态"
          },
          component: () => import("@/views/announce/dynamic/dynamic")
        },
        {
          path: "topic",
          meta: {
            title: "帖子"
          },
          component: () => import("@/views/announce/topic/topic")
        },
        {
          path: "discuss",
          meta: {
            title: "评论"
          },
          component: () => import("@/views/announce/discuss/discuss")
        },
      ]
    },
    {
      path: "/collect",
      component: () => import("@/views/collect/collect"),
      redirect: "/collect/topic",
      meta: {
        title: "我的收藏"
      },
      children: [
        {
          path: "topic",
          meta: {
            title: "我的收藏"
          },
          component: () => import("@/views/collect/topic/topic")
        },
        {
          path: "hero",
          meta: {
            title: "我的收藏"
          },
          component: () => import("@/views/collect/hero/hero")
        },
        {
          path: "wallpaper",
          meta: {
            title: "我的收藏"
          },
          component: () => import("@/views/collect/wallpaper/wallpaper")
        },
      ]
    },
    {
      path: "/activity",
      component: () => import("@/views/activity/activity"),
      redirect: "/activity/activiting",
      meta: {
        title: "活动中心"
      },
      children: [
        {
          path: "activiting",
          meta: {
            title: "活动中心"
          },
          component: () => import("@/views/activity/activiting/activiting")
        },
        {
          path: "activitied",
          meta: {
            title: "帖子"
          },
          component: () => import("@/views/activity/activitied/activitied")
        }
      ]
    },
    {
      path: "/order",
      component: () => import("@/views/order/index"),
      meta: {
        title: "我的订单"
      },
    },
    {
      path: "/detail",
      component: () => import("@/views/order/detail"),
      meta: {
        title: "订单详情"
      },
    },
    {
      path: "/videoList",
      component: () => import("@/views/index/competition/videoList"),
      meta: {
        title: "视频"
      },
    },
    {
      path: "/video",
      component: () => import("@/views/index/competition/video"),
      meta: {
        title: "视频"
      },
    },
    {
      path: "*",
      component: () => import("@/components/NotFound")
    }
  ]
});

router.beforeEach((to, from, next) => {
  let { title, needLogin } = to.meta;
  let { isLogin } = store.state;
  document.title = title;

  if (needLogin && !isLogin) {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

export default router;
