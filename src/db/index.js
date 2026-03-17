import pg from 'pg';


const { Pool } = pg;

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const DBConection = new Pool({
    host: DB_HOST,
    port: DB_PORT,  
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

export const connectDB = async () => {
    try {
        await DBConection.connect();
        console.log('Database connected successfully');
    }
    catch{
        error => console.error('Error connecting to the database:', error);
    }
};