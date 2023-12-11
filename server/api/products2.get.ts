import productsData2 from '~/data/data.json'

// return a promise and if it is resolved, will contain json data
export default defineEventHandler((e) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData2)
        }, 2000)
    })
})