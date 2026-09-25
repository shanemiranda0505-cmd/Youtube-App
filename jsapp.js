const KeywordArray = [["" , 0]];
const KeywordArraySingle = [["" , 0]];
const keywordArrayTotal = [];
let KeywordArrayLenght = KeywordArray.length;

//Adds some words to KeywordArray on start
function startkeywords()
{
	
}

function TitleSpliter()
{
	let NewVideoTitle = document.getElementById("VideoTitle").value;
	NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z\s]/g, "");
	NewVideoTitle = NewVideoTitle.toLowerCase();
	let Keyword = NewVideoTitle.split(/\s+/);
	
	//Checks for new keywords and if they are not in KeywordArray pushes that word as a new array into KeywordArray
	for(let i = 0; i < Keyword.length; i++)
	{
		let matchArray = [];
		for(let j = 0; j < KeywordArray.length; j++)
		{
			
			if(Keyword[i] == KeywordArray[j][0] && Keyword[i].length > 4)
			{
				matchArray.push("YES");
			}
			else if (Keyword[i].length <= 4)
			{
				matchArray.push("BAN");
			}
			else
			{
				matchArray.push("NO");
			}
			
		}
		if(matchArray.includes("YES") == true || matchArray.includes("BAN") == true)
		{
			
		}
		else
		{
			KeywordArraySingle.push([Keyword[i] , 0]);
		}
		//console.log(matchArray)
		
		
	}
	console.log(KeywordArraySingle)
	
	//Checks for new keywords and if they are not in KeywordArray pushes that word as a new array into KeywordArray
	for(let i = 0; i < Keyword.length - 1; i++)
	{
		let matchArray = [];
		for(let j = 0; j < KeywordArray.length; j++)
		{
			
			if(Keyword[i] + " " + Keyword[i + 1] == KeywordArray[j][0] && Keyword[i].length > 4 && Keyword[i + 1].length > 4)
			{
				matchArray.push("YES");
			}
			else if (Keyword[i].length <= 4 || Keyword[i + 1].length <= 4)
			{
				matchArray.push("BAN");
			}
			else
			{
				matchArray.push("NO");
			}
			
		}
		if(matchArray.includes("YES") == true || matchArray.includes("BAN") == true)
		{
			
		}
		else
		{
			KeywordArray.push([Keyword[i] + " " +  Keyword[i + 1] , 0]);
		}
		//console.log(matchArray)
		
		
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
	
	for(let i = 0; i < KeywordArray.length; i++)
	{
		for(let j = 0; j < Keyword.length - 1; j++)
		{
			if(KeywordArray[i][0] == Keyword[j] + " " + Keyword[j + 1])
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
	let FirstChoiceNum = 0;
	let SecondChoiceNum = 0;
	let ThirdChoiceNum = 0;
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(
			(KeywordArray[i][1] > FirstChoiceNum) &&
			(KeywordArray[i][1] < UpperLimit) &&
			(KeywordArray[i][1] >= LowerLimit)
			)
		{
			FirstChoiceNum = KeywordArray[i][1];
			FirstChoice = KeywordArray[i][0];
			console.log("Test 1")
		}
		console.log("Test 2")
	}
	console.log("your first pick has " + FirstChoiceNum)
	console.log("what you like " + FirstChoice)
	for(let i = 0; i < KeywordArray.length; i++)
	{
		if(
			KeywordArray[i][1] > SecondChoiceNum &&
			KeywordArray[i][1] < UpperLimit &&
			KeywordArray[i][1] >= LowerLimit &&
			SecondChoice != FirstChoice
			)
		{
			SecondChoiceNum = KeywordArray[i][1];
			SecondChoice = KeywordArray[i][0];
		}
		
	}
	console.log("your Seconnd pick has " + SecondChoiceNum)
	console.log("what you like second" + SecondChoice)
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
		
	}
	console.log("your third pick has " + ThirdChoiceNum)
	console.log("what you like Third" + ThirdChoice)
	
	KeywordArray.sort((a, b) => b[1] - a[1]);
	console.log("Sorted array is this " + KeywordArray);
	RevelentSingleWords()
}

function RevelentSingleWords()
{
	let singleOfDouble = [];
	for(let i = 0; i < KeywordArray.length; i++)
	{
		let singleOfDoubleword = KeywordArray[i][0].split(/\s+/);
		singleOfDouble.push(singleOfDoubleword);
		
	}
	console.log("single Of Double is " + singleOfDouble);
}