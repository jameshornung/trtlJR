# Database Structure

We will need 3 (or maybe 2...more on that later) collections to make TRTL run.  A **Candidates Collection** that will store all the info for our candidates - from personal info, to interview scores, to compensation details.  A **University Collection** that will store all the info for the campus locations, including program offerings and class dates.  A **User Collection** that will store all the log in info for internal employees and control access rights.

## Candidates Collection

This collection will be the real "meat" of TRTL.  It will allow us to replace google forms and store all the info on the candidate in one convenient location.  The most important features of the candidate document, in my mind, are:

* **Capturing personal info on candidate**: Basically replacing greenhouse.  This is where we can store name, phone number, email, etc...there should be an *Edit Info* link that allows us to update the info on a candidate at any time (ie in the tech interview the candidate asks that we use their cell number instead of work line)

* **Status Indicator**: This status indicator should let us do two things: 1. Create a search filter to see how many candidates we have in a particular stage of the process (ie how many canidates for GW are pending a tech interview).  2. Control the flow of the candidate through the process.  (ie once a candidate has completed the HR Interview, the *"main"* view of for the candidate should reflect a summary of the HR score, as well as a link to the tech interview.)

* **Interview Scores**: This section will store the results from the interviews.  We can replace google forms with custom made forms in TRTL, submission of the form will auto update the status indicator and move the candidate to the next stage in the process.  (ie Form is filled out to enter the personal details of candidate into TRTL, candidate enters the system with a status of *Pending HR Interview* - once the HR Interview is completed, the status updates to *Pending Tech Interview*, and so on and so on.

* **Offer Call**: This section will store all the details we need for a candidate who is hired.  Most importantly, compensation details and the cohort they will be joining.  Once verbalAgreement is set to true, the candidate will appear on the "role count" sheet.  (I'd recommend we go with a color coding scheme here, but that needs to be flushed out.  Maybe when we have a verbal agreement the candidate enters the role count in red, when the contract is sent to the candidate, they go to yellow, when the contract is returned green, and when on boarding is completed, bold green? Something along those lines, but where we can easily see visually exactly where a candidate is in the process.)

*  **On Boarding**:  This is for Cher!  She can tell me specifically what she needs for this view, but the rough outline in my head, is a dashboard view that allows her to see all the candidates who have not yet returned their contracts, candidates who have returned their contracts, but still need on boarding, and candidates who have an on boarding session scheduled.  I think the three booleans currently entered will allow us to create simple queries to show this.  

## User Collection

Will store all the details for user log ins.  We can use this to provide access levels.  Our components will be able to check a users status and that will control what options they provide...ie someone with read only access will not be able to edit candidate details or remove them from the role count.

## University Collection

We might not need this collection, maybe we can use an API call.  The important thing is that we only have to update univeristy info once to have that change reflected everywhere.  (Question to ponder...if class dates change after a candidate has been hired, how do we set things up so that the dates auto update for each member of that instructional team?  Or would we even want that?  Is is better to update manually as verification that we contacted the candidates and let them know about the date change?)
