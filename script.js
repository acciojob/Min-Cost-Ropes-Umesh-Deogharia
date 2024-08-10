function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort((a,b)=>a-b);
	let totalcost = 0;

	while (arr.length>1) {
		let rope1 = arr.shift();
		let rope2 = arr.shift();
		
		let newropes = rope1 + rope2;
		totalcost += newropes;
		let i = 0;
		while (i<arr.length && arr[i]<newropes) {
			i++
		}
			arr.spice(i,0,newropes);
	}
	return totalcost;
}

module.exports=mincost;
