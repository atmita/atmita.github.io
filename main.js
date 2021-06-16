//vue js goes here

/*let dataObject = {


}*/


var app4 = new Vue({
  el: '#app-4',
  data: {
    name: "Omar Cruz",
    Title: "portafolio web",
    projects: [
      { likes: 1, text: 'Learn JavaScript', description: "proyecto web", language:["html", "css", "javascript"] },
      { likes: 2, text: 'Learn Vue', description: "proyecto ecommerce", language:["html", "css", "vue"] },
      { likes: 3, text: 'Build something awesome', description: "proyecto wordpress", language:["html", "css", "Php"] }
    ]
  },
  methods: {
    likeproject(index) {
      const project = this.projects[index];
      console.log("clicked", index);
      project.likes++;
    }

  }
})