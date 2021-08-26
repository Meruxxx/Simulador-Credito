import { TipoCredito, TipoDeuda } from '../types/credito.types';

export const tasaInteres: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.46, tasaEA: 19.0 },
  24: { tasaMensual: 1.62, tasaEA: 21.27 },
  36: { tasaMensual: 1.75, tasaEA: 23.14 },
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

export const CALCULOS_UTILS = {
  calcularValorCuota(
    tipoCredito: TipoCredito,
    tipoDeuda: TipoDeuda,
    monto: number,
    numeroCuotas: number
  ): number | null {
    let parametros;

    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        parametros = parametrosLibreInversion[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        break;
      case 'VIVIENDA':
        parametros = parametrosVivienda['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        break;
    }

    const { tasaMensual, tasaEA } = tasaInteres[numeroCuotas];
    const interes = tasaMensual / 100;
    const tasaPlazo = parseFloat(
      Math.pow(1 + interes, -numeroCuotas).toPrecision(2)
    );
    const division = 1 - tasaPlazo;
    const valorCuota = (interes * monto) / division;
    return valorCuota;
  },
};
