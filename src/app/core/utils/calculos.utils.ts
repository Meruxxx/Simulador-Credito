import { TipoCredito, TipoDeuda } from '../types/credito.types';
import { TipoAhorro } from './../types/credito.types';

export const tasaInteresLibreInversion: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.85, tasaEA: 24.61 },
  24: { tasaMensual: 1.83, tasaEA: 24.32 },
  36: { tasaMensual: 1.80, tasaEA: 23.88 },
  60: { tasaMensual: 1.78, tasaEA: 23.54 },
  72: { tasaMensual: 2.13, tasaEA: 28.84 }, // Pendiente 23 jun 2026
};

export const tasaInteresVivienda: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  84: { tasaMensual: 1.15, tasaEA: 14.70 },
};

export const tasaInteresComercio: Record< // Pendiente 23 jun 2026. Cambiar nombre Crédito Popular Productivo
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.99, tasaEA: 26.68 },
  24: { tasaMensual: 1.99, tasaEA: 26.68 },
  36: { tasaMensual: 1.99, tasaEA: 26.68 },
  60: { tasaMensual: 2.29, tasaEA: 31.15 }, // quitar
  72: { tasaMensual: 2.08, tasaEA: 28.08 }, // quitar
};

export const tasaInteresEducativo: Record< // Hay más meses. Falta adicionar para cálculo
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.09, tasaEA: 13.90 },
  24: { tasaMensual: 1.19, tasaEA: 15.26 },
  36: { tasaMensual: 1.29, tasaEA: 16.69 },
};

export const tasaInteresCrediFacil: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.85, tasaEA: 24.61 },
  24: { tasaMensual: 1.85, tasaEA: 24.61 },
  36: { tasaMensual: 1.85, tasaEA: 24.61 },
};

export const parametrosLibreInversion: Record<
  TipoDeuda,
  { plazoMaximo: number; montoMaximo: number }
> = {
  HIPOTECA: { plazoMaximo: 60, montoMaximo: 408836700 }, // Se pasaron todos de 72 a 36 el 23jun2026
  DEUDOR_SOLIDARIO: { plazoMaximo: 60, montoMaximo: 408836700 },
  NINGUNA: { plazoMaximo: 60, montoMaximo: 408836700 },
};

export const parametrosVivienda: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 84, montoMaximo: 122651010 },
};

export const parametrosComercio: Record<
  TipoDeuda,
  { plazoMaximo: number; montoMaximo: number }
> = {
  HIPOTECA: { plazoMaximo: 36, montoMaximo: 408836700 }, // se pasaron todos de 72 a 36 el 23jun2026
  DEUDOR_SOLIDARIO: { plazoMaximo: 36, montoMaximo: 408836700 },
  NINGUNA: { plazoMaximo: 36, montoMaximo: 408836700 },
};

export const parametrosEducativo: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 36, montoMaximo: 999999999 }, // se pasó de 12 a 36 el 23jun2026
};

export const parametrosCrediFacil: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 36, montoMaximo: 4000000 },
};

export const parametrosAhorro: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 272557 },
};

export const parametrosAhorroContractuales: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 10000 },
};

export const tasaInteresAhorro: Record<number, { tasaEA: number }> = {
  30: { tasaEA: 1.43 },
  60: { tasaEA: 1.75 },
  90: { tasaEA: 6.66 },
  120: { tasaEA: 6.81 },
  180: { tasaEA: 7.27 },
  270: { tasaEA: 7.27 },
  360: { tasaEA: 8.39 },
  450: { tasaEA: 8.91 },
  540: { tasaEA: 8.91 },
  720: { tasaEA: 8.91 },
};

export const tasaInteresAhorroContractuales: Record<number, { tasaEA: number }> = {
  6: { tasaEA: 4.00 },
  9: { tasaEA: 4.50 },
  12: { tasaEA: 5.00 },
  15: { tasaEA: 5.50 },
  18: { tasaEA: 5.50 },
  24: { tasaEA: 5.50 },
  36: { tasaEA: 6.50 },
};

export const CALCULOS_UTILS = {
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  getintervalo(tipoCredito: TipoCredito, numerocuota: number): number {
    let intervalocuota: number = 0;
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        if (numerocuota < 13) {
          intervalocuota = 12;
        } else if (numerocuota < 25) {
          intervalocuota = 24;
        } else if (numerocuota < 37) {
          intervalocuota = 36;
        } else if (numerocuota < 61) {
          intervalocuota = 60;
        } else if (numerocuota < 73) {
          intervalocuota = 72;
        } else if (numerocuota > 72) {
          intervalocuota = 72;
        }
        break;
      case 'VIVIENDA':
        intervalocuota = 84;
        break;
      case 'COMERCIO':
        if (numerocuota < 13) {
          intervalocuota = 12;
        } else if (numerocuota < 25) {
          intervalocuota = 24;
        } else if (numerocuota < 37) {
          intervalocuota = 36;
        } else if (numerocuota < 61) {
          intervalocuota = 60;
        } else if (numerocuota < 73) {
          intervalocuota = 72;
        } else if (numerocuota > 72) {
          intervalocuota = 72;
        }
        break;
      case 'EDUCATIVO':
        if (numerocuota < 13) {
          intervalocuota = 12;
        } else if (numerocuota < 25) {
          intervalocuota = 24;
        } else if (numerocuota < 37) {
          intervalocuota = 36;
        }
        break;
      case 'CREDIFACIL':
        if (numerocuota < 13) {
          intervalocuota = 12;
        } else if (numerocuota < 25) {
          intervalocuota = 24;
        } else if (numerocuota < 37) {
          intervalocuota = 36;
        } else if (numerocuota < 61) {
          intervalocuota = 60;
        } else if (numerocuota < 73) {
          intervalocuota = 72;
        } else if (numerocuota > 72) {
          intervalocuota = 73;
        }
        break;
    }
    return intervalocuota;
  },

  calcularValorCuota(
    tipoCredito: TipoCredito,
    tipoDeuda: TipoDeuda,
    monto: number,
    numeroCuotas: number
  ): [valor: number, interes: number, interesesEA: number, error: string] {
    let parametros;
    let tasaMensual;
    let tasaEA;
    let intervalocuota;
    intervalocuota = this.getintervalo(tipoCredito, numeroCuotas);
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        parametros = parametrosLibreInversion[tipoDeuda];

        if (parametros.plazoMaximo < numeroCuotas) {
          return [0, 0, 0, 'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0, 0, 0, 'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }

        tasaMensual = tasaInteresLibreInversion[intervalocuota].tasaMensual;
        tasaEA = tasaInteresLibreInversion[intervalocuota].tasaEA;
        break;
      case 'VIVIENDA':
        parametros = parametrosVivienda['NINGUNA'];
        if (parametros.plazoMaximo < numeroCuotas) {
          return [0, 0, 0, 'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0, 0, 0, 'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresVivienda[intervalocuota].tasaMensual;
        tasaEA = tasaInteresVivienda[intervalocuota].tasaEA;
        break;
      case 'COMERCIO':
        parametros = parametrosComercio[tipoDeuda];

        if (parametros.plazoMaximo < numeroCuotas) {
          return [0, 0, 0, 'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0, 0, 0, 'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresComercio[intervalocuota].tasaMensual;
        tasaEA = tasaInteresComercio[intervalocuota].tasaEA;
        break;
      case 'EDUCATIVO':
        parametros = parametrosEducativo['NINGUNA'];

        if (parametros.plazoMaximo < numeroCuotas) {
          return [0, 0, 0, 'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0, 0, 0, 'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresEducativo[intervalocuota].tasaMensual;
        tasaEA = tasaInteresEducativo[intervalocuota].tasaEA;
        break;
      case 'CREDIFACIL':
        parametros = parametrosCrediFacil['NINGUNA'];

        if (parametros.plazoMaximo < numeroCuotas) {
          return [0, 0, 0, 'El número de cuotas supera el plazo maximo establecido para el crédito.'];
        }
        if (parametros.montoMaximo < monto) {
          return [0, 0, 0, 'El monto insgresado supera el monto maximo establecido para el crédito.'];
        }
        tasaMensual = tasaInteresCrediFacil[intervalocuota].tasaMensual;
        tasaEA = tasaInteresCrediFacil[intervalocuota].tasaEA;
        break;
    }

    const interes = tasaMensual / 100;
    const tasaPlazo = parseFloat(
      Math.pow(1 + interes, -numeroCuotas).toPrecision(2)
    );
    const division = 1 - tasaPlazo;
    const valorCuota = (interes * monto) / division;
    return [valorCuota, tasaMensual, tasaEA, ''];
  },
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  calcularInteresAhorro(
    tipoAhorro: TipoAhorro,
    monto: number,
    plazo: number
  ): [valor: number, interes: number] | null {
    let parametros;
    let tasaEA = 0;
    let interestotal = 0;
    console.log(tipoAhorro);
    switch (tipoAhorro) {
      case 'CDAT':
        console.log('se consulta parametros de cdat');
        parametros = parametrosAhorro['NINGUNA'];
        if (parametros.montoMinimo > monto) {
          return null;
        }
        tasaEA = tasaInteresAhorro[plazo].tasaEA;
        var TeaT = 1 + (tasaEA / 100);
        var plazoT = (plazo / 365);
        var Tea = Math.pow(TeaT, plazoT) - 1;
        interestotal = monto * Tea;
        console.log('interestotal cdat ' + interestotal);
        return [interestotal, tasaEA];
      case 'CONTRACTUALES':
        parametros = parametrosAhorroContractuales['NINGUNA'];
        if (parametros.montoMinimo > monto) {
          return null;
        }
        tasaEA = tasaInteresAhorroContractuales[plazo].tasaEA;
        plazo = plazo * 30;
        var TeaT = 1 + (tasaEA / 100);
        var plazoT = (30 / 360);
        var Tna = Math.pow(TeaT, plazoT) - 1;
        var valorsup = ((Math.pow(1 + Tna, plazo / 30)) - 1);
        interestotal = (monto * (valorsup / Tna)) - (monto * plazo / 30);
        console.log('interestotal ' + interestotal);
        return [interestotal, tasaEA];
    }
    return null;
  },
};
