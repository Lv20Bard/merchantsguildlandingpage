



$(document).ready(function(){
	

	var windowHeight = $(window).height();		

	if(windowHeight < 826){
		$("#wrapper").css("height", "185%");
	}

	if(windowHeight > 826){
		$("#wrapper").css("height", "160%");
	}


	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyDpTbuERk-tzFMBuGO3eRIFHG_uFQLtWIo",
	authDomain: "merchants-guild-launch-page.firebaseapp.com",
	databaseURL: "https://merchants-guild-launch-page.firebaseio.com",
	storageBucket: "merchants-guild-launch-page.appspot.com",
	messagingSenderId: "419989421443"
	};
	firebase.initializeApp(config);

	var database = firebase.database();
	var mailingListRef = database.ref('/mailingList');

	var userType = "seller";

	$('#optionSeller').click(function(){
		userType = "seller";
	});

	$('#optionBuyer').click(function(){
		userType = "buyer"
	});

	$('#optionBoth').click(function(){
		userType = "both"
	});

	$('#sub-btn').click(function(e){

		if( $('#email-text-line').val() != ""){
			var email = $('#email-text-line').val();


			var user = {
				email: email,
				usertype: userType

			}

			mailingListRef.push(user);

			$('#email-text-line').val("");
			alert("Thank you very much");
		}
	});



	//Rezise header
	$(window).on("scroll touchmove", function () {
		$('#header').toggleClass('smaller', $(document).scrollTop() > 0);
		$('#brand').toggleClass('smaller', $(document).scrollTop() > 0);
	});


	$(window).resize(function(){
		var wrapperHeight = $("#wrapper").height();
		var windowHeight = $(window).height();
		console.log(wrapperHeight);
		console.log(windowHeight);

		if(windowHeight < 826){
			$("#wrapper").css("height", "185%");
		}


		else if(windowHeight => 826){
			$("#wrapper").css("height", "160%");
		}


	});
	

});