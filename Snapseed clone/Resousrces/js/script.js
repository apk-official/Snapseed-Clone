$(document).ready(function(){
    var open=false;
    $('.js-style').click(function(){
        if(open==false){
            $('.style-overlay').css({
            'height': '20%',
            'width': '100%',
            'bottom': '50px',
            'left': '0',
            'margin-top':'20px'
        });
        $('.style').css({
            'color':'#4585ef'
        });
            open=true;
            
        }
        else{
            $('.style-overlay').css({
            'height': '0',
            'width': '100%',
            'bottom': '50px',
            'left': '0',
        });
        $('.style').css({
            'color':'#676767'
        });
        open=false;
        }
        
    });
    $('.js-tool').click(function(){
        if(open==false){
            $('.tools-overlay').css({
            'height': '70%',
            'width': '100%',
            'bottom': '20px',
            'left': '0'
        });
        $('.tools').css({
            'color':'#4585ef'
        });
            open=true;
            
        }
        else{
            $('.tools-overlay').css({
            'height': '0',
            'width': '100%',
            'bottom': '20px',
            'left': '0',
        });
        $('.tools').css({
            'color':'#676767'
        });
        open=false;
        }
        
    });
    $('.js-export').click(function(){
        if(open==false){
            $('.export-overlay').css({
            'height': '41%',
            'width': '100%',
            'bottom': '20px',
            'left': '0'
        });
        $('.export').css({
            'color':'#4585ef'
        });
            open=true;
            
        }
        else{
            $('.export-overlay').css({
            'height': '0',
            'width': '100%',
            'bottom': '20px',
            'left': '0',
        });
        $('.export').css({
            'color':'#676767'
        });
        open=false;
        }
        
    });
     
});