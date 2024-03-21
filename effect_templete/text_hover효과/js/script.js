$(function(){
    

    // 날짜 카운트
    function countDate(){

      var el = $('.date_count');
        var date = new Date();
        var todayDate = String(date.getFullYear()) + String(date.getMonth() + 1) + String(date.getDate()); //오늘의 날짜를 구함
        var rolling = 24; //롤링될 개수
        var resultArray = [];
            resultArray = todayDate.split(''); //롱링할 오늘날짜를 나눠서 배열에 담음
            // console.log(resultArray);


        $.each(resultArray, function(idx, val){
            var countBox = $('<div class="count_box" />');
            var numberArray = [];//쪼갠 날짜를 담을 배열 선언
            var number = Number(val);

            for(var i=0;i<= rolling; i++){//롤링할 숫자만큼 값을 생성해 배열에 담음
                var sum = number+i;
                var num = sum >= 10 ? Number(String(sum).split('')[1]):sum;//값이 10보다 커질 경우 첫번째 자릿수를 버리도록 함
                numberArray[i]=num;

            }
                numberArray.reverse();//롤링 방향 때문에 배열을 뒤집어줌
                numberArray.forEach(function(val){
                    //날짜를 담은 span 엘리먼트를 countBox에 붙여줌

                    var countValue = $('<span/>',{
                        text:val
                    });
                    countValue.appendTo(countBox)
                })
            countBox// 최종 엘리먼트에 추가함 딜레이와 큐를 이용해 롤링 타이밍 저리
            .appendTo(el)
            .delay(idx*300)
            .queue(function(){
                $(this).addClass('active');
            })
        })


    }
    countDate();


    setTimeout(function(){
        $('.sec02').addClass('active');
    },200)
    
});

