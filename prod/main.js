var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader3', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'harvester3', {role: 'harvester'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'harvester4', {role: 'harvester'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader2', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'harvester2', {role: 'harvester'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader4', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader5', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader6', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader7', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader8', {role: 'upgrader'});
    Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader9', {role: 'upgrader'});
    //Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader9', {role: 'upgrader'});
    //Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader9', {role: 'upgrader'});
    //Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader9', {role: 'upgrader'});
    //Game.spawns['Spawn1'].createCreep([CARRY, MOVE, WORK], 'upgrader9', {role: 'upgrader'});
    
    
    var tower = 0; Game.getObjectById('2a428d5f087b8fb11656db33');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
