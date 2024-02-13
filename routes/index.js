const express = require('express');
const router = express.Router();
const mailRoutes = require('./mailRoutes.js');

const defaultRouters = [
    {
        path: '/mail',
        route: mailRoutes
    }
]

defaultRouters.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router