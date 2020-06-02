const mySkills = require('../models/skill')

const skills = (req, res, next) => {
    res.render('skills', {
      skills: mySkills.returnAll(),
      time: req.time
    })
  }

  const Display = (req, res) => {
    res.render('skills/display', {
      skills: mySkills.getone(req.params,id),
      id: parseInt(req.params.id)
    })
  }

  var NewSkill = (req, res) => {
    res.render('skills/add')
  }

const addSkill = (req, res) => {
  mySkills.create(req.body)
  res.redirect('/add')
}

  const  delSkill= (req, res) => {
    mySkills.deleteOne(req.params.id)
    res.redirect('/skills')
  }

  module.exports = {
    skills,
    Display,
    NewSkill,
    delSkill,
    addSkill,
  }