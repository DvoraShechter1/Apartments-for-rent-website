import Category from "../modules/category.js"

export const getAll = (req, res) => {

    Category.find()
        .then(categories => {
            res.status(200).send({ categories })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}

export const getById = (req, res) => {

    const _id = req.params.id

    Category.findById(_id)
        .then(category => {
            if (!category) {
                return res.status(404).send({ error: `category not found!` })
            }
            res.status(200).send({ category })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}

export const create = (req, res) => {

    const { name } = req.body

    const category = new Category({
        name,
        appartments: []
    })

    // שמירה מתבצעת על האובייקט
    category.save()
        .then(category => {
            res.status(200).send({ message: `create category ${category._id} succeed!` })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}

// export const update = (req, res) => {

//     const _id = req.params.id

//     if (!_id) {
//         return res.status(400).send({ error: `id is required!` })
//     }

//     if (req.body._id) {
//         return res.status(400).send({ error: `update id is forbidden!` })
//     }

//     Category.findByIdAndUpdate(_id, req.body, { new: true })
//         .then(category => {
//             res.status(200).send({ message: `update category ${category._id} succeed!` })
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message })
//         })
// }

// export const remove = (req, res) => {

//     const _id = req.params.id

//     if (!_id) {
//         return res.status(400).send({ error: `id is required!` })
//     }

//     Category.findByIdAndDelete(_id)
//         .then(category => {
//             res.status(200).send({ message: `delete category ${category._id} succeed!` })
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message })
//         })
// }