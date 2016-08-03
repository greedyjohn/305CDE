<?php
$hostname = "127.0.0.1";
$username = "root";
$password ="123456";
$connection = mysql_connect($hostname, $username, $password) or die("Could not open connection to database");

mysql_select_db("classname", $connection) or die("Could not select database");

$method=strtolower($_SERVER["REQUEST_METHOD"]);
//mean app.js big to php small letter
//$method='put';
	switch($method){
		case'post':
			$username=$_POST['post_usid'];
			$pwd=$_POST['post_pwid'];
			$email=$_POST['post_elid'];
			if($username==""||$pwd==""||$email=="")
			{
				$result="Please enter Username or Password or Email ";
				return;
			}else{
				$result = mysql_query("INSERT INTO classfive(login,password, email) VALUES ('$username','$pwd','$email')") or die("Could not issue MySQL query");
			}
			break;

		case'get':
			$username=$_GET['get_usid'];
			$pwd=$_GET['get_pwid'];

			$sql_result = mysql_query("SELECT id, login, password FROM classfive WHERE login = '$username' and password='$pwd'") or die("Could not issue MySQL query");
			//$sql_result = mysql_query("SELECT id, login, password, email FROM classfive WHERE login = '$username'") or die("Could not issue MySQL query");
			while($sql_result_row = mysql_fetch_assoc($sql_result))
			{
				if ($sql_result_row['login']!=""){
					$result =json_encode($sql_result_row);
				}
				else{
					$result =0;
				}
			}

			break;
			
		case'put':
		//aa
			parse_str(file_get_contents("php://input"),$put_vars);

			$username=$put_vars['put_usid'];
			$old_pwd=$put_vars['put_old_pwid'];
			$new_pwd=$put_vars['put_new_pwid'];
						
			$sql_result = mysql_query("SELECT login, password from classfive WHERE login='$username' and password='$old_pwd'") or die("Could not issue MySQL query");
			
			$select_rows = mysql_num_rows($sql_result);

			if($select_rows>0)
			{
				$result = mysql_query("update classfive set password='$new_pwd' where login='$username'");
				
			}else{
				$result = 0;
			}
			
			break;

		case'delete':
			parse_str(file_get_contents("php://input"),$del_vars);

			$username=$del_vars['del_usid'];
			$pwd=$del_vars['del_pwid'];
			
			$sql_result=mysql_query("SELECT * from classfive WHERE login='$username' and password='$pwd'") or die("Could not issue MySQL query");
			$sql_result_row = mysql_num_rows($sql_result);

			if($sql_result_row>0)
			{
				$result = mysql_query("delete from classfive where login='$username'");
				//$result = 1;
			}else{
				$result = 0;
			}

			break;
	};
	echo $result;
?>