const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let i = document.getElementsByClassName("price")[0];
	let list = i.value;
	let total = document.createElement("div");
	total.innerText = list;
	let sum=0;
	for(let x=0;x<total.length;x++){
		sum += total[x];
	}
	let totalSum = document.createElement('p');
	totalSum.textContent = sum;
  document.append(totalSum);
};

getSumBtn.addEventListener("click", getSum);

