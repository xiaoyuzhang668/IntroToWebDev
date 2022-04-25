<!DOCTYPE html>
<html>
<title>Magic 8 Ball</title>
<meta charset="UTF-8">
<body>
   <h1>Magic 8 Ball</h1>
   <script>

   // Possible 8 Ball responses
   let responses = [ "Without a doubt", "Ask again later", "Don't count on it" ];

   // Display a randomly chosen response
   let randomNum = Math.floor(Math.random() * responses.length);
   document.writeln("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");

   </script>
</body>
</html>
