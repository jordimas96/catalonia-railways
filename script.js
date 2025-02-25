$(document).ready(function () {

    function intervalSegon() {

        updateRellotge();

        setTimeout(() => intervalSegon(), 1000 - (new Date()).getMilliseconds());
    }
    function intervalMinut() {

        updateMissatges();

        setTimeout(() => intervalMinut(), (60 - (new Date()).getSeconds()) * 1000);
    }

    intervalSegon();
    intervalMinut();







    function updateMissatges() {
        let hora = new Date();

        let horaStr = (hora).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });


        mostrarMissatge(missatges[horaStr] || "");


    };

    function mostrarMissatge(missatge) {

        console.log(missatge);
        
        $(".missatge").html(missatge);

        dir(missatge);
    }


    function dir(missatge) {
        const utterance = new SpeechSynthesisUtterance(missatge);
        utterance.lang = "ca-ES";
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }











    function updateRellotge() {
        let data = new Date();

        $(".dia").html(data.toLocaleDateString('ca-ES',
            { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
        ));
        $(".hora").html(data.toLocaleTimeString());
    }

});
