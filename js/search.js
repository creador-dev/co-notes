$(document).ready(function(){$('#category').change(function(){var cid=$(this).find('option:selected').attr('value');if(cid=="school"){$('#show_sub').show();$('#subject').niceSelect('update');}else{$('#show_sub').hide();$('#subject').niceSelect('update');}$.ajax({type:"POST",url:"parts/search-parts/search-category-select.php",data:{cid:cid},success:function(data){var codes=jQuery.parseJSON(data);$("#level").prop('disabled',false);$("#subject").prop('disabled',true);$("#level").empty();$('#level').append($('<option selected disabled>Level</option>'));$.each(codes,function(index,obj){$('#level').append($('<option value="'+obj.c_name+'">'+obj.c_name+'</option>'));});$('select').niceSelect('update');},});});$('#level').change(function(){var cid=$("#category").find('option:selected').attr('value');if(cid=="school"){var lid=$(this).find('option:selected').attr('value');$.ajax({type:"POST",url:"parts/search-parts/search-category-select.php",data:{lid:lid},success:function(data){var codes=jQuery.parseJSON(data);$("#subject").prop('disabled',false);$("#subject").empty();$('#subject').append($('<option selected disabled>Subject</option>'));$.each(codes,function(index,obj){$('#subject').append($('<option value="'+obj+'">'+obj+'</option>'));});$('select').niceSelect('update');},});}});$('select').niceSelect();$('a').hover(function(){$(this).fadeTo("slow",0.5);},function(){$(this).fadeTo("10",1.0);});});
