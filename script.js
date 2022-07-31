function calculateGrade()
{
	var grades;
	var gradesWeight = [4, 4, 4, 4, 4, 5, 25, 20, 20];
	var totalPercent = 0, totalGrades = 0;
	
	grades = document.getElementsByName("Grade");
	
	for (var i = 0; i < grades.length; i++)
	{
		if (grades.item(i).value != '')
		{
			totalPercent += gradesWeight[i];
			totalGrades +=parseInt(grades.item(i).value) *gradesWeight[i];
		}
	}
	
	var result = Math.round(totalGrades/totalPercent);
	var letter = calculateLetter(result);
	
	changeContent("CurrentGrade", "Grade: "+result+"%");
	changeContent("LetterGrade", "Letter Grade: "+letter);
};

function changeContent(id, text)
{
	document.getElementById(id).innerHTML = text;
};

function calculateLetter (grade)
{
	if (grade >= 90) return "A";
	
	else if (grade >= 80) return "B";
	
	else if (grade >= 65) return "C";
	
	else if (grade >= 55) return "D";
	
	else return "F";
}