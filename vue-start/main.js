// vue doc = https://es.vuejs.org/v2/guide/index.html
// Fetch API = https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

let dataAPI = [
    {
        uid: "844fbd7b-45bf-418a-827f-0373ca67d63d",
        strain: "Diablo OG"
    }
]

var app = new Vue({
    el: '#app',
    data: {
        elements: dataAPI
    },
    methods: {  
        getData: function () {
            fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=30')
                .then(response => response.json())
                .then(data => { 
                    this.elements = data
                });
        }
    }
});