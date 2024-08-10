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
		arr.push(newropes);
		totalcost += newropes;
		arr.sort((a,b)=>a-b);
	}
	return totalcost;
}

module.exports=mincost;
