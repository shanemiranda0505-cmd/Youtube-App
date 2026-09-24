const KeywordArray = [["hey" , 0], ["man",0]];
let KeywordArrayLenght = KeywordArray.length;

function TitleSpliter()
{
	let NewVideoTitle = document.getElementById("VideoTitle").value;
	NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z0-9\s]/g, "");
	NewVideoTitle = NewVideoTitle.toLowerCase();
	let Keyword = NewVideoTitle.split(/\s+/);
	for(let i = 0; i < Keyword.length; i++)
	{
		let matchArray = [];
		for(let j = 0; j < KeywordArray.length; j++)
		{
			
			if(Keyword[i] == KeywordArray[j][0])
			{
				matchArray.push("YES");
			}
			else
			{
				matchArray.push("NO");
			}
			
		}
		if(matchArray.includes("YES") == true)
		{
			
		}
		else
		{
			KeywordArray.push([Keyword[i] , 0]);
		}
		console.log(matchArray)
		
		
	}
	console.log(KeywordArray)
	
	for(let i = 0; i < KeywordArray.length; i++)
	{
		for(let j = 0; j < Keyword.length; j++)
		{
			if(KeywordArray[i][0] == Keyword[j])
			{
				KeywordArray[i][1]++;
			}
		}
	}
}


//Keyword[i] !== "" && Keyword[i] != KeywordArray[j][0]
function Counter()
{

}