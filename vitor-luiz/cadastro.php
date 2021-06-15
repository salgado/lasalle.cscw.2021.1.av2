
 <?php
$host="localhost";
$user="root";
$pass="";
$banco="meadota";
$conexao=mysqli_connect($host,$user,$pass) or die(mysql_error());
mysqli_select_db($conexao,$banco)or die(mysql_error());

$nome=$_POST['nome'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$idade=$_POST['idade'];
$raca=$_POST['raca'];
$local=$_POST['local'];
$descricao=$_POST['descricao'];
$link=$_POST['link'];


$sql=mysqli_query($conexao, "insert into usuarios(id,nome,phone,email,idade,raca,local,descricao,link)values('','$nome','$phone','$email','$idade','$raca','$local','$descricao','link')");
header("Location:http://localhost/MeAdota/cadastro.html",true,301);
 ?>
