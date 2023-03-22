<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css">
    <title>CyberConseil</title>
</head>
<body>
    <main>
        <div class="imageContact">
            <img class="imgContact" src="assets/Contact.png" alt="contact">
        </div>
        <div class="formulaireContact">
            <div class="titreContact">
                <h1>Contact</h1>
            </div>    
            <form action="accueil.php" method="post" novalidate="novalidate" data-status="init">
            <label> Votre nom (obligatoire)<br>
                <input type="text" name="your-name" aria-required="true" aria-invalid="false"></label>
            <label> Votre email (obligatoire)<br>
                <span ><input type="email" name="your-email" aria-required="true" aria-invalid="false"></label>
            <label> Objet<br>
                <input type="text" name="your-subject" aria-invalid="false"></label>
            <label> Votre message<br>
                <textarea name="your-message" cols="40" rows="10" aria-invalid="false"></textarea></label>
            <input class="boutonEnvoyer" type="submit" value="Envoyer">
            </form>
        </div>
    </main>
</body>
</html>
