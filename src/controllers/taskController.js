import { DBConnection } from "../db/index.js";
import { TEAMSQUERIES, TASKQUERIES } from "../queries/db.queries.js"

// obtener todas las tareas de un equipo
export const getTasks = async (req, res, next) => {
    const { id: teamId } = req.params;
    if (!teamId) {
      return res.status(400).json({ msg: "teamId requerido" });
    }
    const team = await DBConnection.query(TEAMSQUERIES.GET_TEAM_BY_ID, [teamId]);
    if (team.rows.length === 0) {
      return res.status(404).json({ msg: "Team no encontrado" });
    }

    
    const tasks = await DBConnection.query(TASKQUERIES.GET_TASKS, [teamId]);
    if (tasks.rows.length === 0) {
      return res.status(200).json({
        msg: "No hay tareas para este equipo",
        tasks: [],
      });
    }
    return res.status(200).json({
      msg: "lista de tareas obtenida",
      tasks: tasks.rows,
    });
}

// crear una nueva tarea
export const createTask = async (req, res, next) => {
    const { title, description, assignedTo, teamId } = req.body;
    if (!teamId || !title || !description || !assignedTo) {
      return res.status(400).json({ msg: "teamId, title, description y assignedTo son requeridos" });
    }
    const team = await DBConnection.query(TEAMSQUERIES.GET_TEAM_BY_ID, [teamId]);
    if (team.rows.length === 0) {
      return res.status(404).json({ msg: "Team no encontrado" });
    }
    const newTask = await DBConnection.query(TASKQUERIES.CREATE_TASK, [
      title,
      description,
      assignedTo,
      teamId,
    ]);
    res.status(201).json({
      msg: "Tarea creada exitosamente",
      task: newTask.rows[0],
    });
    next();
}

// editar una tarea 
export const updateTask = async (req, res, next) => {
    const { id: taskId } = req.params;
    const { title, description, status, assignedTo } = req.body;
    if (!taskId) {
      return res.status(400).json({ msg: "taskId requerido" });
    }
    if (!title || !description || !status || !assignedTo) {
      return res.status(400).json({ msg: "title, description, status y assignedTo son requeridos" });
    }
    const updatedTask = await DBConnection.query(TASKQUERIES.UPDATE_TASK, [
      title,
      description,
      status,
      assignedTo,
      taskId,
    ]);
    if (updatedTask.rows.length === 0) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }
    res.status(200).json({
      msg: "Tarea actualizada exitosamente",
      task: updatedTask.rows[0],
    });
    next();
}

// eliminar una tarea
export const deleteTask = async (req, res, next) => {
    const { id: taskId } = req.params;
    if (!taskId) {
      return res.status(400).json({ msg: "taskId requerido" });
    }
    const deletedTask = await DBConnection.query(TASKQUERIES.DELETE_TASK, [taskId]);
    if (deletedTask.rows.length === 0) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }
    res.status(200).json({
      msg: "Tarea eliminada exitosamente",
      task: deletedTask.rows[0],
    });
    next();
}
