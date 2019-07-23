
function check(form)
{

if(form.userid.value == "Adil Khan" && form.pwd.value == "Adil@1004")
{
	return true;
}
else
{
	alert("Incorrect Username or Password")
	return false;
}
}
