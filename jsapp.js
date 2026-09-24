const KeywordArray = [["hey" , 0], ["man",0]];
let KeywordArrayLenght = KeywordArray.length;

//Adds some words to KeywordArray on start
function startkeywords()
{
	
}

function TitleSpliter()
{
	let NewVideoTitle = document.getElementById("VideoTitle").value;
	NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z0-9\s]/g, "");
	NewVideoTitle = NewVideoTitle.toLowerCase();
	let Keyword = NewVideoTitle.split(/\s+/);
	
	//Checks for new keywords and if they are not in KeywordArray pushes that word as a new array into KeywordArray
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
	
	// count the number of time a word has been entered and incremetn the number in KeywordArray
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
	Keywordlimits();
}


//Keyword[i] !== "" && Keyword[i] != KeywordArray[j][0]
function Keywordlimits()
{
	let BiggestNum = 0
	//max
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(KeywordArray[i][1] > BiggestNum)
		{
			BiggestNum = KeywordArray[i][1]
		}
		console.log(BiggestNum)
	}
	let UpperLimit = BiggestNum * 0.9;
	let LowerLimit = BiggestNum * 0.4;
}