fetch('foo')
    .then(res => res.a.prop.that.does.not.exist)
    .catch(err => {})
    .catch(err => console.error(err.message))
    .then(res => {console.log("ok")})