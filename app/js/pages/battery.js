$("#autonomyButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-top: 37px;">\
	\
	<div class="input-field col s4">\
			<input id="capacityValue" type="text" class="validate"><label for="capacityValue" class="active">Capacité de la batterie (mAh)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="systemConsumptionValue" type="text" class="validate"><label for="systemConsumptionValue" class="active">Consommation du système (mA)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="resultValue" type="text" class="validate" disabled><label for="resultValue" class="active">Heures d\'autonomie</label>\
	</div>\
	\
	<a class="menuButton" id="computeButton" style="margin-top: 37px;">Calculer</a></div>');

	$("#computeButton").on( "click", function() {

		if($("#capacityValue").val()!=null && $("#systemConsumptionValue").val()){

			$("#resultValue").val(($("#capacityValue").val() / $("#systemConsumptionValue").val()).toFixed(2));

		}

	});

});

$("#batteryStateButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-top: 37px;">\
	\
	<div class="input-field col s3">\
    	<select class="browser-default" id="elementsValue" name="elementsValue">\
      		<option value="" disabled selected>Nombre d\'éléments</option>\
      		<option value="1">1 Élément</option>\
      		<option value="2">2 Éléments</option>\
      		<option value="3">3 Éléments</option>\
      		<option value="4">4 Éléments</option>\
      		<option value="5">5 Éléments</option>\
    	</select>\
    </div>\
	<div class="input-field col s6">\
			<input id="batteryVoltageValue" type="text" class="validate"><label for="batteryVoltageValue" class="active">Tension mesuré au borne de la batterie (en V)</label>\
	</div>\
	<a class="menuButton" id="computeButton" style="margin-top: 12px;">Afficher l\'état</a><br/><br/><div class="state"></div></div>');

	$("#computeButton").on( "click", function() {

		var elementsSelected = document.getElementById('elementsValue').selectedIndex;  
		var elements  = document.getElementById('elementsValue').options[elementsSelected].value;

		var batteryVoltage = $("#batteryVoltageValue").val();

		if(batteryVoltage!=null && elements!=null){

			if(elements==1){

				if(batteryVoltage<=3.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">0% : Attention la batterie est vide !</p>');

				}else if(batteryVoltage<=3.30){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">5% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=3.60){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">10% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=3.70){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">20% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=3.75){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">30% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=3.79){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">40%</p>');

				}else if(batteryVoltage<=3.83){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">50% : La batterie est à la moitié de sa capacité</p>');

				}else if(batteryVoltage<=3.87){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">60%</p>');

				}else if(batteryVoltage<=3.92){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">70%</p>');

				}else if(batteryVoltage<=3.97){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">80%</p>');

				}else if(batteryVoltage<=4.10){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">90%</p>');

				}else if(batteryVoltage>=4.20){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">100% : La batterie est chargé au maximum</p>');

				}

			}else if(elements==2){

				if(batteryVoltage<=6.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">0% : Attention la batterie est vide !</p>');

				}else if(batteryVoltage<=6.60){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">5% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=7.20){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">10% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=7.40){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">20% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=7.50){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">30% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=7.58){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">40%</p>');

				}else if(batteryVoltage<=7.66){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">50% : La batterie est à la moitié de sa capacité</p>');

				}else if(batteryVoltage<=7.74){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">60%</p>');

				}else if(batteryVoltage<=7.84){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">70%</p>');

				}else if(batteryVoltage<=7.94){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">80%</p>');

				}else if(batteryVoltage<=8.20){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">90%</p>');

				}else if(batteryVoltage>=8.40){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">100% : La batterie est chargé au maximum</p>');

				}

			}else if(elements==3){

				if(batteryVoltage<=9.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">0% : Attention la batterie est vide !</p>');

				}else if(batteryVoltage<=9.90){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">5% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=10.80){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">10% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=11.10){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">20% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=11.25){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">30% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=11.37){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">40%</p>');

				}else if(batteryVoltage<=11.49){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">50% : La batterie est à la moitié de sa capacité</p>');

				}else if(batteryVoltage<=11.61){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">60%</p>');

				}else if(batteryVoltage<=11.76){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">70%</p>');

				}else if(batteryVoltage<=11.91){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">80%</p>');

				}else if(batteryVoltage<=12.30){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">90%</p>');

				}else if(batteryVoltage>=12.60){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">100% : La batterie est chargé au maximum</p>');

				}

			}else if(elements==4){

				if(batteryVoltage<=12.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">0% : Attention la batterie est vide !</p>');

				}else if(batteryVoltage<=13.20){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">5% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=14.40){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">10% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=14.80){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">20% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=15.00){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">30% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=15.16){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">40%</p>');

				}else if(batteryVoltage<=15.32){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">50% : La batterie est à la moitié de sa capacité</p>');

				}else if(batteryVoltage<=15.48){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">60%</p>');

				}else if(batteryVoltage<=15.68){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">70%</p>');

				}else if(batteryVoltage<=15.88){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">80%</p>'); 

				}else if(batteryVoltage<=16.40){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">90%</p>');

				}else if(batteryVoltage>=16.80){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">100% : La batterie est chargé au maximum</p>');

				}


			}else if(elements==5){

				if(batteryVoltage<=15.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">0% : Attention la batterie est vide !</p>');

				}else if(batteryVoltage<=16.50){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">5% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=18.00){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">10% : Il faut recharger la batterie au plus vite !</p>');

				}else if(batteryVoltage<=18.50){

					$(".state").empty();
					$(".state").append('<p style="color: #D91E18;">20% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=18.75){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">30% : La batterie commence à se vider progressivement !</p>');

				}else if(batteryVoltage<=18.95){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">40%</p>');

				}else if(batteryVoltage<=19.15){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">50% : La batterie est à la moitié de sa capacité</p>'); 

				}else if(batteryVoltage<=19.35){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">60%</p>');

				}else if(batteryVoltage<=19.60){

					$(".state").empty();
					$(".state").append('<p style="color: #EB9532;">70%</p>');

				}else if(batteryVoltage<=19.85){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">80%</p>'); 

				}else if(batteryVoltage<=20.50){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">90%</p>'); 

				}else if(batteryVoltage>=21.00){

					$(".state").empty();
					$(".state").append('<p style="color: #00B16A;">100% : La batterie est chargé au maximum</p>');

				}


			}

		}

	})

});

$("#chargingTimeButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<p style="color: #D91E18;">Attention : On suppose dans ces calculs que la batterie est totalement déchargée ! </p>\
	<div class="row" style="margin-top: 37px;">\
	\
	<div class="input-field col s4">\
			<input id="capacityValue" type="text" class="validate"><label for="capacityValue" class="active">Capacité de la batterie (mAh)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="chargingCurrentValue" type="text" class="validate"><label for="chargingCurrentValue" class="active">Courant de charge (mA)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="resultValue" type="text" class="validate" disabled><label for="resultValue" class="active">Temps de charge (en Heures)</label>\
	</div>\
	\
	<a class="menuButton" id="computeButton" style="margin-top: 37px;">Calculer</a></div>');

	$("#computeButton").on( "click", function() {

		if($("#capacityValue").val()!=null && $("#chargingCurrentValue").val()){

			$("#resultValue").val(($("#capacityValue").val() / $("#chargingCurrentValue").val()).toFixed(2) * 1.4);

		}

	});

});