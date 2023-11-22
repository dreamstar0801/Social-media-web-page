import Default from '@/layouts/default.vue'
import UserProfile from '@/global/UserProfile.vue'
import Post from '@/global/Post.vue'
export default [
  {
    path: '/',
    component: Default,
    children: [
      { path: 'user/:username', component: UserProfile, props: true },
      { path: 'post/:postid', component: Post, props: true },
    ],
  },
]
