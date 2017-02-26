var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'baidunews'
});

/* 后台页面 */

/*获取所有新闻*/
router.get('/getnews', function(req, res) {
    // res.send('respond with a resource');
    connection.query('SELECT * FROM `news`', function(err, rows) {
        res.json(rows);
    });
});

/*确定按钮更新新闻*/
router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;

    connection.query('UPDATE news SET newstitle=?,newstype=?,newsimg=?,newstime=?,newssrc=? WHERE id = ?', [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows) {
        res.json(rows);

    });

});

/*更新当前新闻*/
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE id = ?', [newsid], function(err, rows) {
        res.json(rows);
    });
});

/*删除新闻*/
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id` = ?', [newsid], function(err, result) {
        if (!err) {
            res.json(result);
        }
    });
});

/*插入新闻*/
router.post('/insert', function(req, res) {
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES(?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        if (!err) {
            res.json(result);
        }
    });
});

module.exports = router;
