var d = new Date();
arraytokens = [];

function config() {
	var inputteste = document.getElementsByTagName("input");
	for(i = 0; i < inputteste.length; i++) {
		if(inputteste[i].getAttribute("type") == "submit") {
			inputteste[i].addEventListener("click", function() {
				token = d.getTime();
				var meutoken = document.createElement('meutoken');
				meutoken.setAttribute('meutoken', token);
				this.append(meutoken);
				arraytokens.push(token);

			}, false);
		}
	}
	return true;
}

function config2() {
	var inputteste = document.getElementsByTagName("input");
	for(i = 0; i < inputteste.length; i++) {
		if(inputteste[i].getAttribute("type") == "submit") {
			inputteste[i].addEventListener("click", function() {
				this.disabled = true;
				this.form.submit();
				// window.location.reload();
				// alert("Formulário já enviado!!");	

			}, false);
		}
		else{}
	}
	return true;
}

function desabilitaDoubleSubmit() {
	var inputteste = document.getElementsByTagName("input");
	for(i = 0; i < inputteste.size; i++) {
		if(inputteste[i].getAttribute("type") == "submit") {
			for(i = 0; i < arraytokens.size(); i++){
				if(arraytokens.get(i) == this.meutoken.token){
					this.disabled = true;
					alert("Formulário já enviado!!");	
				}	
			}
		}
	}
	return true;
}

function desabilitabotao(botao) {
	botao.disabled = true;
	return true;
}


function testaQuantosForms(){
	var x = document.forms.length;
	for(i = 0; i < x; i++) {
		// alert(document.forms[i].submit);
	}
	if(x){ 
		// alert(x);
	}
	else {
		// alert("nao deu");
	}
}
