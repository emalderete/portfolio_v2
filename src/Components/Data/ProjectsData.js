export var projects = [{
    name : 'Behind The Code',
    shortDesc : 'Se trata de un proyecto evaluativo que he realizado en equipo con algunos compañeros de instituto.',
    fullDesc : 'Este proyecto fue diseñado como práctico integrador de mi cursado como desarrollador FullStack, se trata de uno de los primeros proyectos en los que trabajé en equipo. El sitio web consiste en un conjunto de páginas estáticas simulando las funciones de un sitio web completo, los conceptos practicados en este proyecto consistían en el afianzamiento del trabajo en equipo. Muchas de las funciones de este sitio web no son operativas.',
    image1Available : true,
    image2Available : true,
    image3Available : true,
    image4Available : true,
    image1 : 'https://i.ibb.co/yB1ppNg/project1-1.jpg',
    image2 : 'https://i.ibb.co/W5PcjQ5/project1-2.jpg',
    image3 : 'https://i.ibb.co/tp08g4t/project1-3.jpg',
    image4 : 'https://i.ibb.co/1RnVjQm/project1-4.jpg',
    videoAvailable : false,
    video : null,
    linkPage : 'https://behindthecode.netlify.app',
    linkGitAvailable : false,
    linkGit : null,
},
{
    name : 'Steam Rolling Code',
    shortDesc : 'Proyecto evaluativo realizado con compañeros de equipo como exámen final integrador. Basado en el sitio web Steam.',
    fullDesc : 'Este proyecto está inspirado en el sitio web oficial de Steam. El objetivo del mismo consistía en el trabajo en equipo aplicando los conocimientos incorporados sobre el lenguaje de programación JavaScript para construir servicios funcionales tales como el sistema de login / register o el sistema CRUD (Create, Read, Update, Delete). Este sitio web es falso y no-funcional, el úncio objetivo de su creación fue meramente educativo y no debe confundirse ni relacionarse con el sitio web oficial de Steam.',
    image1Available : true,
    image2Available : true,
    image3Available : true,
    image4Available : true,
    image1 : 'https://i.ibb.co/fHQgFpW/project2-1.jpg',
    image2 : 'https://i.ibb.co/7YZ97Yv/project2-2.jpg',
    image3 : 'https://i.ibb.co/JRb5Zzw/project2-3.jpg',
    image4 : 'https://i.ibb.co/Lz7FVN1/project2-4.jpg',
    videoAvailable : false,
    video : null,
    linkPage : 'https://steamrc.netlify.app',
    linkGitAvailable : true,
    linkGit : 'https://github.com/Claudamichici/steamrc'
},
{
    name : 'Curriculum Vitae 2022',
    shortDesc : 'Mi propio curriculum de experiencias laborales y estudios académicos pero en versión web.',
    fullDesc : 'Se trata de mi propio proyecto personal en el cual decidí realizar mi curriculum vitae en versión web. Tomé la decisión de hacerlo de esta forma para poder demostrar mis habilidades como desarrollador en la primera impresión del CV. Hacer la experiencia de analizar un CV de una forma un poco más interactiva con botones que muestran diferente información me pareció ingenioso como carta de presentación.',
    image1Available : true,
    image2Available : false,
    image3Available : false,
    image4Available : false,
    image1 : 'https://i.ibb.co/mRms22N/project3-1.jpg',
    image2 : null,
    image3 : null,
    image4 : null,
    videoAvailable : true,
    video : 'https://www.youtube.com/embed/4NKTZISyB3c',
    linkPage : 'https://curriculum-vitae2022.netlify.app/',
    linkGitAvailable : true,
    linkGit : 'https://github.com/emalderete/curriculum_vitae'
}];

 export class DataProject {
    constructor(
        data_name,
        data_shortDesc,
        data_fullDesc,
        data_image1Available,
        data_image2Available,
        data_image3Available,
        data_image4Available,
        data_image1,
        data_image2,
        data_image3,
        data_image4,
        data_videoAvailable,
        data_video,
        data_linkPage,
        data_linkGitAvailable,
        data_linkGit) {
        this.name = data_name;
        this.shortDesc = data_shortDesc;
        this.fullDesc = data_fullDesc;
        this.image1Available = data_image1Available;
        this.image2Available = data_image2Available;
        this.image3Available = data_image3Available;
        this.image4Available = data_image4Available;
        this.image1 = data_image1;
        this.image2 = data_image2;
        this.image3 = data_image3;
        this.image4 = data_image4;
        this.videoAvailable = data_videoAvailable;
        this.video = data_video;
        this.linkPage = data_linkPage;
        this.linkGitAvailable = data_linkGitAvailable;
        this.linkGit = data_linkGit;
    }
 }