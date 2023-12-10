// This is a global middleware(your filename will control what is global and has to have a '.global' as filename 'e.g auth.global.ts'). The 'to' and 'from' are provided automatically.
export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from); // Displays route info(to and from) when changing routes(i.e click a link that takes you to another page)

    const isLoggedIn = false; // we can delegate this to a state in Pinia, but for now, this is just an example.
    if(isLoggedIn){
        // if user is logged in, go to page the user wants to go to
        return navigateTo(to.fullPath)
    }

    // redirect to login page
})