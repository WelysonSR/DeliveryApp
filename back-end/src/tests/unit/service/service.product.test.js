const sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../../service/product')
const productMocks = require('../mock/productMocks');

describe('Produto - Serviço', () => {
    // Cria uma variável para armazenar a stub do modelo de produto
    let productStub;
  
    // Antes de cada teste, cria uma stub do modelo de produto
    beforeEach(() => {
      productStub = sinon.stub(productService, 'getAllProducts');
    });
  
    // Depois de cada teste, restaura a implementação original do modelo de produto
    afterEach(() => {
      productStub.restore();
    });
  
    // Testa a obtenção de todos os produtos
    it('Deve retornar todos os produtos', async () => {
      // Configura a stub do modelo de produto para retornar a mock de produtos
      productStub.returns(productMocks);
  
      // Obtém todos os produtos através do serviço de produto
      const products = await productService.getAllProducts();
  
      // Verifica se o resultado é igual à mock de produtos
      expect(products).to.deep.equal(productMocks);
    });
  });