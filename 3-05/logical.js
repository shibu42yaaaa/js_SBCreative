let hour = new Date().getHours();

if(hour >= 19 && hour < 21){
  window.alert('お弁当半額');
} else if(hour === 9 || hour === 15){
  window.alert('一個買ったら一個おまけ');
} else {
  window.alert('お弁当はいかがですか？');
}