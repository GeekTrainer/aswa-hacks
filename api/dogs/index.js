module.exports = async function (context, req) {
    context.log('Returned list of cute dogs');

    const dogs = [
        { name: 'Azure' },
        { name: 'Sammy' },
        { name: 'Pookie' },
        { name: 'Functions' },
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {dogs: dogs},
        headers: {
            'Content-Type': 'application/json'
        }
    };
}