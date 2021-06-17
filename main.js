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
    addLike(project)
  {

      const projectTitle = project.text;
      if (!localStorage.getItem(projectTitle)) 
      {
      project.likes++;
      localStorage.setItem(projectTitle, true);
      }
  },
    removeLike(project)
  {
      const projectTitle = project.text;
      console.log(project, "dislike");
      if(project.likes > 0 && Boolean(localStorage.getItem(projectTitle))) { 
    project.likes--;
    localStorage.removeItem(projectTitle);  
    }
   } 
  },
  mounted() {
    this.projects.forEach(project => {
      if(localStorage.getItem(project.text) !== null)
    { project.likes = 1;
    }
  });
  }
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);