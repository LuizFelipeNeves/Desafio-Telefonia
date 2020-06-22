/* eslint-disable import/prefer-default-export */
import Planos from '../models/Planos';
import Taxas from '../models/Taxas';

const _getTax = ({ origem, destino }) => {
  return Taxas.find(
    (item) => item.origem === origem && item.destino == destino
  );
};

const _getPlano = ({ plano }) => {
  return Planos.find((item) => item.nome === plano);
};

const _getPrices = ({ minutos }, plano, tax) => {
  const semplano = minutos * tax.preco;
  const comPlano = (minutos - plano.minutos) * tax.preco;
  return { comPlano, semplano };
};

const getSimulacao = (args) => {
  const plano = _getPlano(args);
  if (plano) {
    const tax = _getTax(args);
    if (tax) {
      const prices = _getPrices(args, plano, tax);
      return { plano: plano.nome, ...args, ...prices };
    }
    return { error: 'Tarifa não encontrada!' };
  }
  return { error: 'Plano não encontrado!' };
};

export { getSimulacao };
