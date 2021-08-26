import { TipoCredito, TipoDeuda } from '../types/credito.types';

export const tasaInteresLibreInversion: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.46, tasaEA: 19.0 },
  24: { tasaMensual: 1.62, tasaEA: 21.27 },
  36: { tasaMensual: 1.75, tasaEA: 23.14 },
  60: { tasaMensual: 1.85, tasaEA: 24.6 },
  72: { tasaMensual: 1.73, tasaEA: 22.85 },
};
export const tasaInteresVivienda: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.1, tasaEA: 14.03 },
  24: { tasaMensual: 1.1, tasaEA: 14.03 },
  36: { tasaMensual: 1.1, tasaEA: 14.03 },
  60: { tasaMensual: 1.1, tasaEA: 14.03 },
  72: { tasaMensual: 1.1, tasaEA: 14.03 },
  84: { tasaMensual: 1.1, tasaEA: 14.03 },
};
export const tasaInteresComercio: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.36, tasaEA: 17.6 },
  24: { tasaMensual: 1.51, tasaEA: 19.7 },
  36: { tasaMensual: 1.64, tasaEA: 21.56 },
  60: { tasaMensual: 1.85, tasaEA: 24.6 },
  72: { tasaMensual: 1.7, tasaEA: 22.42 },
};
export const tasaInteresEducativo: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 0.5, tasaEA: 6.17 },
};
export const tasaInteresCrediFacil: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.06, tasaEA: 13.49 },
  24: { tasaMensual: 1.27, tasaEA: 16.35 },
  36: { tasaMensual: 1.38, tasaEA: 17.88 },
};

export const parametrosLibreInversion: Record<
  TipoDeuda,
  { plazoMaximo: number; montoMaximo: number }
> = {
  HIPOTECA: { plazoMaximo: 72, montoMaximo: 408836700 },
  DEUDOR_SOLIDARIO: { plazoMaximo: 60, montoMaximo: 54511560 },
  NINGUNA: { plazoMaximo: 60, montoMaximo: 54511560 },
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
  HIPOTECA: { plazoMaximo: 72, montoMaximo: 408836700 },
  DEUDOR_SOLIDARIO: { plazoMaximo: 60, montoMaximo: 54511560 },
  NINGUNA: { plazoMaximo: 60, montoMaximo: 54511560 },
};
export const parametrosEducativo: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 12, montoMaximo: 999999999 },
};
export const parametrosCrediFacil: Record<
  'NINGUNA',
  { plazoMaximo: number; montoMaximo: number }
> = {
  NINGUNA: { plazoMaximo: 36, montoMaximo: 4000000 },
};
export const CALCULOS_UTILS = {
  calcularValorCuota(
    tipoCredito: TipoCredito,
    tipoDeuda: TipoDeuda,
    monto: number,
    numeroCuotas: number
  ): number | null {
    let parametros;
    let tasaMensual;
    let tasaEA;
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        parametros = parametrosLibreInversion[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        tasaMensual = tasaInteresLibreInversion[numeroCuotas].tasaMensual;
        tasaEA = tasaInteresLibreInversion[numeroCuotas].tasaEA;
        break;
      case 'VIVIENDA':
        parametros = parametrosVivienda['NINGUNA'];
        console.log(parametros);
        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          console.log('validacion de datos incorrecta');
          return null;
        }
        tasaMensual = tasaInteresVivienda[numeroCuotas].tasaMensual;
        tasaEA = tasaInteresVivienda[numeroCuotas].tasaEA;
        console.log('la variables de tasa son' + tasaMensual + tasaEA);
        break;
      case 'COMERCIO':
        parametros = parametrosComercio[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        tasaMensual = tasaInteresComercio[numeroCuotas].tasaMensual;
        tasaEA = tasaInteresComercio[numeroCuotas].tasaEA;
        break;
      case 'EDUCATIVO':
        parametros = parametrosEducativo['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        tasaMensual = tasaInteresEducativo[numeroCuotas].tasaMensual;
        tasaEA = tasaInteresEducativo[numeroCuotas].tasaEA;
        break;
      case 'CREDIFACIL':
        parametros = parametrosCrediFacil['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        tasaMensual = tasaInteresCrediFacil[numeroCuotas].tasaMensual;
        tasaEA = tasaInteresCrediFacil[numeroCuotas].tasaEA;
        break;
    }

    const interes = tasaMensual / 100;
    const tasaPlazo = parseFloat(
      Math.pow(1 + interes, -numeroCuotas).toPrecision(2)
    );
    const division = 1 - tasaPlazo;
    const valorCuota = (interes * monto) / division;
    return valorCuota;
  },
};
