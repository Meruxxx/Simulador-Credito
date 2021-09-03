import { TipoCredito, TipoDeuda } from '../types/credito.types';
import { TipoAhorro } from './../types/credito.types';

export const tasaInteresLibreInversion: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
  12: { tasaMensual: 1.46, tasaEA: 19.0 },
  24: { tasaMensual: 1.62, tasaEA: 21.27 },
  36: { tasaMensual: 1.75, tasaEA: 23.14 },
  60: { tasaMensual: 1.85, tasaEA: 24.6 },
  72: { tasaMensual: 1.73, tasaEA: 22.85 },
  73: { tasaMensual: 1.63, tasaEA: 21.41 },
};
export const tasaInteresVivienda: Record<
  number,
  { tasaMensual: number; tasaEA: number }
> = {
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
  73: { tasaMensual: 1.6, tasaEA: 20.98 },
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

export const parametrosAhorro: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 272557 },
};
export const parametrosAhorroContractuales: Record<'NINGUNA', { montoMinimo: number }> = {
  NINGUNA: { montoMinimo: 10000 },
};
export const tasaInteresAhorro: Record<number, { tasaEA: number }> = {
  30: { tasaEA: 0.5 },
  60: { tasaEA: 0.7 },
  90: { tasaEA: 3 },
  120: { tasaEA: 3.1 },
  180: { tasaEA: 4.1 },
  270: { tasaEA: 4.4 },
  360: { tasaEA: 5.2 },
  450: { tasaEA: 5.2 },
  540: { tasaEA: 5.2 },
  720: { tasaEA: 5.2 },
};
export const tasaInteresAhorroContractuales: Record<number, { tasaEA: number }> = {
  6: { tasaEA: 4.00 },
  9: { tasaEA: 4.50 },
  12: { tasaEA: 5.00 },
  15: { tasaEA: 5.50 },
  18: { tasaEA: 5.50 },
  24: { tasaEA: 5.50 }
};

export const CALCULOS_UTILS = {
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  getintervalo(tipoCredito: TipoCredito, numerocuota: number): number {
    let intervalocuota:number=0;
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        if (numerocuota < 13) {
          intervalocuota = 12;
        }
        else if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota <37){
          intervalocuota = 36;
        }

          else if (numerocuota <61){
            intervalocuota = 60;
          }

          else if (numerocuota <73){
            intervalocuota = 72;
          }

          else if (numerocuota >72){
            intervalocuota = 73;
          }
        break;
        case 'VIVIENDA':
          intervalocuota = 84;
          break;
      case 'COMERCIO':
        if (numerocuota < 13) {
          intervalocuota = 12;
        }
        else if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota <37){
          intervalocuota = 36;
        }

          else if (numerocuota <61){
            intervalocuota = 60;
          }

          else if (numerocuota <73){
            intervalocuota = 72;
          }

          else if (numerocuota >72){
            intervalocuota = 73;
          }
        break;
      case 'EDUCATIVO':
        intervalocuota = 12;
        break;
      case 'CREDIFACIL':
        if (numerocuota < 13) {
          intervalocuota = 12;
        }
        else if (numerocuota < 25) {
          intervalocuota = 24;
        }
        else if (numerocuota <37){
          intervalocuota = 36;
        }

          else if (numerocuota <61){
            intervalocuota = 60;
          }

          else if (numerocuota <73){
            intervalocuota = 72;
          }

          else if (numerocuota >72){
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
  ): [valor:number,interes:number,interesesEA:number] | null {
    let parametros;
    let tasaMensual;
    let tasaEA;
    let intervalocuota;
    intervalocuota = this.getintervalo(tipoCredito, numeroCuotas);
    switch (tipoCredito) {
      case 'LIBRE_INVERSION':
        parametros = parametrosLibreInversion[tipoDeuda];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }

        tasaMensual = tasaInteresLibreInversion[intervalocuota].tasaMensual;
        tasaEA = tasaInteresLibreInversion[intervalocuota].tasaEA;
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
        tasaMensual = tasaInteresVivienda[intervalocuota].tasaMensual;
        tasaEA = tasaInteresVivienda[intervalocuota].tasaEA;
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
        tasaMensual = tasaInteresComercio[intervalocuota].tasaMensual;
        tasaEA = tasaInteresComercio[intervalocuota].tasaEA;
        break;
      case 'EDUCATIVO':
        parametros = parametrosEducativo['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
        }
        tasaMensual = tasaInteresEducativo[intervalocuota].tasaMensual;
        tasaEA = tasaInteresEducativo[intervalocuota].tasaEA;
        break;
      case 'CREDIFACIL':
        parametros = parametrosCrediFacil['NINGUNA'];

        if (
          parametros.plazoMaximo < numeroCuotas ||
          parametros.montoMaximo < monto
        ) {
          return null;
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
    return [valorCuota,tasaMensual,tasaEA];
  },
  //TODO: Se debe retornar tambien la informacion del error ocurrido y mostrado en un Toast
  calcularInteresAhorro(
    tipoAhorro: TipoAhorro,
    monto: number,
    plazo: number
  ): [valor:number,interes:number] | null {
    let parametros;
    let tasaEA = 0;
    let interestotal = 0;
    // console.log(tipoAhorro);
    switch (tipoAhorro) {
      case 'CDAT':
        parametros = parametrosAhorro['NINGUNA'];
        // console.log('Validacion del monto'+' '+monto+' '+parametros.montoMinimo);
        if (parametros.montoMinimo > monto) {
          return null;
        }
        // console.log(plazo);
        tasaEA = tasaInteresAhorro[plazo].tasaEA;
        console.log(tasaEA);
        break;
        case 'CONTRACTUALES':
          parametros = parametrosAhorroContractuales['NINGUNA'];
          // console.log('Validacion del monto'+' '+monto+' '+parametros.montoMinimo);
          if (parametros.montoMinimo > monto) {
            return null;
          }
          // console.log(plazo);
        tasaEA = tasaInteresAhorroContractuales[plazo].tasaEA;
        plazo = plazo * 30;
          console.log(tasaEA);
          break;
    }
    //todo al momento de guardar se debe verificar que los parentesis persistan ya que si el autoformateo los quita puede generar error en los calculos
    var TeaT = 1 + (tasaEA / 100);

    var plazoT = (plazo / 365);

    var Tea = Math.pow(TeaT , plazoT) - 1;

    interestotal = monto * Tea;

    return [interestotal,tasaEA];
  },
};
