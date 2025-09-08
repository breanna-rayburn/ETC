# SQLite3 SQL Cheatsheet

## Basic SQL Commands

### Data Definition Language (DDL)

- **CREATE TABLE**: Create a new table.

  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      ...
  );
  ```

- **DROP TABLE**: Delete a table.

  ```sql
  DROP TABLE table_name;
  ```

- **ALTER TABLE**: Modify an existing table.
  ```sql
  ALTER TABLE table_name ADD COLUMN column_name datatype;
  ```

### Data Manipulation Language (DML)

- **INSERT INTO**: Add new records to a table.

  ```sql
  INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
  ```

- **SELECT**: Retrieve data from one or more tables.

  ```sql
  SELECT column1, column2 FROM table_name WHERE condition;
  ```

- **UPDATE**: Modify existing records.

  ```sql
  UPDATE table_name SET column1 = value1 WHERE condition;
  ```

- **DELETE**: Remove records from a table.
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

## Common Clauses

### WHERE Clause

- Used to filter records.
  ```sql
  SELECT * FROM table_name WHERE condition;
  ```

### ORDER BY Clause

- Sort the result set.
  ```sql
  SELECT * FROM table_name ORDER BY column1 ASC|DESC;
  ```

### GROUP BY Clause

- Group rows sharing a property.
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1;
  ```

### HAVING Clause

- Filter groups based on aggregate functions.
  ```sql
  SELECT column1, COUNT(*) FROM table_name GROUP BY column1 HAVING COUNT(*) > value;
  ```

## Functions

### Aggregate Functions

- **COUNT()**: Count rows.
- **SUM()**: Sum values.
- **AVG()**: Average values.
- **MIN()**: Minimum value.
- **MAX()**: Maximum value.

### String Functions

- **LENGTH()**: Get the length of a string.
- **UPPER()**: Convert to uppercase.
- **LOWER()**: Convert to lowercase.
- **SUBSTR()**: Extract a substring.

### Date and Time Functions

- **DATE()**: Get the current date.
- **TIME()**: Get the current time.
- **DATETIME()**: Get the current date and time.

## Joins

### INNER JOIN

- Returns records with matching values in both tables.
  ```sql
  SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;
  ```

### LEFT JOIN

- Returns all records from the left table and matched records from the right table.
  ```sql
  SELECT columns FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
  ```

### RIGHT JOIN

- Returns all records from the right table and matched records from the left table (not supported in SQLite).

### FULL OUTER JOIN

- Returns all records when there is a match in either left or right table (not supported in SQLite).

## Indexes

- **CREATE INDEX**: Create an index on a table.

  ```sql
  CREATE INDEX index_name ON table_name (column1, column2);
  ```

- **DROP INDEX**: Remove an index.
  ```sql
  DROP INDEX index_name;
  ```

## Transactions

- **BEGIN TRANSACTION**: Start a transaction.
- **COMMIT**: Save changes.
- **ROLLBACK**: Undo changes.

## Comments

- Single-line comment: `-- This is a comment`
- Multi-line comment: `/* This is a comment */`
