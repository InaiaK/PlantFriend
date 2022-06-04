
    const router = require('express').Router();
    const userRoutes = require('./userRoutes');
    const plantRoutes = require('./planttRoutes');
    
    router.use('/users', userRoutes);
    router.use('/plant', plantRoutes);
    
    module.exports = router;
    