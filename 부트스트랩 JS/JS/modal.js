// 메서드
// 1. ESC키 눌러도 안 닫힘.
 $('#myModal').modal({
     keyboard : false
 })

 // 2. 클릭 시 열고 닫힘
 $('myModal').modal('toggle')

// 3. 수동으로 모달창 열음.
$('#myModal').modal('show')

// 4. 수동으로 모달 닫기
$('#myModal').modal('hide')

// 이벤트
// show.bs, shown.bs, hide.bs, hidden.bs, loaded.bs 등이 있음.
$('#myModal').on('hidden.bs.modal', function(e) {
    // 모달이 사용자에 의해 감춰지게되면? 여기다가 일어날 이벤트 적기.
    alert('hi');
})