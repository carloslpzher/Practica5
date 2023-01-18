function eligeArrayImg(tipo = "normal") { // Dependiendo del tipo de la página web, esta función devolverá las localizaciones de unas imagenes o de otras.

    // Breve explicación acerca de la opción "/shiny". Se trata de la imagen que se cambia cuando el ratón pasa por encima.
    let arr;
    if (tipo.toLowerCase() == "normal" || tipo.toLowerCase() == "normal/shiny") {

        // Utilizamos el propio tipo, que el usuario no puede cambiar de ninguna forma desde dentro de la página web.
        // De manera adicional, permitimos la reutilización de código mediante el uso de la propia variable como parte del vínculo.
        arr = [`./img/${tipo}/01.png`, `./img/${tipo}/02.png`, `./img/${tipo}/03.png`,
        `./img/${tipo}/04.png`, `./img/${tipo}/05.png`, `./img/${tipo}/06.png`,
        `./img/${tipo}/07.png`, `./img/${tipo}/08.png`, `./img/${tipo}/09.png`,
        `./img/${tipo}/10.png`, `./img/${tipo}/11.png`, `./img/${tipo}/12.png`];

    } else {

        arr = [`./img/${tipo}/01.png`, `./img/${tipo}/02.png`, `./img/${tipo}/03.png`,
        `./img/${tipo}/04.png`, `./img/${tipo}/05.png`, `./img/${tipo}/06.png`,
        `./img/${tipo}/07.png`];
    }
    return arr;
}

function eligeArrayEntry(tipo = "Normal") { // Utilizamos esta función como minibase de datos para almacenar los datos que queremos recoger

    let arr;
    if (tipo.toLowerCase() == "normal" || tipo.toLowerCase() == "normal/shiny") {

        arr = [

            "<b>Donphan</b><b>Escarlata: </b>Su dura piel podría resistir el choque contra un coche sin sufrir un rasguño. La lluvia, sin embargo, es su punto débil.\n" +
            "<b>Púrpura: </b>Por lo general se muestra tranquilo pero, si lo enfadan, se enrolla hasta hacerse una bola y embiste rodando.",

            "<b>Delibird</b><b>Escarlata: </b>Transporta comida durante todo el día. Según dicen, muchos desaparecidos han sobrevivido gracias a ella.\n" +
            "<b>Púrpura: </b>Siempre lleva comida consigo, vaya donde vaya. Si lo atacan, se la tirará a su adversario.",

            "<b>Jigglypuff</b><b>Escarlata: </b>Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.\n" +
            "<b>Púrpura: </b>Si se hincha para cantar una nana, cantará más tiempo y causará sopor en el público.",

            "<b>Hydreigon</b><b>Escarlata: </b>La cabeza central es la única dotada de cerebro. Si bien, posee un gran intelecto, la destrucción es el único pensamiento que le ocupa.\n" +
            "<b>Púrpura: </b>Se dice que su ferocidad se debe a que en el pasado sufrió el acoso constante de los humanos, que los consideraban la encarnación del mal.",

            "<b>Misdreavus</b><b>Escarlata: </b>Sorprende a la gente en mitad de la noche y acumula su miedo como energía.\n" +
            "<b>Pùrpura: </b>Le gusta morder y tirar del pelo de la gente desde atrás sin avisar, solo para ver su reacción.",

            "<b>Tyranitar</b><b>Escarlata: </b>Tiene tanta fuerza que puede cambiar el paisaje. Su naturaleza insolente le hace ser muy egoísta.\n" +
            "<b>Púrpura: </b>Su poder es tan descomunal que le basta un solo brazo para derribar montañas y provocar terremotos.",

            "<b>Magneton</b><b>Escarlata: </b>Tres Magnemite se enlazan mediante una intenssa fuerza magnética. Provoca un fuerte pitido en los oídos a quien se le acerque.\n" +
            "<b>Púrpura: </b>Están formados por Magnemite unidos. Se dice que aparecen en gran número cuando hay muchas manchas solares.",

            "<b>Hariyama</b><b>Escarlata: </b>Le encanta medir sus fuerzas. Es tan fuerte que puede detener un tren en marcha de un manotazo.\n" +
            "<b>Púrpura: </b>Para aumentar su fuerza, da un pisotón en el suelo. Puede lanzar un camión de 10T por los aires de un manotazo.\n",

            "<b>Amoonguss</b><b>Escarlata: </b>Las esporas tóxicas que libera son peligrosas, ya que allí donde caen acaban creciendo unas setas parecidas a los sombreros de los Amoonguss.\n" +
            "<b>Púrpura: </b>Intenta hacerse pasar por una Poké Ball, aunque se desconoce si logra engañar a los Pokémon.",

            "<b>Volcarona</b><b>Escarlata: </b>El calor que irradia le granjea pocas simpatías en tierras cálidas. Por el contrario, en las regiones más frías lo veneran como la encarnación del sol.\n" +
            "<b>Púrpura: </b>Esparce escamas flamígeras, más peligrosas por consumir tood el oxígeno a su alrededor por el intenso calor que desprenden.",

            "<b>Gallade y Gardevoir</b><b>Escarlata: </b>Cuando quiere proteger a alguien, extiende los codos como si fueran espadas y lucha con fiereza.\n" +
            "<b>Púrpura: </b>Si se siente muy unido a su Entrenador, utilizará todo su poder psíquico para protegerlo.",

            "<b>Salamence</b><b>Escarlata: </b>Feliz de haber desarrollado al fin sus alas y de poder volar por el cielo, calcina con sus llamas todos los campos que sobrevuela.\n" +
            "<b>Púrpura: </b>Si se enfada, no hay forma de calmarlo; lo destruye todo lanzando arañazos y llamas.",
        ];
    } else if (tipo.toLowerCase() == "pasado" || tipo.toLowerCase() == "pasado/shiny") {

        arr = [

            "<b>Colmilargo</b>" +
            "<b>Escarlata: </b>Testigos afirman haberlo visto recientemente. El nombre Colmilargo está tomado de una criatura mencionada en cierto libro." +
            "<b>Púrpura: </b>Su aspecto recuerda al de un extraño Pokémon de origen primitivo que apareció en un artículo de cierta revista esotérica.",

            "<b>Colagrito</b>" +
            "<b>Escarlata: </b>Solo se había avistado una vez en el pasado. Su aspecto se asemeja al de una misteriosa criatura descrita en cierto diario antiguo." +
            "<b>Púrpura: </b>Guarda similitud con el supuesto aspecto que, según una revista esotérica, tenía Jigglypuff hace mil millones de años.",

            "<b>Melenaleteo</b>" +
            "<b>Escarlata: </b>Sus rasgos distintivos encajan con la descripción de una criatura mencionada en cierto libro bajo el nombre de Melenaleteo." +
            "<b>Púrpura: </b>Sus rasgos distintivos se asemejan a los del espíritu de un reptil volador mencionado en una revista esotérica.",

            "<b>Pelarena</b>" +
            "<b>Escarlata: </b>Nunca se había capturado uno, ergo los datos al respecto escasean. Su descripción coincide con la de una criatura mencionada en cierto diario." +
            "<b>Púrpura: </b>Su aspecto recuerda ligeramente a un supuesto Magneton que ha vivido 10.000 años y cuya imagen se publicó en una revista esotérica.",

            "<b>Furioseta</b>" +
            "<b>Escarlata: </b>Es posible que se trate de la criatura que se menciona en cierto libro bajo el nombre de Furioseta." +
            "<b>Púrpura: </b>Guarda un leve parecido con un Pokémon mitad dinosaurio y mitad seta que apareció en un artículo de cierta revista de dudosa veracidad.",

            "<b>Reptalada</b>" +
            "<b>Escarlata: </b>Un misterioso Pokémon que presenta ciertas similitudes con Reptalada, una criatura descrita en un tomo antiguo." +
            "<b>Púrpura: </b>Guarda un ligero parecido con un supuesto antepasado de Volcarona publicado en cierta revista de dudosa veracidad.",

            "<b>Bramaluna</b>" +
            "<b>Escarlata: </b>Podría tratarse de la criatura que aparece bajo el nombre de Bramaluna en cierto diario repleto de incógnitas." +
            "<b>Púrpura: </b>Según un artículo publicado en cierta revista de dudosa veracidad, este Pokémon guarda relación con un fenómeno que tiene lugar en otra región."
        ];
    } else {

        arr = [

            "<b>Ferrodada</b>" +
            "<b>Escarlata: </b>Su aspecto recuerda al de un arma científica de origen extraterrestre que apareció en un artículo de una revista esotérica." +
            "<b>Púrpura: </b>Se han constatado avistamientos en los últimos años. Su aspecto se asemeja al de un misterioso objeto descrito en un diario antiguo.",

            "<b>Ferrosaco</b>" +
            "<b>Escarlata: </b>Tiene una forma similar a la del robot construido por una civilización antigua mencionado en cierto artículo de una revista esotérica." +
            "<b>Púrpura: </b>Su aspecto encaja con la descripción de un objeto mencionado en unos viejos escritos. Ha habido solo dos avistamientos hasta la fecha.",

            "<b>Ferrocuello</b>" +
            "<b>Escarlata: </b>Se asemeja a un Pokémon que apareció en una revista esotérica descrito como 'el fruto de un romance entre un Hydreigon y un robot'." +
            "<b>Púrpura: </b>Es posible que se trate de Ferrocuello, un objeto mencionado en unos viejos escritos.",

            "<b>Ferropúas</b>" +
            "<b>Escarlata: </b>Guarda similitudes con el supuesto aspecto que, según cierta revista de dudosa veracidad, tendrá Tyranitar dentro de mil millones de años." +
            "<b>Púrpura: </b>Algunos de sus rasgos distintivos coinciden con los de Ferropúas, un objeto que aparece mencionado en cierto diario.",

            "<b>Ferropalmas</b>" +
            "<b>Escarlata: </b>Guarda parecido con un atleta, supuestamente transformado en cíborg, que apareció entre las exclusivas de una revista esotérica." +
            "<b>Púrpura: </b>Este Pokémon comparte muchas características con Ferropalmas, un objeto descrito en cierto diario.",

            "<b>Ferropolilla</b>" +
            "<b>Escarlata: </b>Se asemeja a un extraño objeto descrito en una revista esotérica como 'un ovni enviado con el objetivo de espiar a la raza humana'." +
            "<b>Púrpura: </b>Nunca se había capturado uno, ergo los datos son escasos. Su descripción coincide con la de un objeto mencionado en unos viejos escritos.",

            "<b>Ferropaladín</b>" +
            "<b>Escarlata: </b>Comparte varios rasgos con el invento de un científico loco que apareció en un artículo de una revista esotérica." +
            "<b>Púrpura: </b>Podría tratarse del objeto que se menciona con el nombre de Ferropaladín en cierto diario."
        ];
    }

    return arr;
}

export {eligeArrayEntry, eligeArrayImg};