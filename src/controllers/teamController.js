import { DBConnection } from "../db/index.js"
import {  TEAMSQUERIES, TEAMMEMBERQUERIES } from "../queries/db.queries.js"

// crear un nuevo equipo
export const postTeam = async (req, res, next) => {
    const team = req.body;

    const newTeam = await DBConnection.query(TEAMSQUERIES.CREATE_TEAM, [
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
    const { id: teamId } = req.params;
    const { userId } = req.body;
    if (!teamId || !userId) {
      return res.status(400).json({ msg: "teamId y userId son requeridos" });
    }
    if (req.body.teamId && Number(req.body.teamId) !== Number(teamId)) {
      return res.status(400).json({ msg: "teamId no coincide con el equipo" });
    }
    const team = await DBConnection.query(TEAMSQUERIES.GET_TEAM_BY_ID, [teamId]);
    if (team.rows.length === 0) {
      return res.status(404).json({ msg: "Team no encontrado" });
    }
    const newMember = await DBConnection.query(TEAMMEMBERQUERIES.ADD_MEMBER, [
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
    if (!teamId) {
      return res.status(400).json({ msg: "teamId requerido" });
    }
    const team = await DBConnection.query(TEAMSQUERIES.GET_TEAM_BY_ID, [teamId]);
    if (team.rows.length === 0) {
      return res.status(404).json({ msg: "Team no encontrado" });
    }
    const members = await DBConnection.query(TEAMMEMBERQUERIES.GET_MEMBERS, [
      teamId,
    ]);
    res.status(200).json({
      msg: "Miembros obtenidos exitosamente",
      members: members.rows,
    });

}

