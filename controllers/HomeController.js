exports.getInternalNabatat = (req, res, next) => {
    return res.status(200).json([
        {
            name:"nabat1",
            id:1
        },
        {
            name:"nabat2",
            id:2
        }
    ])
}