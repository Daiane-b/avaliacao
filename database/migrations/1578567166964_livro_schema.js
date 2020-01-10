'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivrosSchema extends Schema {
  up () {
    this.create('livro', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')  
      .onDelete('CASCADE')
      table.string('codigo').notNullable()
      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.string('ano').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('livro')
  }
}

module.exports = LivrosSchema
