export const checkAuth = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        res.status(401).send({ error: `Authentication failed!` })
    }

    const token = authorization.split(' ')[1]

    if (!token) {
        // לא נשלח טוקן - האימות נכשל
        res.status(401).send({ error: `Authentication failed!` })
    }

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: `Authorization failed!` })
        }

        if (decoded) {
            console.log(decoded)
            req.email = decoded.email
            next()
        }
    })

}
