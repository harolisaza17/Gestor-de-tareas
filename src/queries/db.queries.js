export const USERQUERIES ={
    CREATE:
        "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *;",
        SELECT_USERS:"SELECT * FROM users;",
    FIND_BY_EMAIL: "SELECT * FROM users WHERE email = $1;"
}