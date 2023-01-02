// console.log('hallo');
let number = Math.floor(Math.random() * 6);
let answer = parseInt(window.prompt('数当てゲーム。1~5の数字を入力してください'));

let message;
if(answer === number){
  message = 'あたり！';
} else if(answer < number){
  message = '残念でした。もっと大きい';
} else if(answer > number){
  message = 'もっと小さい';
} else {
    message = '1~5の数字を入力してください';
}
window.alert(message);
