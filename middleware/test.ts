// This is a royute middleware(your filename will control what is global and has to have a '.global' as filename 'e.g auth.global.ts'). The 'to' and 'from' are provided automatically.
// You need to call the middleware using define 'definePageMeta'(see events.vue on how to do so) for this since it is a route-specific middleware.
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Henlo from test.ts'); // WTF BRO ??
})