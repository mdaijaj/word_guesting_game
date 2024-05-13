
const UserDetail = require('../model/index')


exports.createUserDetail = async (req, res) => {
    try {
      const UserdetailData = await UserDetail.create(req.body)
      return res.status(200).send({
        message: "create successfully!", data: UserdetailData
      })
    }
    catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the UserdetailData."
      });
    }
}


exports.editUserDetail = async (req, res) => {
    try {
  
      const companyData = await UserDetail.find({ _id: req.params.id });
      if (companyData) {
        const updateData = await UserDetail.findByIdAndUpdate({ _id: req.params.id }, {
          $set: req.body
        })
        console.log("updateData", updateData)
        return res.send({ status: "update data successfully! ", "result": updateData })
      }
    }
    catch (err) {
      console.log(err.message)
    }
  }


  exports.getUserDetail = async (req, res) => {
    try {
      console.log(req.params.id)
      const result = await UserDetail.findById({
        _id: req.params.id, status: true
      })
      console.log("result", result)
      if (!result || result == undefined) {
        return res.send("not found restaurant")
      }
      return res.status(200).send({
        message: "user resitered save data",
        data: result
      })
    }
    catch (err) {
      console.log(err.message)
    }
  }


  exports.getUserList = async (req, res) => {
    try {
      console.log(req.params.id)
      const restData = await UserDetail.find().sort({ score: -1 }).limit(10).lean();
      console.log("restData", restData)
      if (!restData || restData == undefined) {
        return res.send("not found restaurant")
      }
      return res.status(200).send({
        message: "user resitered save data",
        data: restData
      })
    }
    catch (err) {
      console.log(err.message)
    }
  }