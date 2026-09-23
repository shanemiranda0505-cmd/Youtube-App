const KeywordArray = [];
const KeywordCounterArray = [];

function TitleSpliter()
{
	let NewVideoTitle = document.getElementById("VideoTitle").value;
	NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z0-9\s]/g, "");
	NewVideoTitle = NewVideoTitle.toLowerCase();
	let Keyword = NewVideoTitle.split(/\s+/);
	for(let i = 0; i < Keyword.length; i++)
	{
		if(Keyword[i] !== "" && !KeywordArray.includes(Keyword[i]))
		{
			KeywordArray.push(Keyword[i]);
		}
		
	}
	console.log(KeywordArray)
	
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(KeywordCounterArray.includes(KeywordArray[i]))
		{
			KeywordCounterArray[i][1]++;
		}
		else if(!KeywordCounterArray.includes(KeywordArray[i]))
		{
			KeywordCounterArray.push([KeywordArray[i], 0]);
		}
		
	}
	console.log(KeywordCounterArray)
	
}



function Counter()
{

}