const userCtrl = {
    register: (reg, res) =>{
        res.json({msg: 'from user router registered'})
    }
};

module.exports = userCtrl;
