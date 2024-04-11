# Transactions
In SQL, a transaction is a sequence of one or more SQL operations that are treated as a single unit of work. Transactions are used to ensure data integrity and consistency in a database system, particularly in multi-user environments where multiple transactions may be executed concurrently.

## TCL

-   Used to manage transactions within the database (more on this later)
-   Syntax/Keywords for TCL:
    -   `COMMIT`: this will permanently save any DML operations that occurred
    -   `ROLLBACK`: this will completely erase any DML operations that occurred between two commits. Keep in mind, once you commit changes you cannot rollback
    -   `SAVEPOINT`: creates a spot to rollback to


## Acid Properties

In SQL every transaction must have a specific four properties, these are know as the ACID properties

**Atomic:** All or nothing, the transaction is fully completed, or it doesn't happen at all

**Consistency:** The tables schema will remain intact after the transaction

**Isolation:** Each transaction cannot affect the results of another transaction

**Durability:** Data will persist through system crashes and other issues

# Constraints

Constraints are restrictions that we can put on the columns of our tables in SQL

Some constraints in SQL include:

-   Composite keys: a key that uses more than one column
-   Not null: the column must have data
-   Unique: no two records entered into this column can be the same
-   Primary key: denotes that this column is a primary key
-   Foreign key: denotes that this column is pointing to an attribute on another table
-   Default: creates a default value if none is given
