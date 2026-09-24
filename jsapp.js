const KeywordArray = [["hey" , 0], ["man",0]];

function TitleSpliter()
{
	let NewVideoTitle = document.getElementById("VideoTitle").value;
	NewVideoTitle = NewVideoTitle.replace(/[^A-Za-z0-9\s]/g, "");
	NewVideoTitle = NewVideoTitle.toLowerCase();
	let Keyword = NewVideoTitle.split(/\s+/);
	for(let i = 0; i < Keyword.length; i++)
	{
		let matchFound = ture;
		for(let j = 0; j < KeywordArray.length)
		{
			if(Keyword[i] == KeywordArray[j][0])
			{
				matchFound = ture
			}
			
		}
		
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