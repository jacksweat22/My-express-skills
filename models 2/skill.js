const mySkills = [
    {skill: "html", learned: true},
    {skill: "Javascript", learned: true},
    {skill: "CSS", learned: true},
    {skill: "React", learned: false},
    {skill: "Express", learned: false},
]

const returnAll = () => {
    return mySkills
}

const returnOne = (id) => {
    return skills[id]
}

const addSkill = (skill) => {
    skills.push(skill)
}

const delSkill = (id) => {
    skills.splice(id, 1)
}
module.exports = {
    returnAll,
    returnOne,
    addSkill,
    delSkill,
}
