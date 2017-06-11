//I have questions about this section.  Should we build a collection for universities, or will this info be pulled from SalesForce with an API call?  Can this collection be automatically updated by SalesForce? Basic premise, each university is a document that contains all pertinent university info.

{
	"universityName": "The University of Texas at Austin",
	"campusLocation": "Austin",
	"classLocationAddress": "1450 Willie Nelson Blvd",
	"SSM": "Brett Payne",
	"programs": ["FSF", "Data", "UI/UX"],
	"cohorts": {
		"FSF": [
		{
			"startDate": "June 3, 2017",
			"endDate": "December 10, 2017",
			"cohortName": "UT201706FSF",
			"numberOfClasses": 2,
			"instructorRoles": 2,
			"taRoles": 4
		},{
			"startDate": "September 3, 2017",
			"endDate": "March 10, 2018",
			"cohortName": "UT201710FSF",
			"numberOfClasses": 2,
			"instructorRoles": 2,
			"taRoles": 4
		}],
		"Data": [
		{
			"startDate": "Deceber 3, 2017",
			"endDate": "June 10, 2018",
			"cohortName": "UT201712FSF-Data",
			"numberOfClasses": 1,
			"instructorRoles": 1,
			"taRoles": 3
		}],
		"UI/UX": [{
			"startDate": "June 3, 2017",
			"endDate": "December 10, 2017",
			"cohortName": "UT201706UIUX",
			"numberOfClasses": 2,
			"instructorRoles": 2,
			"taRoles": 4
		},{
			"startDate": "September 3, 2017",
			"endDate": "March 10, 2018",
			"cohortName": "UT201710UIUX",
			"numberOfClasses": 2,
			"instructorRoles": 2,
			"taRoles": 4
		}]
	};