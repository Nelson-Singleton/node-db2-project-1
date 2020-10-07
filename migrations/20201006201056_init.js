exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments(); 
        tbl.string('VIN', 512).notNullable().unique().index();
        tbl.string('Make', 128).notNullable().index();
        tbl.string('Model', 64).index();
        tbl.float('Mileage', 8, 2).index();        
        tbl.string('Transmission Type', 128)
        tbl.string('Title Status', 128)
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};