//Cada elementos de arreglo proyects representa un proyecto
/**
 * UNO
 * Espotifai
 * Picasso
 * Cliente - servidor progra II
 * Directorios - algoritmos
 * Servidores - algoritmos
 * 
 */

const proyects = [
    {
        title:"UNO",
        subTitle:"Aplicación Web",
        techs: [
            "Apache Server",
            "Análisis Diseño y Programación Orientada a Objetos",
            "Java Server Pages",
            "Java",
            "HTML, Javascript, CSS",
            "AJAX/jquery"
        ],
        sum:`El tradicional juego de UNO desarrollado, para dos personas.
        Mi papel en la construcción fue establecer la comunicación entre el cliente y el servidor asi como
        el procesamiento de los datos en el navegador y comportamiento visual de la aplicación.`,
        img:"UNO.png"
    },
    {
        title:"Reproductor de música",
        subTitle:"Aplicación Web",
        techs: [
            "Apache Server",
            "Java Server Pages",
            "Arquitectura Modelo-Vista-Controlador",
            "Linux Bash",
            "Python",
            "AJAX/jquery",
            "REST API",
            "Java",
            "HTML, Javascript, CSS"
        ],
        sum:`Servicio de streaming de música como una aplicación web donde los usuarios podían 
        bucar y reproducir las canciones disponibles en nuestro servidor y poder ver la letra
        obtenida de una API. Mi trabajo fue la construcción del Modelo el cual se encargaba de la administración de las pistas de audio en el servidor asi como garantizar su
        recuperación a petición de los usuarios, también fuí el responsable la obtención de la letra usando API y recuperación de texto de webs estáticas.`,
        img:"Music.png"
    },
    {
        title:"Picasso Draw",
        subTitle:"Aplicación de escritorio",
        techs: [
            "Python",
            "MariaDB",
            "Linux"
        ],
        sum:"El libro Data Structures and Algorithms with Python de Lee y Hubbard ofrece un programa de dibujo simple (una forma primitiva del conocido Paint) nuestro trabajo fue implementar un sistema de usuarios y almacenamiento de los mismo así como de los dibujos creados por estos. Mi participación fue la responsable actualizar y agregar los componentes Python encargados de la interacción entre el usuario y las nuevas funcionalidades agregadas.",
        img:"Picasso.png"
    },
    {
        title:"",
        subTitle:"",
        techs: [
            "",
            "",
            ""
        ],
        sum:""
    },
    {
        title:"",
        subTitle:"",
        techs: [
            "",
            "",
            ""
        ],
        sum:""
    },
    {
        title:"",
        subTitle:"",
        techs: [
            "",
            "",
            ""
        ],
        sum:""
    }
];



template = `<div class="carousel-item text-%COLORTEXT%">
<div class="card portfolio-item border border-dark" style="background-color:var(--%COLOR%)">
    <div class="row">
        <div class="col-md-8">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5>%TITLE%</h5>
                        <h6 class="text-muted">%SUBTITLE%</h6>
                        <p>
                            Tecnologías usadas
                        %TECH_LIST%
                        </p>
                        <p>
                            %SUM%
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <img src="%IMG%" class="card-img" alt="...">
        </div>
    </div>
</div>
</div>`

function createTechs(techs){
    result = ["<ul>"]
    techs.forEach((item) => {
        result.push(`<li>${item}</li>`)
    })
    result.push("</ul>")
    return result.join("");
}

function createProyects(){

    colors = ["first","second","fourth","fifth"]
    
    proyectsTags = []
    proyects.forEach((item) => {
        color = Math.floor(Math.random() * colors.length);

        finalTag = template.replace("%TITLE%",item["title"]).replace("%SUBTITLE%",item["subTitle"]).replace("%TECH_LIST%",createTechs(item["techs"])).replace("%SUM%",item["sum"]).replace("%IMG%",`Multimedia/proyects/${item["img"]}`).replace("%COLOR%",colors[color]);

        if(color == 0){
            finalTag = finalTag.replace("%COLORTEXT%","white");
        }

        proyectsTags.push(finalTag);
    })
    proyectsTags[0] = proyectsTags[0].replace("carousel-item", "carousel-item active")
    return proyectsTags.join("");
}

function insertProyects(){
    document.getElementById("carousel-inner").innerHTML = createProyects();
}

insertProyects();