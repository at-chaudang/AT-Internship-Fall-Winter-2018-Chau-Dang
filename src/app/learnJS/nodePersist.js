const storage = require('node-persist');

await storage.init({
    dir: './persis',
    ttl: false
});
await storage.setItem('name','yourname')
console.log(await storage.getItem('name'));

// add, remove


