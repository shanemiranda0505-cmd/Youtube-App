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



//Calculate the upper and lower limits based on KeywordArray size
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
	DisplayingKeywords(UpperLimit , LowerLimit)
}

//trims the KeywordArray and displays the 
function DisplayingKeywords( UpperLimit , LowerLimit)
{
	let FirstChoice = "";
	let SecondChoice = "";
	let ThirdChoice = "";
	let FirstChoiceNum = -1;
	let SecondChoiceNum = -1;
	let ThirdChoiceNum = -1;
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(
			KeywordArray[i][1] > FirstChoiceNum &&
			KeywordArray[i][1] < UpperLimit &&
			KeywordArray[i][1] >= LowerLimit
			)
		{
			FirstChoiceNum = KeywordArray[i][1];
			FirstChoice = KeywordArray[i][0];
		}
		console.log(FirstChoiceNum)
	}
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(
			KeywordArray[i][1] > SecondChoiceNum &&
			KeywordArray[i][1] < UpperLimit &&
			KeywordArray[i][1] >= LowerLimit &&
			(SecondChoiceNum != FirstChoiceNum || SecondChoice != FirstChoice )
			)
		{
			SecondChoiceNum = KeywordArray[i][1];
			SecondChoice = KeywordArray[i][0];
		}
		console.log(SecondChoiceNum)
	}
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(
			KeywordArray[i][1] > ThirdChoiceNum &&
			KeywordArray[i][1] < UpperLimit &&
			KeywordArray[i][1] >= LowerLimit &&
			(ThirdChoiceNum != FirstChoiceNum || ThirdChoice != FirstChoice ) &&
			(ThirdChoiceNum != SecondChoiceNum || ThirdChoice != SecondChoice )
			)
		{
			ThirdChoiceNum = KeywordArray[i][1];
			ThirdChoice = KeywordArray[i][0];
		}
		console.log(ThirdChoiceNum)
	}
}