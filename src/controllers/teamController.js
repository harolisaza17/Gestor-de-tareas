import {DBConection }  from "../db/index.js"
import { TEAMSQUERIES, TEAMMEMBERQUERIES, TASKQUERIES} from "../queries/dbqueries.js"

export const postTeam = async (req, res, next) => {
    const team = req.body;

    const newTeam = await DBConection.query(TEAMSQUERIES.CREATE_TEAM, [
        team.name,
        team.createdBy
    ]);

    console.log(newTeam.rows[0]);

    res.status(201).json({
      msg: "Team creado exitosamente",
      team: newTeam.rows[0],
    });
    next();
}

// agregar un miembro a un equipo
export const addMember = async (req, res, next) => {
    const { userId, teamId } = req.body;
    const newMember = await DBConection.query(TEAMMEMBERQUERIES.ADD_MEMBER, [
      userId,
      teamId,
    ]);
    res.status(201).json({
      msg: "Miembro agregado exitosamente",
      member: newMember.rows[0],
    });
    next();
}

// obtener todos los miembros de un equipo
export const getMembers = async (req, res) => {
    const { id: teamId } = req.params;
    const members = await DBConection.query(TEAMMEMBERQUERIES.GET_MEMBERS, [
      teamId,
    ]);
    res.status(200).json({
      msg: "Miembros obtenidos exitosamente",
      members: members.rows,
    });

}

