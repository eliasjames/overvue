addEventListener('load', ()=>{
  const overVue = new Vue({
    el: '#app',
    data: {
      siteName: 'overvue',
      nav: {
        options: [
          {
            name: 'one',
            nav: {
              options: [
                'A',
                'B',
                'C'
              ]
            }
          },
          {
            name: 'two',
            nav: {
              options: [
                'D',
                'E',
                'F'
              ]
            }
          },
          {
            name: 'three',
            nav: {
              options: [
                'G',
                'H',
                'I'
              ]
            }
          }
        ]
      }
    }
  });
});
