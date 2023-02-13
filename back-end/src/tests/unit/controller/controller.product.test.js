const chai = require('chai');
const sinon = require('sinon');
const productMocks = require('../mocks/product');
const productController = require('../controller/product');

const expect = chai.expect;

// Descrição do bloco de teste para o controlador de produtos
describe('Product Controller', () => {
  // Variáveis que representam o objeto de requisição (req) e o objeto de resposta (res)
  let req, res, productServiceStub;

  // Antes de cada teste, as variáveis são reinicializadas
  beforeEach(() => {
    req = {};
    res = {
      // Criação de um spy para o método `status` do objeto de resposta
      status: sinon.spy(),
      // Criação de um spy para o método `send` do objeto de resposta
      send: sinon.spy()
    };
    // Criação de um stub para o serviço de produtos
    productServiceStub = sinon.stub();
  });

  // Descrição do bloco de teste para o método `getAllProducts`
  describe('getAllProducts', () => {
    // Teste para verificar se todos os produtos são retornados com o status 200
    it('Deve retornar todos os produtos com status 200', async () => {
      // Configuração do stub para retornar a promise com os mocks dos produtos
      productServiceStub.returns(Promise.resolve(productMocks));
      // Adição do serviço de produtos como local do objeto de requisição
      req.app = {
        locals: {
          productService: productServiceStub
        }
      };

      // Execução do método `getAllProducts` do controlador de produtos
      await productController.getAllProducts(req, res);

      // Verificação se o método `status` do objeto de resposta foi chamado com o valor 200
      expect(res.status.calledWith(200)).to.be.true;
      // Verificação se o método `send` do objeto de resposta foi chamado com os mocks
      expect(res.send.calledWith(productMocks)).to.be.true;
    });

     // Teste para verificar se a mensagem de erro é retornada com o status 500
    it('Deve retornar status 500 e uma mensagem de erro', async () => {
      const errorMessage = 'Error getting products';
      productServiceStub.returns(Promise.reject(new Error(errorMessage)));
      req.app = {
        locals: {
          productService: productServiceStub
        }
      };

      await productController.getAllProducts(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.send.calledWith({ error: errorMessage })).to.be.true;
    });
  });
});
