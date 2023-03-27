# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket 1** 

Add a Custom ID field to the Agents table in the database, allowing Facilities to save their own custom ids for each Agent they work with. This field will be used to generate reports.

**Acceptance criteria:**

A new Custom ID field is added to the Agents table in the database.

The Custom ID field can be updated by the Facility.

The Custom ID field is displayed on the Agent metadata in the Shifts table

The Custom ID field is displayed on the generated report for each Agent

Effort Estimate: 6 hours

**Implementation details:**

Add a new column to the Agents table in the database.

Update the agent model to include the new Custom ID field.

Add the Custom ID field for Facilities to update.

Modify the getShiftsByFacility function to include the Custom ID field in the Shift metadata.

Modify the generateReport function to use the Custom ID field in the report generation.

**Ticket 2**

Update getShiftsByFacility function to use Custom ID field returned for each Shift.

**Acceptance criteria:**

The getShiftsByFacility function is updated to include the Custom ID field returned for each Shift

The Custom ID field is filled with the value saved by the Facility in the Agent's Custom ID field

Effort Estimate: 4.5 hours

**Implementation details:**

Update the getShiftsByFacility function to include the Custom ID field returned for each Shift

Query the Agents table to fill the Custom ID field with the value saved by the Facility

**Ticket 3** 

Update generateReport function to use Custom ID field instead of the internal database id.

**Acceptance criteria:**

The generateReport function is updated to use the Custom ID field instead of the internal database id in the report

Effort Estimate: 2.5 hour

**Implementation details:**

Update the generateReport function to use the Custom ID field instead of the internal database id in the report.

**Ticket 4**

Add Custom ID field to report template.

**Acceptance criteria:**

The Custom ID field is included in the report template.

The Custom ID field is displayed in the generated report.

Effort Estimate: 3 hours

**Implementation details:**

Modify the report template to include the Custom ID field in the report

Update the generateReport function to fill the Custom ID field in the report template.

**Ticket 5**

Add validation to ensure that each Custom ID is unique for a Facility, preventing duplicates and errors.

**Acceptance criteria:**

Custom IDs are required to be unique for each Facility.

Facilities are notified if they try to save a Custom ID that has already been used for another Agent.

Effort Estimate: 4.5 hours

**Implementation details:**

Add validation to the Custom ID field in the Agents table to secure unique ids for each Facility.

Add error handling to the front end to notify Facilities if they try to save a duplicate Custom ID for an Agent.

**Total effort estimated for the ticket: 20.5 hours**
