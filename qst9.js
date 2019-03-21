function exibirNome(){
  var a = document.getElementById("p1").value;
  var b = document.getElementById("p2").value;

  var array = [];
		c=0;
		for(i=0;i<a.length;i++){
			array[c] = a[i];
			c=c+2;
		}
		c=1;
		for(i=0;i<b.length;i++){
			array[c] = b[i];
			c=c+2;
		}
		var val = array.join('');
  document.getElementById("p3").value = val;
/**
  console.log(a);
  console.log(b);
  console.log(val);
  **/
}