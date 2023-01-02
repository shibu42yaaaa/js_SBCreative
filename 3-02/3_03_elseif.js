let answer = window.prompt('ヘルプを見ますか？');

if(answer === 'yes'){
  window.alert('タップしてジャンプ、障害物を避けます');
} else if(answer === 'no'){
  window.alert('ゲーム起動中....');
} else {
  window.alert('yesかnoを選択してください');
}