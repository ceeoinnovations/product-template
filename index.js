
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';

Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTCITxeg4cEGAjKSdHMAYMkdGLeIJTGfu_U2MOERaPSR--y3JykZFF1lG8-qOtQQ4kuSMDZKZFIuTzk/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTPfjFZ4QZOyOBjFdTJZEEbLYKXJ3QSvCCfdq___s-UCg03lg64HWFwJ4uern-Qfa7tJBkheN1wpyhI/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSFxui62nCTuB5LupPgG7QUoPFYE2s25QqLqnGVwEjIDoUgE0WScXG1ENav6emGS_dyPeaNgqpGBZ0e/pub?output=csv"),
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




