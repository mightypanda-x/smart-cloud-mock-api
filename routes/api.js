const express = require('express');
const router = express.Router();
const _ = require('lodash');

/* GET users listing. */
router.get('/dataPie', function(req, res) {
  const jsonData = [{
    key: 'Germany',
    value: _.random(1, 100, false)
  }, {
    key: 'Russia',
    value: _.random(1, 100, false)
  }, {
    key: 'USA',
    value: _.random(1, 100, false)
  }, {
    key: 'Europe',
    value: _.random(1, 100, false)
  }];

  setTimeout(() => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(jsonData);
  }, 200);
});

router.get('/smart-start/union', function(req, res) {
  const jsonData = [{
    key: 'Union',
    value: _.random(200, 300, false)
  }, {
    key: 'Non-Union',
    value: _.random(10, 50, false)
  }, {
    key: 'Non-Affiliate',
    value: _.random(1, 100, false)
  }];

  setTimeout(() => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(jsonData);
  }, 200);
});

router.get('/smart-start/user/widgetPref', function(req, res) {
    const jsonData = [
        {
            id: 'widget1',
            componentId: 'data-pie',
            product: 'SmartStart',
            title: 'Union Breakdown',
            apiUrl: 'https://smart-cloud-mock-api.herokuapp.com/api/smart-start/union',
            actions: [
                {
                    label: 'Union Crew',
                    link: 'http://google.com'
                },
                {
                    label: 'Non-Union Crew',
                    link: 'http://facebook.com'
                }
            ],
            doughnut: false,
            semi: false
        },
        {
            id: 'widget2',
            componentId: 'data-pie',
            product: 'SmartTime',
            title: 'Ethnicity',
            apiUrl: 'https://smart-cloud-mock-api.herokuapp.com/api/dataPie',
            actions: [
                {
                    label: 'Estimate',
                    link: 'http://google.com'
                },
                {
                    label: 'Analyze',
                    link: 'http://facebook.com'
                }
            ],
            doughnut: true,
            semi: false
        },
        {
            id: 'widget3',
            componentId: 'data-pie',
            product: 'SmartStart',
            title: 'Exception Crew',
            apiUrl: 'https://smart-cloud-mock-api.herokuapp.com/api/smart-start/exception-crew',
            actions: [
                {
                    label: 'Estimate',
                    link: 'http://google.com'
                },
                {
                    label: 'Analyze',
                    link: 'http://facebook.com'
                }
            ],
            chartType: 'horizontalBar',
            doughnut: false,
            semi: false
        }
    ];

    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.send(jsonData);
    }, 200);
});

router.get('/smart-start/exception-crew', function(req, res) {
    const jsonData = [{
        key: 'Loanout',
        value: _.random(50, 150, false)
    }, {
        key: 'Conflict Of Interest',
        value: _.random(10, 25, false)
    }, {
        key: 'Allowances & Rentals',
        value: _.random(1, 100, false)
    }, {
        key: 'I-9 Overdue',
        value: _.random(25, 50, false)
    }];

    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.send(jsonData);
    }, 200);
});

module.exports = router;
