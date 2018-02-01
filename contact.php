<?php	

	if(isset($_POST['senderEmail'])){
		
		$recipient="";
		$subject="R Sound Message";
		$sender=$_POST['sender'];
		$senderEmail=$_POST['senderEmail'];
		$message=$_POST['message'];
	
		$mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
		mail($recipient, $subject, $mailBody);
	}
?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="index.css">
		<title>R Sound Presents</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="script_contact.js"></script>
	</head>
	<body>
		<div id="header-wrapper" class="content-wrapper">
			<p class="nav-text" id="site-title">R SOUND PRESENTS</p>
			<p class="nav-text" id="contact-button"><a class="nav-link" href="#">Contact</a></p>
			<p class="nav-text" id="gallery-button"><a class="nav-link" href="gallery.html">Galleries</a></p>
			<p class="nav-text" id="perfs-button"><a class="nav-link" href="performers.html">Performers</a></p>
			<p class="nav-text" id="home-button"><a class="nav-link" href="index.html">Home</a></p>
		</div>
		<div class="content-wrapper" id="title-wrapper">
			<h1 class="section-header" id="title-header">Want to Perform?</h1>
			<p class="section-text" id="title-text">Contact us below!</p>
		</div>
		<div class="content-wrapper" id="contact-boxes-wrapper">
			<div class="form-container">
				<form action="contact_action.php" method="post">
					<label class="inputlabel" for="sender">Name<br/></label>
					<input type="text" class="inputbox" id="name" name="sender" placeholder="Your name">
					<br/>
					<label class="inputlabel" for="senderEmail">E-Mail<br/></label>
					<input type="text" class="inputbox" id="mail" name="senderEmail" placeholder="you@somewhere.com">
					<br/>
					<label class="inputlabel" for="message">Message<br/></label>
					<textarea id="subject" name="message" placeholder="Your message"></textarea>
					<br/>
					<input type="submit" value="Submit">
				</form>
			</div>
			<div class="links-wrapper">
				<p class="contact-header">Email</p>
				<p class="contact-text">rsoundpresents@gmail.com</p>
				<br/>
				<p class="contact-header">Phone</p>
				<p class="contact-text">(316) 308 7551</p>
				<br/>
				<p class="contact-header">Social Media</p>
				<div class="rs-sm-buttons">
					<a href="https://www.facebook.com/RSOUNDPRESENTS/"><img class="rs-social" src="sm_facebook.png"></img></a>
					<a href="https://www.instagram.com/rsoundpresents/"><img class="rs-social" src="sm_insta.png"></img></a>
					<a href="https://m.youtube.com/channel/UCNRgmvqAxOq7wf5l2rJUMqA"><img class="rs-social" src="sm_youtube.png"></img></a>
				</div>
			</div>
		</div>
		<div class="content-wrapper" id="footer-wrapper">
			<p class="nav-text" id="copyright-statement">&copy Matt Madden 2018</p>
		</div>
	</body>
</html>