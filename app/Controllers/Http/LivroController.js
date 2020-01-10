'use strict'

const book =  use('App/Models/Livro')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with book
 */
class LivroController {
  /**
   * Show a list of all book.
   * GET book
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const livro = book.all()

    return livro
  }

  /**
   * Render a form to be used for creating a new livro.
   * GET book/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new livro.
   * POST book
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { id } = auth.user
    const data = request.only(["codigo", "titulo", "autor", "ano"])

    const livro = await book.create({...data, user_id: id})

    return livro
  }

  /**
   * Display a single livro.
   * GET book/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const livro = await book.findOrFail(params.id)

    return livro
  }

  async update ({ params, request, response }) {
    const livro = await book.findOrFail(params.id)
    const data = request.only(["codigo", "titulo", "autor", "ano"])

    livro.merge(data)

    await livro.save()

    return livro
  }

  /**
   * Delete a livro with id.
   * DELETE book/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const livro = await book.findOrFail(params.id)

    /*if (livro.user_id !== auth.user.id) {
        return response.status(401).send({ error: 'Not authorized' })
    }*/

    await livro.delete()
  }
}

module.exports = LivroController