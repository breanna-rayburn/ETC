# SQL Mock Interview Preparation

This document is designed to help you prepare for your SQL mock interview, using the Moneyball database. It includes hands-on coding questions and conceptual questions covering joins and nested queries.

## Hands-on Coding Questions

### 1. Find Players with High OBP

**Question:** Write a SQL query to find the names of players with an on-base percentage (OBP) greater than 0.400.

```sql
SELECT name
FROM players
WHERE obp > 0.400;
```

### 2. List Players and Their Teams

**Question:** Write a SQL query to list the names of players alongside their team's names.

```sql
SELECT players.name AS player_name, teams.name AS team_name
FROM players
JOIN teams ON players.team_id = teams.team_id;
```

### 3. Players Better than Team Average BA

**Question:** Write a SQL query to find all players who have a batting average (BA) higher than the average BA of their respective teams.

```sql
SELECT p.name
FROM players p
WHERE p.ba > (
SELECT AVG(ba)
FROM players
WHERE team_id = p.team_id
);
```

### 4. Team Wins

**Question:** Write a SQL query to find the total number of games won by each team.

```sql
SELECT teams.name, COUNT(games.game_id) AS total_wins
FROM teams
JOIN games ON teams.team_id = games.winning_team_id
GROUP BY teams.name;
```

### 5. Calculate Total Home Runs

**Question:** Write a SQL query to calculate the total number of home runs scored by each player.

```sql
SELECT player_name, SUM(home_runs) AS total_home_runs
FROM statistics
GROUP BY player_name;
```

## Conceptual Questions

### 1. Differences Between JOIN Types

**Question:** What are the differences between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?

**Answer:**

- INNER JOIN: Returns only rows with matching values in both tables.
- LEFT JOIN: Returns all rows from the left table and matched rows from the right, with NULLs for non-matches.
- RIGHT JOIN: Returns all rows from the right table and matched rows from the left, with NULLs for non-matches.
- FULL JOIN: Returns all rows when there is a match in either table.

### 2. Purpose of GROUP BY

**Question:** Explain the purpose of using a GROUP BY clause in SQL statements.

**Answer:** The GROUP BY clause groups identical data into sets, allowing aggregate functions to perform calculations on each group. 3. Subquery vs. JOIN

### 3. Subquery VS JOIN

**Question:** Describe how a subquery differs from a JOIN.

**Answer:** A subquery is a nested query within another SQL query that can return a single value or a set of values. A JOIN combines rows from two or more tables based on related columns to retrieve data from multiple tables. 4. Importance of the WHERE Clause

### 4. Importance of WHERE clause

**Question:** What is the significance of the WHERE clause in SQL?

**Answer:** The WHERE clause filters records based on specified criteria before grouping or aggregating, defining which rows to include in the result set. 5. How Indexing Improves Performance

### 5. How indexing improves performance

**Question:** How can indexing improve the performance of a SQL query?

**Answer:** Indexing creates a data structure that speeds up data retrieval by allowing the database to quickly locate necessary rows without scanning the entire table, which enhances performance for large datasets.
