$(document).on('pagecreate', '#accountPost', function()
		{//alert("connect success");
		
			$("#submit_post").on('click',
				function() 
				{//alert("ccc");
					var URLs="bbc";
				  
					var post_userid=$("#post_userid_textbox").val();
					var post_pwdid=$("#post_password_textbox").val();
					var post_emailid=$("#post_email_textbox").val();
					var myData = "post_usid="+ post_userid + "&post_pwid=" + post_pwdid + "&post_elid=" + post_emailid; 
					$.ajax(
						{
							url: URLs,
							data: myData,
							type:"POST",
							dataType:'text',
							success: function(msg)
							{alert(msg);
								if (msg=>1)
								{
									alert("Account post. ");
								}else{
									alert('FAILED');
								}
							},
							error:function(xhr, ajaxOptions, thrownError, msg)
							{
								alert(xhr.status);
								alert(thrownError);
								location.reload();
							}
						}
					);
				}
			);
		}
	).on('pagecreate','#accountGet', function()
		{
		$(".message-box").hide();
		$("#submit_get").click(
				function()
				{
					var URLs="bbc";
				  
					var get_userid=$("#get_userid_textbox").val();
					var get_pwdid=$("#get_password_textbox").val();
					//var get_emailid=$("#get_email_textbox").val();
					var myData = "get_usid="+ get_userid + "&get_pwid=" + get_pwdid; 

					$.ajax(
						{
							//async: false,
							url: URLs,
							data: myData,
							type:"GET",
							dataType:'text',
							success: function(msg)
							{
								if(msg=>1)
								{
									var obj =$.parseJSON(msg);
									var loginName =obj.login;
									localStorage.setItem("loginName", loginName);
									//window.location.replace("Login.html");
									$('#get_userid_textbox').val('');
									$('#get_password_textbox').val('');
									
									var msg_array = jQuery.parseJSON(msg);
									//alert("id is "+msg_array.id);
									//alert(msg);
									$(".message-box").show().html("login success as "+loginName);
								}else{
									$(".message-box").show().html("Please insert correct username and password.");
									//alert("error");
								}
							},
							error:function(xhr, ajaxOptions, thrownError)
							{
								alert(xhr.status);
								alert(thrownError);
								location.reload();
							}
						}
					);
				}
			);
		}
	).on('pagecreate','#accountPut', function()
			{
			$(".message-box").hide();
			$("#submit_put").click(
				function()
				{
					//alert("text");
					var URLs="bbc";
					
					var put_userid=$("#put_userid_textbox").val();
					var put_old_pwdid=$("#put_old_password_textbox").val();
					var put_new_pwdid=$("#put_new_password_textbox").val();

					var myData = "put_usid="+ put_userid + "&put_old_pwid=" + put_old_pwdid + "&put_new_pwid=" + put_new_pwdid;// + "&put_elid=" + put_emailid; 
					//put_usid=jjj&put_old_pwid=111&put_new_pwid=222
					$.ajax(
						{
							//async: false,
							url: URLs,
							data: myData,
							type:"PUT",
							//AA
							dataType:'text',
							success: function(msg)
							{
								if(msg=>1)
								{
									var msg_array = jQuery.parseJSON(msg);
									//alert("id is "+msg_array.id);
									//alert(msg);
									$(".message-box").show().html("Change Password success");
								}else{
									$(".message-box").show().html("Please insert correct username and password.");
									//alert("error");
								}
							},
							error:function(xhr, ajaxOptions, thrownError)
							{
								alert(xhr.status);
								alert(thrownError);
								location.reload();
							}
						}
					);
				}
			);
		}
		).on('pagecreate','#accountDel', function()
			{
			$(".message-box").hide();
			$("#submit_del").click(
				function()
				{
					//alert("text");
					var URLs="bbc";
					
					var del_userid=$("#del_userid_textbox").val();
					var del_pwdid=$("#del_password_textbox").val();

					var myData = "del_usid="+ del_userid + "&del_pwid=" + del_pwdid;
					$.ajax(
						{
							//async: false,
							url: URLs,
							data: myData,
							type:"DELETE",
							//AA
							dataType:'text',
							success: function(msg)
							{
								if(msg=>1)
								{

									var msg_array = jQuery.parseJSON(msg);
									//alert("id is "+msg_array.id);
									//alert(msg);
									$(".message-box").show().html("Del success");
								}else{
									$(".message-box").show().html("Please insert correct username and password.");
									//alert("error");
								}
							},
							error:function(xhr, ajaxOptions, thrownError)
							{
								alert(xhr.status);
								alert(thrownError);
								location.reload();
							}
						}
					);
				}
			);
		}
	/*.on('pagecreate','#accountDel', function()
		{
			$(".message-box").hide();
			$("#submit_del").click(
				function()
				//{alert("test");
						var URLs="bbc";
						  
						var del_userid=$("#del_userid_textbox").val();
						var del_pwdid=$("#del_password_textbox").val();
						var myData = "del_usid="+ del_userid + "&del_pwid=" + del_pwdid;

						$.ajax(
						{
							//async: false,
							url: URLs,
							data: myData,
							type:"DELETE",
							dataType:'text',
							success: function(msg)
							{
								if(msg==1)
								{
									var msg_array = jQuery.parseJSON(msg);
									//alert("id is "+msg_array.id);
									//alert(msg);
									$(".message-box").show().html("Del success");
								}else{
									$(".message-box").show().html("Please insert correct username and password.");
									//alert("error");
								}
							},
							error:function(xhr, ajaxOptions, thrownError)
							{
								alert(xhr.status);
								alert(thrownError);
								location.reload();
							}
						}
					);
				}
			);
		}*/
	);