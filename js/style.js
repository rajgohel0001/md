new mdc.textField.MDCTextField.attachTo(document.querySelector('.username'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.firstname'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.lastname'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.password1'));


const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));

$('#signin').on('click',function(event){
	dialog.open();
});

$('#calcelbtn').on('click',function(event){
	dialog.close();
});

document.querySelector('.pure-form').addEventListener('submit', function (e) {

	var nameInput = document.getElementById('username').value;
	var passwordInput = document.getElementById('password').value;

	var data={
		usrname:nameInput,
		password:passwordInput
	}
	e.preventDefault();

	console.log(data);       
});

const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.registerDialog'));

$('#register').on('click',function(event){
	dialog2.open();
});

$('#calcelbtn').on('click',function(event){
	dialog2.close();
});

document.querySelector('.register-form').addEventListener('submit', function (e) {

	var first_name = document.getElementById('fnm').value;
	var last_name = document.getElementById('lnm').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password1').value;

	var data={
		firstname:first_name,
		lastname:last_name,
		email:email,
		password:password
	}
	e.preventDefault();

	console.log(data);       
});