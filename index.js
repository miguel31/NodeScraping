var phantom = require("phantom");
//var express = require('express');
//var app =     server = express(); //express.createServer();    
var _ph, _page, _outObj;

/*phantom.create().then(ph => {
    _ph = ph;
    return _ph.createPage();
}).then(page => {
    _page = page;

    return _page.open('http://example.org/');
      var url = 'https://gamedataquery.sdo.com/ajax/getpaypoint';
    var data = 'date=2016-05-13+~+2016-05-20&area=(177)%E7%BB%8F%E5%85%B8%E5%9B%9E%E5%BD%92%E4%BA%8C%E5%8C%BA+-+all';
    page.customHeaders = {
        'X-CSRF-TOKEN' : msg,
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    };

}).then(status => {
    console.log(status);
    //return _page.property('content')
    return _page.render('example.png')

}).then(content => {
    console.log(content);
    _page.close();
    _ph.exit();
}).catch(e => console.log(e));*/
var express = require('express');
var app = express();
const util = require('util')
app.use(express.static('./'));

phantom.create().then(ph => {
    _ph = ph;
    return _ph.createPage();}).then(page => {
    	_page = page;
    	return _page.open('https://play.google.com/store/apps/details?id=com.cencosud.jumbochile&hl=es');
      	var url = 'https://play.google.com/store/apps/details?id=com.cencosud.jumbochile&hl=es';
    	var data = ''; //'date=2016-05-13+~+2016-05-20&area=(177)%E7%BB%8F%E5%85%B8%E5%9B%9E%E5%BD%92%E4%BA%8C%E5%8C%BA+-+all';
    	page.customHeaders = {
        	'X-CSRF-TOKEN' : msg,
        	//'Accept' : 'application/json',
        	//'X-Requested-With' : 'XMLHttpRequest',

    'Pragma': 'no-cache',
    'DNT': '1',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'es-ES,es;q=0.8,en;q=0.6',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Cache-Control': 'no-cache'


    	};}).then(status => {
    		console.log(status);
    		//return _page.property('content')
    		/*var = 
    		for (var HTML in  _page){
    			console.log(HTML[_page]);
			}*/
			/*res = _page;
			app.get('/', function(req, res) {
    			res.render('index.html');
			});*/
			//console.log(JSON.stringify(_page, null, 4));
			console.log(util.inspect(_page, {showHidden: false, depth: null}))
    		//console.log('HTML:'+_page['.author-name']);
    		return _page.render('example.pdf')

    		//server.get('/', function(req, res) { res.render('index.html');	});

		}).then(content => {
    		console.log(content);
    		_page.close();
    		_ph.exit();
}).catch(e => console.log(e));








app.listen(8080, 'localhost')







//server.listen(8080, 'localhost')