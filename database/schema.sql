CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
password TEXT NOT NULL
);

CREATE TABLE teams (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
created_by INTEGER REFERENCES users(id)
);

CREATE TABLE team_members (
user_id INTEGER REFERENCES users(id),
team_id INTEGER REFERENCES teams(id),
PRIMARY KEY (user_id, team_id)
);

CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
title VARCHAR(200) NOT NULL,
description TEXT,
status VARCHAR(50) DEFAULT 'pendiente',
assigned_to INTEGER REFERENCES users(id),
team_id INTEGER REFERENCES teams(id)
);

select*from users

select*from teams
select*from team_members

select*from tasks