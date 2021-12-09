import Todo from "../models/Todo";
import * as Yup from "yup";

class TodoController {

    async get(req, res) {

        const todos = await Todo.findAll({
            where: { user_id: req.userId }
        })

        return res.json({ todos })
    }

    async create(req, res) {

        const schema = Yup.object().shape({
            description: Yup.string().required(),
            title: Yup.string().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ err: "Requisição inválida." })
        }

        const todos = await Todo.findAll()

        return res.json({ todos })
    }



}


export default new TodoController();