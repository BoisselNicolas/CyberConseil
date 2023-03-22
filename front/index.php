<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <!-- multistep form -->
    <form id="msform">
        <!-- progressbar -->
        <ul id="progressbar">
            <li class="active">Account Setup</li>
            <li>Social Profiles</li>
            <li>Personal Details</li>
            <li>En plus</li>
        </ul>
        <!-- fieldsets -->
        <fieldset>
            <h2 class="fs-title">Create your account</h2>
            <h3 class="fs-subtitle">This is step 1</h3>
            <input type="button" name="next" class="next action-button" value="A" />
            <input type="button" name="next" class="next action-button" value="B" />
			<input type="button" name="previous" class="previous action-button" value="C" />
            <input type="button" name="next" class="next action-button" value="D" />
        </fieldset>
        <fieldset>
            <h2 class="fs-title">Social Profiles</h2>
            <h3 class="fs-subtitle">Your presence on the social network</h3>
            <input type="button" name="previous" class="previous action-button" value="Oui" />
            <input type="button" name="next" class="next action-button" value="Non" />
        </fieldset>
        <fieldset>
            <h2 class="fs-title">Personal Details</h2>
            <h3 class="fs-subtitle">We will never sell it</h3>
            <input type="button" name="previous" class="previous action-button" value="Oui" />
            <input type="button" name="next" class="next action-button" value="Non" />
            <a href="https://twitter.com/GoktepeAtakan" class="submit action-button" target="_top">Submit</a>
        </fieldset>
    </form>
</html>

<style>
 <?php require 'css/index.css' ?>
</style>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"> </script>

<script src="js/index.js"></script>


