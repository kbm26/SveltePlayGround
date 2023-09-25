/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    console.log(params);
    return {
        name : params.name
    };
};