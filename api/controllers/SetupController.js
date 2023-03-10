import { Setup, Pessoas } from '../models'

class SetupController {
    static async pegaTodoSetup(req, res){
        try{
            const todoSetup = await Setup.findAll()
            return res.status(200).json(todoSetup)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaSetup(req, res) {
        const novoSetup = req.body
        try {
            const novoSetupCriado = await Pessoas.create(novoSetup)
            return res.status(200).json(novoSetupCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

export default SetupController