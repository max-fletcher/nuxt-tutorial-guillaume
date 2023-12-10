// Minor difference between this(i.e 'server/routes') and 'server/api' is that for api, you have to hit "http://localhost:3000/api/hello" in your browser to fetch data
// but for this, we simply use "http://localhost:3000/hello" and we will get data from here. Also, we need to understand that 'server/api' is used to define api logic and should
// return JSON by convention, but anything in 'server/routes' should return anything else that is used to populate the frontend page with data.

export default defineEventHandler(() => 'Bonjour World')