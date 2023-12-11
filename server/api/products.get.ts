import productsData from '~/data/data.json'

export default defineEventHandler((e) => {
    console.log(e);

    return {
        data : productsData
    };
})