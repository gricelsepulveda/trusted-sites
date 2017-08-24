 $(document).ready(function(){
    //ABRIR LA ALERTA
 	function openTrusted(){
 		$('.contenedor-alert-trusted').fadeIn("slow");
 	}
    //CERRAR LA ALERTA
 	function closeTrusted(){
 		$('.contenedor-alert-trusted').fadeOut("fast");
 	}
    //ABRIR MODAL
 	function openTrustedModal(){
 		$('.contenedor-modal-trusted').fadeIn("slow");
 	}
    //CERRAR MODAL
    function closeTrustedModal(){
    	$('.contenedor-modal-trusted').fadeOut("fast");
    }
    //FUNCION MOSTRAR LOS STAGE DEL MODAL (1)
    function trustedStage1(){
    	$('.border-line').addClass("display-none");
    	$('.border-line-1').removeClass("display-none");
    	$('.span-wizard-trusted-line').addClass("desactivado");
    	$('.line-1').removeClass("desactivado");
    	$('.wrapper-flex-modal-trusted').css({"margin-left": "0%"});
    }
    //FUNCION MOSTRAR LOS STAGE DEL MODAL (2)
    function trustedStage2(){
    	$('.border-line').addClass("display-none");
    	$('.border-line-2').removeClass("display-none");
    	$('.span-wizard-trusted-line').addClass("desactivado");
    	$('.line-2').removeClass("desactivado");
    	$('.wrapper-flex-modal-trusted').css({"margin-left": "-100%"});
    }
    //FUNCION MOSTRAR LOS STAGE DEL MODAL (3)
    function trustedStage3(){
    	$('.border-line').addClass("display-none");
    	$('.border-line-3').removeClass("display-none");
    	$('.span-wizard-trusted-line').addClass("desactivado");
    	$('.line-3').removeClass("desactivado");
    	$('.wrapper-flex-modal-trusted').css({"margin-left": "-200%"});
    }
    //FUNCION MOSTRAR LOS STAGE DEL MODAL (4)
    function trustedStage4(){
    	$('.border-line').addClass("display-none");
    	$('.border-line-4').removeClass("display-none");
    	$('.span-wizard-trusted-line').addClass("desactivado");
    	$('.line-4').removeClass("desactivado");
    	$('.wrapper-flex-modal-trusted').css({"margin-left": "-300%"});
    }

});