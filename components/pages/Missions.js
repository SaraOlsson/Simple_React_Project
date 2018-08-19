class Missions extends Component {

    render() {
        return (

            <div className="row">

                <div className="main">

                    <h1> Utmaningar </h1>

                    <p style={{color: '#c1c1c1'}}> Saker att testa för att komma igång. <br/> Eller så gör du något helt eget.
                        Hör gärna av dig och visa ditt resultat! 
                    </p>

                    <h3> Enkelt </h3>
                    <p> - Byt bakgrundsbild </p>
                    <p> - Ändra header- och footertext </p>
                    <p> - Testa att visa/gömma den sidebar som finns på vissa sidor </p>

                    <h3> Lite svårare </h3>
                    <p> - Skapa en ny sida som man kan nå via menyn </p>
                    <p> - Skapa en reactkomponent som består av en div med field.png som bakgrund </p>
                    <p> - Låt komponenten ta emot en prop med namnet 'animal', </p>
                    <p> - Läs in rätt bild (t ex ugglan om this.props.animal == "owl" ) så att djuret hamnar på gräsplätten  </p>
                    <p> - Skapa en eller flera knappar på sidan som vid ett klick byter djur  </p>
                    <p> - Lös detta med att sidebar inte går hela vägen ner, hehe.. </p>

                    <h3> Svårt </h3>
                    <p> (hör av dig så ska jag komma på något klurigt) </p>

                </div>

            </div>
    
        );
    }
}