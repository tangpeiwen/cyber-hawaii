import type { NextApiResponse, NextApiRequest} from 'next'
import { connect } from '../../lib/mongo'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {query = {}} = req.body
    const mongo = await connect()
    const data = await mongo.db('nft').collection('temp').find({}).toArray()
    // res.json(data)
    return res.status(200).json(data)
}

