
const { request , response } = require("express");
const { robots } = require("../robots");

const getRobots = ( req = request , res = response )=> {
    
    return res.json({
        robots:robots
    });
}

const getRobotsById = (req = request , res = response) => {


    const id = req.params.id;

    let robotS = "";

    robotS = robots.find(( robot )=> {
        return robot.id === id;
    })

    if(robotS){
        return res.json({
            ok:true,
            robotS,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"Error , no hay un robot con ese id",
            statusCode:404
        });
    }

}


module.exports = {
    getRobots,
    getRobotsById
}