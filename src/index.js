addEventListener('load', ()=>{
  window.overVue = new Vue({
    el: '#app',
    computed: {
      getCurrentSubMenu() {
        const menu = this.$data.topnav.options.find(e => {
          return e.menuName === (this.$data.currentSubMenu || 'one');
        })
        return menu.nav.options;
      }
    },
    data: {
      currentSubMenu: undefined,
      siteName: 'overvue',
      topnav: {
        options: [
          {
            menuName: 'one',
            nav: {
              options: [
                'A',
                'B',
                'C'
              ]
            }
          },
          {
            menuName: 'two',
            nav: {
              options: [
                'D',
                'E',
                'F'
              ]
            }
          },
          {
            menuName: 'three',
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
    },
    methods: {
      selectSubMenu(menuName) {
        this.$data.currentSubMenu = menuName;
      }
    }
  });
});
