import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


import { Response } from 'superagent';
import UserModel from '../database/models/UsersModel';
import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

const userMock = {
  email: 'user@user.com',
  password: 'secret_user',
}

const wrongUserMock = {
  email: 'user@user.com',
  password: 'aaaaa',
}

const userWithoutEmailMock = {
  email: '',
  password: 'secret_user',
}

const userWithoutPasswordMock = {
  email: 'user@user.com',
  password: '',
}


describe('Testes referente a model Users', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Deve fazer login no sistema', async () => {
    const response = await chai.request(app).post('/login').send(userMock);

    expect(response.status).to.be.equal(200);
  })

  it('Deve retornar mensagem de erro ao tentar fazer login sem informar email', async () => {
    const response = await chai.request(app).post('/login').send(userWithoutEmailMock);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  })

  it('Deve retornar mensagem de erro ao tentar fazer login sem informar senha', async () => {
    const response = await chai.request(app).post('/login').send(userWithoutPasswordMock);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  })

  it('Deve retornar mensagem de erro ao tentar fazer login com dados incorretos', async () => {
    const response = await chai.request(app).post('/login').send(wrongUserMock);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  })
})