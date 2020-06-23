const casual = require('casual');
// Contract Comparison Summaries (on Dashboard)

module.exports = () => {
    casual.define('data', function () {
        return {
            title: casual.title,
            short_description: casual.short_description,
            url: casual.url,
            id: casual.uuid,
        }
    })

    const data = [];

    // Create 100 users
    for (let i = 0; i < 100; i++) {
        data.push(casual.data)
    }

    return data
}