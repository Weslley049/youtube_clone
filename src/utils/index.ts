import { differenceInDays, differenceInMonths, format } from 'date-fns';

export function formatarNumero(numero: number) {
    if (numero >= 1000000) {
      return (numero / 1000000).toFixed(1).toLocaleString() + ' mil';
    }
   
    else {
      return numero.toString().toLocaleString();
    }
}


export function calcularDiferencaDatas(dataInicial: string) {
    const diffDias = differenceInDays(format(new Date(), 'dd/MM/yyyy'), new Date(dataInicial));
    const diffMeses = differenceInMonths(format(new Date(), 'dd/MM/yyyy'), new Date(dataInicial));
   
    return !diffDias && !diffMeses ? 'Agora' : 
    diffDias === 30 ? `há ${diffDias} dias` : `há ${diffMeses} meses`

    
}

