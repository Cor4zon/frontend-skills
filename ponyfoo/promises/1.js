fetch('https://ponyfoo.com/articles/es6-promises-in-depth')
    .then(res => res.a.prop.that.does.not.exist)
    .catch(err => { throw new Error(err.message) })
    .catch(err => console.error(err.message))
// <- 'Cannot read property "prop" of undefined'
