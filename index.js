
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';

Promise.all([
      d3.csv("about-csv-link"),
      d3.csv("themes-csv-link"),
      d3.csv("projects-csv-link"),
      ])
      .then(([about, themes, projects]) => {
        const data = {about, themes, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
        
        lightGallery(document.getElementById('lightgallery'), {
            plugins: [lgZoom, lgThumbnail, lgVideo],
            speed: 500,
            thumbnail: true
        });
        hljs.highlightAll();
        // apply HighlightJS
        let pres = document.querySelectorAll("pre>code");
        for (let i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
        }
        window.highlightJsBadge();
    } 
});




