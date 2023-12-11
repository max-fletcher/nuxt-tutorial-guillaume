// The server folder is to make Nuxt act like a backend framework as well if you don't intend to use a separate backend. Each function will contain business logic and return formatted data.
// After defining an endpoint, you can call it from anywhere(from any vue components) using say, const { data } = await useFetch('/api/hello') inside script tags(See pages/index.vue)
// If you type in and hit "http://localhost:3000/api/hello" in your browser, you should be able to see the data being returned from here.
// Returning a json as response. It can return other things as well though such as strings,stream data etc.
// You can also pass is an event as an argument to these functions.
// The best practice for naming these files is to define separate files for each endpoint and name them like this -> [name].[method].ts
// i.e 'posts.get.ts', 'posts.post.ts', 'posts.patch.ts' and 'posts.delete.ts'. If you  hit "http://localhost:3000/api/hello", it should still work in browser for 'posts.get.ts'.


export default defineEventHandler((e) => {
    console.log(e);
    
    // return 'Hello World';

    return {
        data : 'Hello World!'
    };
})