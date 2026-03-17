export const USERQUERIES = {
  CREATE:
    "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *;",
  SELECT_USERS: "SELECT * FROM users;",
  FIND_BY_EMAIL: "SELECT * FROM users WHERE email = $1;",
};

export const TEAMSQUERIES = {
  CREATE_TEAM:
    "INSERT INTO teams (name, created_by) VALUES ($1, $2) RETURNING *",
  GET_TEAMS: "SELECT * FROM teams",
  GET_TEAM_BY_ID: "SELECT * FROM teams WHERE id = $1",
};

export const TEAMMEMBERQUERIES = {
  ADD_MEMBER:
    "INSERT INTO team_members (user_id, team_id) VALUES ($1, $2) RETURNING *",
  GET_MEMBERS: "SELECT * FROM team_members WHERE team_id = $1",
  REMOVE_MEMBER:
    "DELETE FROM team_members WHERE user_id = $1 AND team_id = $2 RETURNING *",
};

export const TASKQUERIES = {
  GET_TASKS: "SELECT * FROM tasks WHERE team_id = $1",
  GET_TASK_BY_ID: "SELECT * FROM tasks WHERE id = $1",
  CREATE_TASK:
    "INSERT INTO tasks (title, description, assigned_to, team_id) VALUES ($1, $2, $3, $4) RETURNING *",
  UPDATE_TASK:
    "UPDATE tasks SET title = $1, description = $2, status = $3, assigned_to = $4 WHERE id = $5 RETURNING *",
  DELETE_TASK: "DELETE FROM tasks WHERE id = $1 RETURNING *",
};