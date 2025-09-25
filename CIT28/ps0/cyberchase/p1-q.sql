-- starting the pow workflow
-- changes terminal output for readability 
.mode box
  
-- changes terminal output from standard output (stdout) to pow.txt file
.output '| cat >> pow-p1.txt'
  
-- updates the pow.txt with content in single quotes
.print 'Query 1'

-- SQL command (query) to view all the column contents in the episodes table   
-- Copy your SQL command below here
SELECT "title" from "episodes" WHERE "season" = 1;

.print 'Counting results'
SELECT COUNT("title") AS "Counting Results" FROM "episodes" WHERE "season" = 1;   

-- After each commit comment out the queries written and then continue to write your queries in this part of the file

-- changes back to stdout    
.output stdout  

-- bash command sqlite3 cyberchase.db < p1-q.sql