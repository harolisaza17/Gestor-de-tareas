import { DBConnection } from "../db/index.js";
import { USERQUERIES } from "../queries/db.queries.js";
import bcrypt from "bcrypt";


export const postUser = async (req, res, next) => {
    const user = req.body;

    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltrounds);

    const createUser = await DBConnection.query(USERQUERIES.CREATE, [user.name, user.email, hashedPassword]);
    console.log(createUser);

    res.status(201).json({ message: "Usuario creado exitosamente", user: createUser.rows[0] });
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await DBConnection.query(USERQUERIES.FIND_BY_EMAIL, [email]);

    if (user.rows.length === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.status(200).json({ message: "Inicio de sesión exitoso", user: user.rows[0] });

}
