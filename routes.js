const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'message': 'SERVER RUNNING' });
});


module.exports = router;