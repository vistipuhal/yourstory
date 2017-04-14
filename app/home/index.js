define(['durandal/app', 'durandal/system','knockout'], function (app, system, ko) {
    
    var keyword = ko.observable();


	
    return {
 		keyword: keyword,
    	images: ko.observableArray([]),
    	media: ko.observableArray([]),
    	activate : function() {	

            if (this.images().length > 0) {
                return;
            }
            
            var that = this;

            $.get('https://www.reddit.com/r/pics/.json?jsonp=', 
                function(data, status) {
                
                var img = [];
                
                for(var i=0; i<data.data.children.length; i++)
                {
                	
                	if(data.data.children[i].data.thumbnail != 'self' && data.data.children[i].data.thumbnail != 'nsfw' )
                			{
                				img.push({'url':data.data.children[i].data.thumbnail,'link': data.data.children[i].data.url,
                				'txt':data.data.children[i].data.title  });
                			}
                }

                that.images(img);
                                
            },'json');            
        },

        search: function(){

        	var div = $('.desc');

        	for(var i=0; i<div.length; i++)
        	{
        		var t =  div[i].innerHTML;

        		if (t.toLowerCase().indexOf(keyword().toLowerCase()) > -1)
        			{					
        			div[i].parentNode.parentNode.parentNode.style.display = "";        			
        			}

        		else{
        			div[i].parentNode.parentNode.parentNode.style.display = "none";	
        		}
			
        	}

        }
		
    }
});
