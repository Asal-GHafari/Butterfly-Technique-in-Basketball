$(function(){
	$("div#bazikon2").click(function(){
		var newSrcr = $('div#top1 img').attr("src").replace("pic/download.jpg", "pic/download2.jpg");
		var newSrcl = $('div#top1 img').attr("src").replace("pic/download2.jpg", "pic/download.jpg");
		$("div#top1").animate({"left":"500px"},"slow",function(){
			 $('div#top1 img').attr("src", newSrcr).animate("fast",function(){
		     	$('div#bazikon2').animate({"top":"150px","left":"300px"},"slow",function(){
					$('div#top3').animate({"top":"-200px","left":"-300px"},"slow",function(){
						$('div#top3').animate({"top":"0px","left":"30px"},"slow",function(){
							$('div#bazikon2').animate({"top":"400px","left":"960px"},"slow",function(){
								$('div#top1').animate({"top":"0px","left":"-100px"},"slow",function(){
									 $('div#top1 img').attr("src", newSrcl).animate("fast",function(){
										$('div#bazikon3').animate({"top":"200px","left":"-400px"},"slow",function(){
											$('div#top2').animate({"top":"-170px","left":"250px"},"slow",function(){
												 $('div#top2 img').attr("src", newSrcr).animate("fast",function(){
													$('div#bazikon4').animate({"top":"0","left":"-150px"},"slow",function(){
														$('div#bazikon2').animate({"top":"0","left":"960px"},"slow",function(){
															$('div#top2').animate({"top":"10px","left":"0px"},"slow",function(){
																 $('div#top2 img').attr("src", newSrcl).animate("fast",function(){
																 	$('div#bazikon3').animate({"top":"300px","left":"-900px"},"slow");
																 });
															});
														});
													});
												});
											});
										});	 	
									 });
								});
							});
						});
					});
				});
			 });
		});
	});

});